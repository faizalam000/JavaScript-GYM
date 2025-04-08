//Write a function to generate the Fibonacci sequence up to n terms.
const input = parseInt(prompt("enter nth term for fibo"));
((input) => {
  let sum = [0, 1];
  for (let i = 2; input >= i; i++) {
    sum[i] = sum[i - 1] + sum[i - 2];
  }
  sum.forEach((element) => {
    console.log(element);
  });
})(input);