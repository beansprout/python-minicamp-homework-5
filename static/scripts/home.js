// document.getElementById('changeColor').addEventListener('click', function() {
//   console.log('you clicked me!');
// });

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
