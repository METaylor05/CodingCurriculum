var slidesArray = [];
var slideNumber = 0;

var mainSlide0 = document.querySelector(".slide-1");
var mainSlide1 = document.querySelector(".slide-2");
var mainSlide2 = document.querySelector(".slide-3");
slidesArray[0] = mainSlide0;
slidesArray[1] = mainSlide1;
slidesArray[2] = mainSlide2;



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