// use .reduce to find the minimum value in an array

const arr = [-1, -6, 10, 20, -3, 4];

const minimum = arr.reduce((prev, item) => {

    // if (prev < item) {
    //     return prev
    // } else {
    //     return item
    // }
    
    return prev+item;
});

console.log(minimum);


// const x = 1;
// const y = 2;

// x < y ? console.log("X") : console.log("Y");