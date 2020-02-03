
getProducts();


//Fetch function to get products from database
function getProducts() {
  fetch(`http://localhost:8080/products/products.html`)
  .then(response => {
	   return response.json();
  })
  .then(data => {
    displayDom(data);

  })
}


//Function to take fetch data and populate content to the DOM
function displayDom(c) {
  for (i=0; i<c.length;i++)
  {
    document.getElementById(i+1).src = c[i].Image;
    document.getElementById("Name"+i.toString()).innerHTML = c[i].Name;
    document.getElementById("Caption"+i.toString()).innerHTML = c[i].Caption;
    document.getElementById("Price"+i.toString()).innerHTML = "$" + c[i].Price;
  }
}

////////////////////////////////////////////////////////////////Filter Functions/////////////////////////////////////////////////////////
// Filter By Name
function filterName(a, b) {
  
  const nameA = a.Name.toUpperCase();
  const nameB = b.Name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

function filterByName() {
  fetch(`http://localhost:8080/products/products.html`)
  .then(response => {
     return response.json();
  })
  .then(data => {
    var sortName = data.sort(filterName);
    displayDom(sortName);

  })

}
//Filter By Price
function filterPrice(a, b) {
  
  const priceA = a.Price;
  const priceB = b.Price;

  let comparison = 0;
  if (priceA > priceB) {
    comparison = 1;
  } else if (priceA < priceB) {
    comparison = -1;
  }
  return comparison;
}

function filterByPrice() {
  fetch(`http://localhost:8080/products/products.html`)
  .then(response => {
     return response.json();
  })
  .then(data => {
    var sortPrice = data.sort(filterPrice);
    displayDom(sortPrice);

  })

}
//Filter By Quantity
function filterQuantity(a, b) {
  
  const quantityA = a.Quantity;
  const quantityB = b.Quantity;

  let comparison = 0;
  if (quantityA > quantityB) {
    comparison = 1;
  } else if (quantityA < quantityB) {
    comparison = -1;
  }
  return comparison;
}

function filterByQuantity() {
  fetch(`http://localhost:8080/products/products.html`)
  .then(response => {
     return response.json();
  })
  .then(data => {
    var sortQuantity = data.sort(filterQuantity);
    displayDom(sortQuantity);

  })

}

//Filter By Rating
function filterRating(a, b) {
  
  const ratingA = a.Rating;
  const ratingB = b.Rating;

  let comparison = 0;
  if (ratingA > ratingB) {
    comparison = 1;
  } else if (ratingA < ratingB) {
    comparison = -1;
  }
  return comparison * -1;
}

function filterByRating() {
  fetch(`http://localhost:8080/products/products.html`)
  .then(response => {
     return response.json();
  })
  .then(data => {
    var sortRating = data.sort(filterRating);
    displayDom(sortRating);

  })

}






//Drop down button function that adds event listerners to clicks for filtering

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("Name").addEventListener("click", filterByName);
  document.getElementById("Price").addEventListener("click", filterByPrice);
  document.getElementById("Quantity").addEventListener("click", filterByQuantity);
  document.getElementById("Rating").addEventListener("click", filterByRating);

}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}






