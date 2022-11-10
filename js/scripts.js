//User interface logic

//Function to hide messages
function hideResultsAndErrorMessage() {
  document.getElementById("Nazizi").setAttribute("class", "hidden");
  document.getElementById("Jalas").setAttribute("class", "hidden");
  document.getElementById("JuaCali").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
  document.getElementById("ageError").setAttribute("class", "hidden");
  document.getElementById("genderError").setAttribute("class", "hidden");
}
//function to retrieve and return checked gender value
function getGenderValue() {
  let gender = document.getElementsByName("gender");
  let genderValue = " ";
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value;
    }
  }
  return genderValue;
}

window.onload = function () {
  //get the form element
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    hideResultsAndErrorMessage();
    let genderValue = getGenderValue();
    event.preventDefault();
    const age = parseInt(document.querySelector("input#age").value);

     //To suggest compatibility with Nazizi, Jalas and JuaCali for any person aged over 30 years
    if (age > 30) {
      document.getElementById("Nazizi").removeAttribute("Class");
      document.getElementById("Jalas").removeAttribute("class");
      document.getElementById("JuaCali").removeAttribute("class");

      //To suggest compatibility with Jalas and JuaCali for males aged 18 and over
    } else if (age >= 18 && genderValue === "male") {
      document.getElementById("Jalas").removeAttribute("class");
      document.getElementById("JuaCali").removeAttribute("class");

      //To suggest compatibility with Nazizi and Jalas for females aged 18 and over
    } else if (age >= 18 && genderValue === "female") {
      document.getElementById("Nazizi").removeAttribute("class");
      document.getElementById("Jalas").removeAttribute("class");

      //To display error if age is less than 18
    } else if (age < 18) {
      document.getElementById("error").removeAttribute("class");
    }
    //To display ageError if age is not entered
    else if (!age) {
      document.getElementById("ageError").removeAttribute("class");

      //To display genderError if gender is not selected
    } else if (document.getElementById("gender").checked === false) {
      document.getElementById("genderError").removeAttribute("class");
    }
  };
}
