//Write a function to check if a string is a palindrome.
const input = prompt("enter a string");
//By using IIFE (Immediately Invoked Function Expression), spred, reverse, join.
// (() => {
//   const rev = [...input].reverse().join("");
//   console.log(rev);
// if (rev === input) {
//   console.log("Palindrome string");
// } else {
//   console.log("Not a Palindrome string");
// }
// })(input);
//By using split in the place of spread
(() => {
  const rev = input.split("").reverse().join("");
  if (rev === input) {
    console.log("Palindrome string");
  } else {
    console.log("Not a Palindrome string");
  }
})(input);
