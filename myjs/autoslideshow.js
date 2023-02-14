let dots = document.getElementsByClassName("dot");
let slides = document.getElementsByClassName("mySlides");
let slideIndex = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
let slideIndex5 = 0;
let slideIndex6 = 0;
showSlides();
showSlides2();
showSlides3();
showSlides4();
showSlides5();

manualshowSlides(slideIndex);

function plusSlides(n) {
  manualshowSlides(slideIndex += n);
}

function currentSlide(n) {
  manualshowSlides(slideIndex = n);
}

function manualshowSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("myslide2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides2.length) {slideIndex3 = 1}
  slides2[slideIndex3-1].style.display = "block";  
  setTimeout(showSlides2, 3000);
}

function showSlides3() {
  let i;
  let slides2 = document.getElementsByClassName("myslide3");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides2.length) {slideIndex4 = 1}
  slides2[slideIndex4-1].style.display = "block";  
  setTimeout(showSlides3, 3000);
}

function showSlides4() {
  let i;
  let slides2 = document.getElementsByClassName("myslide4");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex5++;
  if (slideIndex5 > slides2.length) {slideIndex5 = 1}
  slides2[slideIndex5-1].style.display = "block";  
  setTimeout(showSlides4, 3000);
}

function showSlides5() {
  let i;
  let slides2 = document.getElementsByClassName("myslide5");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex6++;
  if (slideIndex6 > slides2.length) {slideIndex6 = 1}
  slides2[slideIndex6-1].style.display = "block";  
  setTimeout(showSlides5, 3000);
}