/***************************Establishing variables and connecting them to DOM****************************/
var slidesArray = [];
var slideNumber = 0;

var mainSlide0 = document.querySelector(".slide-1");
var mainSlide1 = document.querySelector(".slide-2");
var mainSlide2 = document.querySelector(".slide-3");
slidesArray[0] = mainSlide0;
slidesArray[1] = mainSlide1;
slidesArray[2] = mainSlide2;

/***********************Fetch Request to pull product images from DB to slide show****************/
fetch(`http://localhost:8080/index.html`)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    for (i=0; i<data.length;i++)
    {
        if (i >= 4) {
            document.getElementById(i).src = data[i].Image;
        }
        
    }
    
})

/************************************Function to move slide forward*********************************/
function slideNext() {


    if (slideNumber == 0) {
        slideNumber = slideNumber + 1;
        mainSlide0.classList.toggle("show");
        mainSlide1.classList.toggle("show");


    } else if (slideNumber == 1) {
        slideNumber = slideNumber + 1;
        mainSlide1.classList.toggle("show");
        mainSlide2.classList.toggle("show");
    } else if (slideNumber == 2) {
        slideNumber = 0;
        mainSlide2.classList.toggle("show");
        mainSlide0.classList.toggle("show");
    }


}

/************************************Function to move slide Backward*********************************/
function slideBefore() {
    if (slideNumber == 2) {
        slideNumber = slideNumber - 1;
        mainSlide2.classList.toggle("show");
        mainSlide1.classList.toggle("show");

    } else if (slideNumber == 1) {
        slideNumber = slideNumber - 1;
        mainSlide1.classList.toggle("show");
        mainSlide0.classList.toggle("show");
    } else if (slideNumber == 0) {
        slideNumber = 2;
        mainSlide0.classList.toggle("show");
        mainSlide2.classList.toggle("show");
    }
}