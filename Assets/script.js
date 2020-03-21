

var passwordObj = {
  passLength: 0,
  includeSymbols: false,
  includeNumbers: false,
  includeLowerCase: false,
  includeUpperCase: false,

};



function setCriteria() {

  this.passLength = prompt("Enter password length");
  this.includeSymbols = confirm("Do you want to include symbols?");
  this.includeNumbers = confirm("Do you want to include numbers?");
  this.includeLowerCase = confirm("Do you want to include lowercase letters?");
  this.includeUpperCase = confir

  


}



// 0-9 == numbers, 9-35 == lowercase letters, 36-61 == uppercase, 62 -92 ==symbols
var availChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword(){


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
