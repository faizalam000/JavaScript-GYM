//Write a function to count the number of vowels in a string.
const input = prompt("enter a string");
((input) => {
  let sum = 0;
  let vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  [...input].map((e) => {
    if (vowel.includes(e)) {
      sum++;
    }
  });
  console.log(sum);
})(input);
