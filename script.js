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
      
    //var testing  
    //console.log(passLength);
    //console.log(lower);
    //console.log(upper);
    //console.log(nums);
    //console.log(special);

    // function to generate the password //
    function generatePassword() {  
      var lowerChar = "abcdefghijklmnopqrstuvwxyz";
      var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numsChar = "0123456789";
      var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
      var characters = "";
      var password = "";

      if (lower && upper && nums && special){
      characters += lowerChar + upperChar + numsChar + specialChar;
      }
      if (upper && nums && special){
      characters += upperChar + numsChar + specialChar;
      }
      else if (lower && upper && nums){
      characters += lowerChar + upperChar + numsChar;
      }
      else if (upper && nums){
      characters += upperChar + numsChar;
      }
      else if (lower && nums && special){
      characters += lowerChar + numsChar + specialChar;
      }
      else if (nums && special){
      characters += numsChar + specialChar;
      }
      else if (lower && upper && special){
      characters += lowerChar + upperChar + specialChar;
      }
      else if (upper && special){
      characters += upperChar + specialChar;
      }
      else if (lower && upper){
        characters += lowerChar + upperChar;
      }
      else if (lower && nums){
      characters += lowerChar + numsChar;
      }
      else if (lower && special){
      characters += lowerChar + specialChar;
      }
      else if (upper){
      characters += upperChar;
      }
      else if(nums){
      characters += numsChar;
      }
      else if (special){
      characters += specialChar;  
      }
      else 
      {characters += lowerChar;
      }

      for(var i = 0; i < passLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));

    }
      return password;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);