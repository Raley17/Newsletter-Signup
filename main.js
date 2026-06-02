const form = document.querySelector("form");
const emailInput = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");
const popUp = document.querySelector("article");
const dismissButton = document.getElementById("dismissButton");
const errorMsg = document.getElementById("errorLabel");

function handleSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", handleSubmit);

function hideForm() {
  popUp.style.opacity = "0";
  popUp.style.zIndex = "-2";
  form.style.opacity = "1";
}

dismissButton.addEventListener("click", hideForm);

submitButton.addEventListener("click", function () {
  if (!emailInput.validity.valid) {
    emailInput.classList.add("erroremail");
    errorMsg.style.opacity = "1";
  } else {
    form.style.opacity = "0";
    popUp.style.zIndex = "2";
    popUp.style.opacity = "1";
  }
});
