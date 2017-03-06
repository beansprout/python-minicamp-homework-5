

function validateForm() {
    var name = document.getElementById('nameInput').value;
    var species = document.getElementById('speciesInput').value;
    var age = document.getElementById('ageInput').value;

    // disallow blank
    if (!name.length || !species.length || !age.length) {
        alert('fields cannot be blank');
        }
    //check that age is a number
    if (isNaN(age)) {
      alert('Age input invalid');
    }
    return false;
}

function changetext() {
  document.getElementById("new-pet-form").style.color = "4d4dff";
}

function invisible() {
    document.getElementById("body").style.display = "none";
}
