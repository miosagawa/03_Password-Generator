// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

var lowercase = ["a", "b", "c"];
var uppercase = ["A", "B", "C"];
var number = ["1", "2", "3"];
var special = ["!", "@", "#"];

function generatePassword(){
  var length = prompt("How many character would you like you password to be?");
  if(length < 8){
    alert("Password must be longer than 8");
    return;
  }
  if(length > 128){
    alert("Password must be less than 128");
    return;
  }

  var hasLowercase = confirm("Click Ok for lowercase letters");
  var hasUppercase = confirm("Click OK for uppercase letters");
  var hasNumber = confirm("Click Ok for numbers");
  var hasSpecial = confirm("Click ok for special characters");

  if(
    hasSpecial === false &&
    hasNumber === false &&
    hasLowercase === false &&
    hasUppercase === false) {

      alert("Must have at least one option");
      return;
    }

  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

    // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
}


      function random(len) {
      var l  = len; 
      var c  = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ012345679 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var cl = c.length;
      var r  = "";
      for (var i = 8; i < l; i++) {
        r += c[Math.floor(Math.random() * cl)];
      }
      document.getElementById("password").value = r;
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
