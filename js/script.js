window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    header.style.background = "#503808";
  } else {
    header.classList.remove("sticky");
    header.style.background = "transparent";
  }
}
