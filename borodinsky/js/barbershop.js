var loginLink = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-close");
var login = modalLogin.querySelector("[name=login]");
console.log(loginLink);

loginLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalLogin.style.display = "block";
	login.focus();
});
// loginLink.onclick = function() {
// 	modalLogin.style.display = "block";
// }

modalClose.onclick = function() {
	modalLogin.style.display = "none";
}


















var galleryButtonNext = document.querySelector(".gallery-button-next");
var galleryButtonBack = document.querySelector(".gallery-button-back");

var images = document.querySelectorAll(".gallery-content img");
var i = 0;

galleryButtonNext.onclick =  function() {
	images[i].style.display = "none";
	i = i + 1;

	if( i >= images.length) {
		i = 0;
	}

	images[i].style.display = "block";
}

galleryButtonBack.onclick = function() {
	images[i].style.display = "none";
	i = i - 1;

	if(i < 0) {
		i = images.length - 1;
	}

	images[i].style.display = "block";
}
