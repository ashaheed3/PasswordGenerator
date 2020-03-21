
// Password object 
var passwordObj = {
  passLength: 0,
  includeSymbols: false,
  includeNumbers: false,
  includeLowerCase: false,
  includeUpperCase: false,
 
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

function generatePassword(){

  var generatedPass = "";
  var currChar = "";
  // 1-10 == numbers, 11-36 == lowercase letters, 37-62 == uppercase, 63 -93 ==symbols
  var availChar = " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
  var currIndex = 0;


  while (passwordObj.passLength != generatedPass.length){
    
    currIndex = Math.floor((Math.random() * 94) + 1);
    currChar = availChar[currIndex];

//     if( !passwordObj.includeSymbols && currIndex >= 63 && currIndex <= 93 ){
//       continue;
//     }

//     if( !passwordObj.includeNumbers && currIndex >= 1 && currIndex <= 10 ){
//       continue;
//     }

//     if( !passwordObj.includeLowerCase && currIndex >= 11 && currIndex <= 36 ){
//       continue;
//     }

    
//     if( !passwordObj.includeUpperCase && currIndex >= 37 && currIndex <= 62 ){
//       continue;
//     }

    generatedPass += currChar;
      

  }
  return generatedPass;


}



// 9



generateBtn.addEventListener("click", writePassword);


passwordObj.setCriteria();