window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("headerDiv");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
    header.classList.remove("container");
  } else {
    header.classList.add("container");
    header.classList.remove("sticky-header");
  }
}
