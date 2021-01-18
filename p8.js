// use .sort to order number in an array asc

const arr = [1, 2, 3, 4, 6, 5]


const sorted = arr.sort((a, b) => {
    return a - b;
});

console.log(sorted);