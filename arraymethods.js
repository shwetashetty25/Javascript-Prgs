arr.filter((x,y,z) => {
    if(x%2 ==0){
        console.log(x)
    }
})

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((value, index, array) => {
    console.log("Value:", value, "| Index:", index, "| Array:", array);
});

arr = [1,3,4,5,6,7];
console.log(arr.length)
console.log(arr.push(6))
console.log(arr.pop())
console.log(arr.shift())
console.log(arr.unshift(3))
console.log(arr.slice(0,5))
console.log(arr.splice(0,5))
console.log(arr.flat())

let arr11 = [1, 2, 3, 4, 5, 6, 7];
let checkEven = (value, index, array) => {
    return value % 2 === 0;
};
let evenNums = arr.filter(checkEven);

console.log("Even numbers:", evenNums);

//create a func to concatenate two integer arrays
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = concatenateArrays(array1, array2);
console.log(combinedArray);

//using for loop:
let arr3 = [1, 2];
let arr4 = [3, 4];
let combined = [];
for (let val of arr3) {
    combined.push(val);
}for (let val of arr4) {
    combined.push(val);
}console.log(combined); 

arr3 = [1, 2];
arr4 = [3, 4];
for (i of arr4)
    { 
        arr3.push(i)}
        console.log(arr3)

//create a function that takes two numbers num1 and num2, and an array arr and returns an array containing all the numbers in arr greater than that num1 and less than num2
function filterInRange(arr, num1, num2) {
    return arr.filter(n => n > num1 && n < num2);
}
let numbers = [1, 5, 10, 15, 20, 25];
let result = filterInRange(numbers, 10, 25);
console.log(result);

function filterInRange(arr, num1, num2) {
    return arr.filter(n => n>num1 && n< num2 );
}


