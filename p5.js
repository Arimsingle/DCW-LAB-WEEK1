// use .filter to create a new array that does not contain null value

const arr = [1, 3, 4, 5, null, 2, null, -4, null];
// const number = [1, 2, 3, 4, 5, 6, 7];

// filter วนลูปกรองค่าที่ผิดเงื่อนไขออกจากอาเรย์
const filtered = arr.filter((item) => {
    return item === null;
});

console.log(filtered);