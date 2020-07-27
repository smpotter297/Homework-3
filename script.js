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
      
    //var input testing  
    //console.log(passLength);
    //console.log(lower);
    //console.log(upper);
    //console.log(nums);
    //console.log(special);

    // function to generate the password //
    function generatePassword() {  
     //variables for random password generation code//
      var lowerChar = "abcdefghijklmnopqrstuvwxyz";
      var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numsChar = "0123456789";
      var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
      var characters = "";
      var password = "";
     
      //Logic statements to create chracters vr based on user assigned parameters. Simplified version//
     
        if (lower === true){
          characters += lowerChar
        }
        if (upper === true){
          characters += upperChar
        }
        if (nums === true){
          characters += numsChar
        }
        if (special === true){
          characters += specialChar
        } 
      //for loop to create random password based on assigned parameters.//
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