var submit = document.querySelector("#submit");
submit.addEventListener("click", validate);

function validate(event) {
  event.preventDefault(); // stops the required attribute from overwriting the rest of code below
  var fName = document.querySelector("#fName");
  var lName = document.querySelector("#lName");
  var email = document.querySelector("#email");
  var questions = document.querySelector("#questions");

  if (fName.value == "") {
    fName.placeholder = "Please provide your First Name";
    fName.classList.add("error");
  } else {
    fName.classList.remove("error");
  }

  if (lName.value == "") {
    lName.placeholder = "Please provide your Last Name";
    lName.classList.add("error");
  } else {
    lName.classList.remove("error");
  }

  if (email.value == "") {
    email.placeholder = "Please provide your Email";
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (questions.value == "") {
    questions.placeholder =
      "Please provide a summary of your reason for contact";
    questions.classList.add("error");
  } else {
    questions.classList.remove("error");
  }
}
