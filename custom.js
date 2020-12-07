// Sticky Add to cart On Product Page

window.onscroll = function () {
    myFunction()
};

var ofDiv = document.querySelector(".payment-buttons");
var sticky = ofDiv.offsetTop;
var navbar = document.querySelector(".custom-sticky");

function myFunction() {
    console.log('yes')
    if (window.pageYOffset >= sticky + 50) {
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("active");
    }
}