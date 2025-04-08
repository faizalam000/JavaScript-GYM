//Write a function to find the factorial of a number.
const input = parseInt(prompt("enter a number"));
function factorial(input) {
  let sum = 1;
for (let i = input; i > 0; i--) {
  sum = sum * i;
}
console.log(sum);
}
// ((input)=>{
//   let val = input;
//   let sum=1;
// for(;;){
//   if (val==0) {
//     break;
//   }
//   sum=sum*val;
//   val--;
// }
// console.log(sum);

// })(input);