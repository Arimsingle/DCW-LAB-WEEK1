// use .findIndex to check wheter the array contains even number

const arr = [1, 3, 5, 7, 8, 9, 21];


const foundIndex = arr.findIndex((item) => {
    return item % 2 === 0;
 });

 console.log(`Index: ${foundIndex} => value: ${arr[foundIndex]}`);
 