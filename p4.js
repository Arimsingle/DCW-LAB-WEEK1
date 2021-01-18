// use .map to create new number array
const strArr = ['1', '2', '3', '4', '5', '6', '7'];


const numArr = strArr.map((number) => {
    return parseInt(number);
});

console.log(strArr);
console.log("-------------");
console.log(numArr);