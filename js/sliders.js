//Small slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }

  x[slideIndex-1].style.display = "inline-block";

}

window.onload = function start() {
  i = slideIndex;
  n = 0;
  do {
      setTimeout(plusDivs(n + 1), 3000);
      n++;
  }
  while (i < n) ;
    setTimeout(start, 3000);
}
