//Day-4 Java
//create a functon in which there are two input hours and minute..you have to convert them into seconds
function convertToSeconds(hours, minutes) {
    const hourInSeconds = hours * 3600;
    const minuteInSeconds = minutes * 60;
    const totalSeconds = hourInSeconds + minuteInSeconds;
    return totalSeconds;
}
    const result = convertToSeconds(2, 30);  
console.log("Total seconds:", result);


function Person(name, age, loc) {
    this.name = name;
    this.age = age;
    this.location = loc;
    this.displayInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Location: ${this.location}`);
    };
}
const p1 = new Person("shwe", 19, "mum");
p1.gender = "female";
p1.displayInfo();
console.log("Gender:", p1.gender);


//create the function in the object and prototype(OBJECT CONSTRUCTOR)
function Person({ name, age, loc, hobby }) {
    this.name = name;
    this.age = age;
    this.loc = loc;
    this.hobby = hobby;
}
Person.prototype.bestie = "AI Friend";
const p1 = new Person({ name: "Shwee", age: 19, loc: "Navi Mumbai", hobby: "Painting" });
console.log(p1);
console.log(p1.bestie);