//Write a function to check if a number is prime.
const input = parseInt(prompt("enter a number"));
((input)=>{
    if (input == 0 || input == 1) {
        console.log("Not Prime Number");
      }else{
          let sum = 0;
      for (let i = 2; input > i; i++) {
        if (input % i == 0) {
          sum++;
        }
      }
      console.log(sum);
      if (sum > 0) {
        console.log("Not Prime Number");
      } else {
        console.log("Prime Number");
      }
      }
})(input);
