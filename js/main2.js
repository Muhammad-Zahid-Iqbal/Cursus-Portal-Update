let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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


/*Here is Ellipse dropDown share save and reported block start */

let slideIndex2 = 1;
ellipFunction(slideIndex2);

function ellipFunction(){
  document.getElementById("ellipseContent").classList.toggle('show');
}

var slideEllipse = document.getElementsByClassName("dropdownContent");
     let i=0;
     if (z > slideEllipse.length) {slideIndex2 = 1}    
    if (z < 1) {slideIndex2 = slideEllipse.length}
     for (i = 0; i < slideEllipse.length; i++) {
      slideEllipse[i].style.display = "none";  
    }
    slideEllipse [slideIndex2-1].style.display = "block";  
    /*Here is Ellipse dropDown share save and reported block end */



   
    