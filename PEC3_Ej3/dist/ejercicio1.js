"use strict";
function printArray(array) {
    //code to print the array on console
    console.log(array);
}
let array = [2, 3, 4];
console.log(array[0]);
array.splice(0, 1);
printArray(array);
array.push(5);
printArray(array);
console.log(array[2]);
array.splice(2, 1);
printArray(array);
array.push(1);
printArray(array);
array.unshift(8);
printArray(array);
let everyisgreater = (numbers) => {
    return numbers.every((num) => num > 3);
};
console.log(everyisgreater);
let everyisless = (numbers) => {
    return numbers.every((num) => num < 10);
};
console.log(everyisless);
console.log(array.sort(function (a, b) {
    return a - b;
}));
console.log(array.sort(function (a, b) {
    return b - a;
}));
