// Assignment Code
var generateBtn = document.querySelector("#generate");

//create an array for lowercase letters
var lower = [
  "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
];
//create an array for numbers
var numbers = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 0"];
//create an array for special characters
var special = ["!, @, #, $, %, ^, &, *, -, +, =, <, >, ?"];
//create an array for upper case letters
var caps = [
  "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
];
//create a final array with boolean selected arrays
var finalArray = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button this is okay
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //create initial prompt for passworld length
  let passLength = prompt(
    "How many characters would you like in your password? Click OK to confirm."
  );
  //create if statements to set paramaters for min/max length
  if (passLength < 8) {
    alert("Sorry, your password needs to be a minimum of 8 characters.");
    generatePassword();
  } else if (passLength > 128) {
    alert("Sorry, your password needs to be less than 128 characters.");
    generatePassword();
  } else {
    //create confirm window for special characters
    confirmSpecial = confirm(
      "Would you like to use special characters? Click OK for yes, Cancel for no."
    ); //create confirm window for uppercase letters
    confirmCaps = confirm(
      "Would you like to use upper case letters? Click OK for yes, Cancel for no."
    ); //create confirm window for lowecase letters
    confirmLower = confirm(
      "Would you like to use lower case letters? Click OK for yes, Cancel for no."
    ); //create confirm window for numbers
    confirmNumbers = confirm(
      "Would you like to use numbers? Click OK for yes, Cancel for no."
    );
  }
  //create else if for 4 false booleans
  if (!confirmSpecial && !confirmCaps && !confirmLower && !confirmNumbers) {
    finalArray = alert("You must choose at least one criteria!");
  }

  //else if for 4 true booleans
  else if (confirmSpecial && confirmCaps && confirmLower && confirmNumbers) {
    finalArray = special.concat(caps, lower, numbers);
  }
  //else if for the 3 true booleans
  else if (confirmSpecial && confirmCaps && confirmLower) {
    finalArray = special.concat(caps, lower);
  } else if (confirmSpecial && confirmCaps && confirmNumbers) {
    finalArray = special.concat(caps, numbers);
  } else if (confirmSpecial && confirmLower && confirmNumbers) {
    finalArray = special.concat(lower, numbers);
  } else if (confirmCaps && confirmLower && confirmNumbers) {
    finalArray = caps.concat(lower, numbers);
  }

  //else if for 2 true booleans
  else if (confirmSpecial && confirmCaps) {
    finalArray = special.concat(caps);
  } else if (confirmSpecial && confirmLower) {
    finalArray = special.concat(lower);
  } else if (confirmSpecial && confirmNumbers) {
    finalArray = special.concat(numbers);
  } else if (confirmLower && confirmNumbers) {
    finalArray = lower.concat(numbers);
  } else if (confirmLower && confirmCaps) {
    finalArray = lower.concat(caps);
  } else if (confirmNumbers && confirmCaps) {
    finalArray = numbers.concat(caps);
  }

  //else if for single true boolean
  else if (confirmSpecial) {
    finalArray = special;
  } else if (confirmCaps) {
    finalArray = caps;
  } else if (confirmLower) {
    finalArray = lower;
  } else if (confirmNumbers) {
    finalArray = numbers;
  }
  //return generated password
  return password;
}
