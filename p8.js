// use .sort to order number in an array asc

const arr = [1, 2, 3, 4, 6, 5]


const sorted = arr.sort((data, item) => {
    return data-item;
});

console.log(sorted);