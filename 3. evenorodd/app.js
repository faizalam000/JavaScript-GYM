let input = parseInt(prompt("enter a number"));

const evenOrOdd = (input) => {
  if (isNaN(input)) {
    alert("invalid input");
  }
  if (input % 2 == 0) {
    return `the ${input} is even number`;
  } else {
    return `the ${input} is odd number`;
  }
};
console.log(evenOrOdd(input));



//ternary operator expects expression not statement(return)
// const answer = (input) => {
//   (isNaN(input))
//     ? alert("invalid input")
//     : (input % 2 == 0)
//     ? console.log(`the ${input} is even number`)
//     : console.log(`the ${input} is odd number`);
// };
// answer(input);