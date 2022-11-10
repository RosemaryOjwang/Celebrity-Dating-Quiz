//User interface logic

function hideResultsAndErrorMessage() {
  document.getElementById("Nazizi").setAttribute("class", "hidden");
  document.getElementById("Jalas").setAttribute("class", "hidden");
  document.getElementById("JuaCali").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
  document.getElementById("ageError").setAttribute("class", "hidden");
  document.getElementById("genderError").setAttribute("class","hidden");
}
function displayGenderValue() {
  const form =document.form;
  let genderFemale = document.getElementsByName("female");
  let genderMale = document.getElementsByName("male");
  for(i=0; i<gender.length; i++)  {
    let genderValue = gender[i].checked;
    console.log(genderValue);
  }
}

window.onload = function () {
const form = document.querySelector("form");
  form.onsubmit = function (event) {
    hideResultsAndErrorMessage();
    /*displayGenderValue();*/
    event.preventDefault();
    let ageInput = document.querySelector("input#age").value;
    const age = parseInt(ageInput);
    const gender = form.elements["gender"];
    console.log(gender.length);
    for(i=0; i<gender.length; i++)  {
      genderValue = gender[i].checked;
    }
    /*genderValue = gender.checked;*/
      /*let genderValue = document.querySelector("input#gender").value;
    console.log(gender);*/
    /*let gender = document.querySelector("input#gender");
    console.log(gender.length);
    let genderValue ="female";
    for (i=0; i < gender.length; i++)
    {
      genderValue = gender[i].checked;
      
    }
    console.log(genderValue);*/

    if (age >= 18 && genderValue === "female")  
    {
      document.getElementById("Nazizi").removeAttribute("class");
    } else if (age >= 18 && genderValue === "male") {
      document.getElementById("Jalas").removeAttribute("class");
      document.getElementById("JuaCali").removeAttribute("class");
    } else if(!age) {
      document.getElementById("ageError").removeAttribute("class");
    }else if (document.getElementById("gender").checked === false)  {
      document.getElementById("genderError").removeAttribute("class");
    } else  {
      document.getElementById("error").removeAttribute("class");
    }
  };
}
