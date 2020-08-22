// Assignment Code
var generateBtn = document.querySelector("#generate");


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
