//User interface logic
function hideResultsAndErrorMessage() {
  document.getElementById("Nazizi").setAttribute("class", "hidden");
  document.getElementById("Jalas").setAttribute("class", "hidden");
  document.getElementById("JuaCali").setAttribute("class", "hidden");
  document.getElementById("errorMessage").setAttribute("class", "hidden");
}

window.onload = function()  {
  document.querySelector("form").onsubmit = function(event) {
    hideResultsAndErrorMessage();
    event.preventDefault();
    const age = parseInt(document.querySelector("input#age").value);
    const gender = document.querySelector("input#gender").value;
    const skinColor = document.querySelector("input#skin-color").value;

    if (age >= 18 && gender === "female") {
      document.getElementById("Nazizi").removeAttribute("class");
    }
    else if (age >= 18 && gender === "male")  {
      document.getElementById("JuaCali").removeAttribute("class");
    }
  };

}