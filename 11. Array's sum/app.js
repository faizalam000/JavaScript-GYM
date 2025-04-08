//Write a function to find the sum of all elements in an array.
const input = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sum = 0;
((input) => {
  input.map((e) => {
    sum = sum + e;
  });
  console.log(sum);
})(input);
