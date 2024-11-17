// SCRIPT FOR CONTACT PAGE FORM
const form = document.querySelector(".contact-form");
const fNameInput = document.querySelector("#fName");
const lNameInput = document.querySelector("#lName");
const emailInput = document.querySelector("#email");
const teleInput = document.querySelector("#tele");
const textArea = document.querySelector(".custom-textarea");

const inputsArray = [fNameInput, lNameInput, emailInput, teleInput];

const fnameError = document.querySelector(".fname-error");
const lnameError = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const teleError = document.querySelector(".tele-error");
const textAreaError = document.querySelector(".textarea-error");

form.addEventListener("submit", (e) => {
  // Regular Expression for Email and Telephone Validation
  // Standard email regex
  let emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  // Tele regex that allows 10 characters
  let teleRegex = /^\d{10}$/;

  // Validating First Name
  if (fNameInput.value === "" || fNameInput.value === null) {
    e.preventDefault();
    fnameError.innerHTML = "- Error: First Name is required";
  } else if (fNameInput.value.length < 2) {
    e.preventDefault();
    fnameError.innerHTML = "- Error: First name requires at least 2 characters";
  } else if (fNameInput.value.length > 20) {
    e.preventDefault();
    fnameError.innerHTML = "- Error: First name has a max of 20 characters";
  } else {
    fnameError.innerHTML = "";
  }

  // Validating Last Name
  if (lNameInput.value === "" || lNameInput.value === null) {
    e.preventDefault();
    lnameError.innerHTML = "- Error: Last Name is required";
  } else if (lNameInput.value.length < 2) {
    e.preventDefault();
    lnameError.innerHTML = "- Error: Last name requires at least 2 characters";
  } else if (lNameInput.value.length > 20) {
    e.preventDefault();
    lnameError.innerHTML = "- Error: Last name has a max of 20 characters.";
  } else {
    lnameError.innerHTML = "";
  }

  // Validating Email
  if (!emailInput.value.match(emailRegex)) {
    e.preventDefault();
    emailError.innerHTML = "- Error: Valid email is required";
  } else {
    emailError.innerHTML = "";
  }

  // Validating Phone Number
  if (!teleInput.value.match(teleRegex)) {
    e.preventDefault();
    teleError.innerHTML =
      "- Error: Valid phone number of 10 digits is required";
  } else {
    teleError.innerHTML = "";
  }

  // Validating textArea Additional comments
  if (textArea.value === "" || textArea.value === null) {
    e.preventDefault();
    textAreaError.innerHTML = "- Error: Additional comments are required";
  } else if (textArea.value.length < 20) {
    e.preventDefault();
    textAreaError.innerHTML = "- Error: Additional comments needs at least 20 characters";
  } else if (textArea.value.length > 1001) {
    e.preventDefault();
    textAreaError.innerHTML = "- Error: Additional comments have a limit of 1000 characters.";
  } else {
    textAreaError.innerHTML = "";
  }
});
