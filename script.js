function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null;
}

let input = prompt("Enter a string:");
let result = firstNonRepeatedChar(input);

if (result) {
  alert("The first non-repeated character is: " + result);
} else {
  alert("There are no non-repeated characters in the string.");
}
