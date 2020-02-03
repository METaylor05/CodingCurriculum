package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

//User struct for DB query
type User struct {
	ID         int64  `json:"id"`
	FIRST_NAME string `json:"FIRST_NAME"`
	LAST_NAME  string `json:"LAST_NAME"`
	PHONE      string `json:"PHONE"`
	EMAIL      string `json:"EMAIL"`
	PCM        string `json:"PCM"`
	HDUHAU     string `json:"HDUHAU"`
	COMMENTS   string `json:"COMMENTS"`
}

//Contacts struct for loading contacts into DB
type Contact struct {
	ID         int64  `json:"id"`
	FIRST_NAME string `json:"FIRST_NAME"`
	LAST_NAME  string `json:"LAST_NAME"`
	PHONE      string `json:"PHONE"`
	EMAIL      string `json:"EMAIL"`
	PCM        string `json:"PCM"`
	HDUHAU     string `json:"HDUHAU"`
	COMMENTS   string `json:"COMMENTS"`
}

//Product struct for pulling Products from DB
type Product struct {
	ID      int    `json:"id"`
	Name    string `json:"Name"`
	Image   string `json:"Image"`
	Caption string `json:"Caption"`
	Rating  int    `json:"Rating"`
	Price   int    `json:"Price"`
	Qty     int    `json:"Qty"`
}

func main() {
	////////////////////////////////////////////////////////////////////Database Code/////////////////////////////////////////////////////////////////////////
	fmt.Println("Go MySQL Tutorial")
	//Setting connection pool to DB.
	database, err := sql.Open("mysql", "root:root@tcp(db:3306)/website_db")

	db = database

	if err != nil {
		fmt.Println(err) //
	}

	defer db.Close()
	//Querying what in the database. Just a simple way to check what's in the contacts database
	results, err := db.Query("SELECT * FROM contacts")

	if err != nil {
		fmt.Println(err) //
	}

	for results.Next() {
		var user User

		err = results.Scan(&user.ID, &user.FIRST_NAME, &user.LAST_NAME, &user.PHONE, &user.EMAIL, &user.PCM, &user.HDUHAU, &user.COMMENTS)
		if err != nil {
			fmt.Println(err) //
		}

		fmt.Println(user)
	}

	/////////////////////////////////////////////////////////////////////////////////Database Code End///////////////////////////////////////////////////////////////////////////

	http.HandleFunc("/index.html", Products)
	http.HandleFunc("/contact/contacts", PostContacts)
	http.HandleFunc("/products/products.html", Products)
	http.ListenAndServe(":8080", nil)

}

//Products function to returns products
func Products(w http.ResponseWriter, req *http.Request) {
	results, err := db.Query("SELECT * FROM products")
	products := []Product{}
	enableCors(&w)

	if err != nil {
		fmt.Println(err) //
	}

	for results.Next() {
		var product Product
		err = results.Scan(&product.ID, &product.Name, &product.Image, &product.Caption, &product.Rating, &product.Price, &product.Qty)
		if err != nil {
			fmt.Println(err) //
		}
		products = append(products, product)
		fmt.Println(product)

	}
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(products)
}

//func to enable cors to handle those pesky errors
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func PostContacts(w http.ResponseWriter, req *http.Request) {
	fmt.Println("I at least heard the request.")
	//New Contact struct created to hold the request that just came in.
	var contact Contact
	//reading the request body with json decoder and storing data in the contact we just created
	json.NewDecoder(req.Body).Decode(&contact)
	//just checking to verify contact info send is correct.
	fmt.Println(contact)

	query := `INSERT INTO contacts (FIRST_NAME, LAST_NAME, PHONE, EMAIL, PCM, HDUHAU, COMMENTS) values (?,?,?,?,?,?,?)`

	res, err := db.Exec(query, contact.FIRST_NAME, contact.LAST_NAME, contact.PHONE, contact.EMAIL, contact.PCM, contact.HDUHAU, contact.COMMENTS)
	//Handling errors
	if err != nil {
		fmt.Println(err)
		return
	}
	//will only produce errors if we weren't able to connect to db else nil

	id, err := res.LastInsertId()
	//Handling errors.
	if err != nil {
		fmt.Println(err)
		return
	}
	//Using the go mysql driver last id function to return last inserted it
	// grabbing that last id to show that Client/user we have the correct information.
	contact.ID = id

	//Sending a success 201 response since we successfully saved the contact to our DB.
	w.WriteHeader(http.StatusCreated)

	//Creating a response to the Client side.
	json.NewEncoder(w).Encode(contact)
}
