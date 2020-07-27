// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  

    //collect length of password parameter through prompt as a number type//
    var passLength = parseInt(prompt("Enter the number of characters between 8 and 128 for your password."));
    
    //validate passLength is within parameter requirements //
    while (passLength < 8 || passLength > 128) {
      var passLength = parseInt(prompt("Invalid number of characters entered. Enter the number of characters between 8 and 128 for your pssword."));
    }
      //collect character type with confirm//
    var lower = confirm("Do you want to include lower case letters?");
    var upper = confirm("Do you want to include upper case letters?");
    var nums = confirm("Do you want to include numbers?");
    var special = confirm("Do you want to include special characters?");
    
    //validate at least one true type exists//
    while (! (lower || upper || nums || special))
       {
        alert("Please enter at least one type of character.");
        var lower = confirm("Do you want to include lower case letters?");
        var upper = confirm("Do you want to include upper case letters?");
        var nums = confirm("Do you want to include numbers?");
        var special = confirm("Do you want to include special characters?");
       }   
      
    //varf testing  
    //console.log(lower,upper,nums,special);

    // function to generate the password //
    function generatePassword() {    
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
