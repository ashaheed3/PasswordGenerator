

var passwordObj = {
  passLength: 0,
  includeSymbols: false,
  includeNumbers: false,
  includeLowerCase: false,
  includeUpperCase: false,
 
  // 0-9 == numbers, 9-35 == lowercase letters, 36-61 == uppercase, 62 -92 ==symbols
  availChar: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
 
  //Prompt user for criteria
  setCriteria: function() {

    while( !((this.passLength >= 8) && (this.passLength <= 128))){
      this.passLength = parseInt(prompt("Please enter desired password length\nPassword must be a number between 8 and 128"));
    }

    this.includeSymbols = confirm("Do you want to include symbols?");
    this.includeNumbers = confirm("Do you want to include numbers?");
    this.includeLowerCase = confirm("Do you want to include lowercase letters?");
    this.includeUpperCase = confirm("Do you want to include upper case letters?");

    while(!(this.includeSymbols||this.includeNumbers||this.includeLowerCase||this.includeUpperCase)){
      alert("At least one character type must be selected");
      this.includeSymbols = confirm("Do you want to include symbols?");
      this.includeNumbers = confirm("Do you want to include numbers?");
      this.includeLowerCase = confirm("Do you want to include lowercase letters?");
      this.includeUpperCase = confirm("Do you want to include upper case letters?");
    }
  }

};








 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword(){


// }



// Add event listener to generate button8
// generateBtn.addEventListener("click", writePassword);


passwordObj.setCriteria();