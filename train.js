var x = 10;
let y = 20;
const z = 30;
console.log(`1.${x}`);
const test = () => {
    x = 11;
    console.log(`2.${x}`);
}
test();
console.log(`3.${x}`);

//////////////////////////////////////////


console.log(`1.${y}`);
const test1 = () => {
    y = 21;
    console.log(`2.${y}`);
}
test1();
console.log(`3.${y}`);