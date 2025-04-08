let input = prompt("enter a string");

//split : convert string to array
//reverse : reverse the array
//join : convert array to string
console.log(input.split("").reverse().join(''));

// spread operator : convert string to array
// reverse : reverse the array
// spread operator : convert array to string
console.log(...[...input].reverse());

// for (const element of input) {
//     console.log(element);
// }