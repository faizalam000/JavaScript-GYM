//Write a function to remove duplicates from an array.
const array = [1, 2, 5, 4, 1, 5, 16, 5, 45, 86, 541, 2];
const array1 = ["a", "d", "a", "r", "d", "t", "y", "t"];
let sum;
for (const element of array) {
    sum=0;
  for (let i = 0; i < array.length; i++) {
    if(element==array[i]){
       sum++;
       if (sum==2) {
        array.splice(i,1);
       }
    }
  }
}
console.log(array);

