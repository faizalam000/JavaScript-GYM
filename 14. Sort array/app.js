//Write a function to sort an array of numbers in ascending order.
const arr = [4, 5, 845, 2, 45, 9, 5, 1, 85, 12];
let swap;

arr.forEach((e, idx, array) => {
  if (array[idx] > array[idx + 1]) {
    swap = array[idx];
    array[idx] = array[idx + 1];
    array[idx + 1] = swap;
  
    for (let i = idx ; i >= 0; i--) {
      if (array[i] < array[i - 1]) {
        swap = array[i];
        array[i] = array[i - 1];
        array[i - 1] = swap; 
      }
    }
    
  }
});
console.log(arr);
