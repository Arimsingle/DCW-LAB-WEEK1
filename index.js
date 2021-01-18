const add = (x) => {
    return (y) => x+y;
}
let z = add(2);
console.log(z(2));