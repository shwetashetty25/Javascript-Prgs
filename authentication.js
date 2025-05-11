const validUsername = "shweta";
const validPassword = "2501";
let enteredUsername = prompt("Enter your username:");
let enteredPassword = prompt("Enter your password:");
if (enteredUsername === validUsername && enteredPassword === validPassword) {
    console.log("Authentication successful. Welcome, " + enteredUsername + "!");
} else if (enteredUsername !== validUsername && enteredPassword === validPassword) {
    console.log(" Username is incorrect.");
} else if (enteredUsername === validUsername && enteredPassword !== validPassword) {
    console.log(" Password is incorrect.");
} else {
    console.log(" Authentication failed. Invalid username and password.");
}
