let marks = prompt("Enter your marks (0 - 100):");
marks = Number(marks); 

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else if (marks >= 0) {
    console.log("Grade: F (Fail)");
} else {
    console.log("Invalid input. Please enter marks between 0 and 100.");
}
