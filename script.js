// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var passLength = prompt(
    "How many characters would you like in your password? Click OK to confirm."
  );
  //create confirm window for special characters
  var specialChars = confirm(
    "Would you like to use special characters? Click OK to confirm."
  );
  //create confirm window for uppercase letters
  var capLetters = confirm(
    "Would you like to use upper case letters? Click OK to confirm."
  );
  //create confirm window for lowecase letters
  var lowLetters = confirm(
    "Would you like to use lower case letters? Click OK to confirm."
  );
  //create confirm window for numbers
  var numbers = confirm("Would you like to use numbers? Click OK to confirm.");

  //create an array for lowercase letters
  lower = [
    "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
  ];
  //create an array for numbers
  numbers = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 0"];
  //create an array for special characters
  special = ["!, @, #, $, %, ^, &, *, -, +, =, <, >, ?"];
  //create an array for upper case letters
  caps = [
    "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
  ];

  //return generated password
  return password;
}
