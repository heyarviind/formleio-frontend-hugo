var signupButton = $("#signup-button");
var signupEmail = $("#cover-signup-email");
var signupForm = $("#signupForm");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  window.location = "https://app.uisuite.io/signup?email=" + signupEmail.value;
});

function $(el) {
  return document.querySelector(el);
}

function $All(el) {
  return document.querySelectorAll(el);
}
