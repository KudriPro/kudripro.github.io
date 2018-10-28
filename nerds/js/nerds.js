var feedbackBtn = document.querySelector("#feedback-btn");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = document.querySelector(".close");


feedbackBtn.onclick = function() {
	modalFeedback.style.display = "block";
}

modalClose.onclick = function() {
	modalFeedback.style.display = "none";
}
