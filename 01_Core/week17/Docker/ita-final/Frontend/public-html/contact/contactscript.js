const myForm = document.getElementById("myForm");

//Function to add contacts to DB
function postContact() {
	const formData = new FormData(myForm);
	var myFormInfo = {};
	formData.forEach(function(value, key){
    	myFormInfo[key] = value;
	});
	var json = JSON.stringify(myFormInfo);
	// POST request using fetch() 
	fetch(`http://localhost:8080/contact/contacts`, { 
      
    
    //Setting method to POST
    mode: "no-cors",
    method: "POST",
    headers: { 
        "Content-type": "application/json;charset=UTF-8"
    },  
      
    // Adding body or contents to send 
    body: json
       
    
}) 

//Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json)); 
}







