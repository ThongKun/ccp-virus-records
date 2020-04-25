// Get the modal
var modal_laptop = document.getElementById("modal-container-laptop");
var modal_mobile = document.getElementById("modal-container-mobile");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    if (screen.width >= 1083) {
        modal_laptop.style.display = "flex";
    } else {
        modal_mobile.style.display = "flex";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_laptop.style.display = "none";
}
span2.onclick = function() {
    modal_mobile.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_laptop || event.target == modal_mobile) {
        modal_mobile.style.display = "none";
        modal_laptop.style.display = "none";
    }
}