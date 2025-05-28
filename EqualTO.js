function areStringsEqual(str1, str2) {
    return str1 === str2;
}

let firstString = prompt("Enter the first string:");
let secondString = prompt("Enter the second string:");

let result = areStringsEqual(firstString, secondString);

console.log("Are the strings equal? " + result);