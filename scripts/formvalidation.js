const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const passwordMessage = document.querySelector("#passwordMessage");
const pageRating = document.querySelector('#pageRating');
const ratingValue = document.querySelector('#ratingValue');

pageRating.addEventListener('input', () => {
    ratingValue.textContent = pageRating.value;
});


pass2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pass1.value !== pass2.value) {
		passwordMessage.textContent = "Both password must match";
		pass1.value = "";
		pass2.value = "";
		pass1.focus();
	} else {
        passwordMessage.textContent = ""
	}
}
