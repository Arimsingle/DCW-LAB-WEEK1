// merge two arrays into a new array

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];


// console.log(arr1,arr1);
// console.log("-------------------");
// console.log([...arr1, ...arr2]);
const ans = [...arr1, ...arr2];
console.log(ans);

// ans.map(data => {
//     console.log(data * 2);
// })