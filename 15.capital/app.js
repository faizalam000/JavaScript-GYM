//Write a function to capitalize the first letter of each word in a sentence.
let input = prompt("enter your sentence");
let arr = [];
(() => {
  arr = input
    .split("")
    .map((element, index, array) => {
      if (element === " ") {
        array[index + 1] = array[index + 1].toUpperCase();
      } else if (index == 0) {
        element = element.toUpperCase();
      }
      return element;
    })
    .join("");
  console.log(arr);
})();
