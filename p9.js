// use .sort to order string in an array asc

const arr = ['z', 'c', 'd', 'g'];
console.log(arr);

const sorted = arr.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt();
});
console.log("-----------");
console.log(sorted);