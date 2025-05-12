let celsius = prompt("Enter temperature in Celsius:");
celsius = Number(celsius);
if (isNaN(celsius)) {
    console.log(" Invalid input. Please enter a number.");
} else {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}
