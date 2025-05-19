//CLASs
//CONCEPT OF OOPS DAY4
class person{
    constructor(name,age,loc){
        this.name = name;
    this.age = age;
    this.loc = loc;
    }
    Pname() {
        console.log(this.name + " "+ this.age);
        return this.age;
    }
}
const p1 = new person("Shwee",19,"INDIA");
//make a automative product  with its 4 varient which will have its own features and functionalities including the features of the main product(class)
class Car {
    constructor(company, color, features) {
    this.company = company;
    this.color = color;
    this.features = features;
    }

    displayInfo() {
    console.log(`Car Company: ${this.company}`);
    console.log(`Color: ${this.color}`);e
    console.log(`Features:`);
    this.features.forEach((feature, index) => {
    console.log(`${feature}`);
    });
    }
}
const myCar = new Car(
    "Toyota","Red",["Automatic Transmission", "Sunroof", "Rear Camera", "Bluetooth Connectivity"]);
myCar.displayInfo();



class Car {
    start() {
    console.log("Car is starting...");
    }}
class ElectricCar extends Car {
    charge() {
    console.log("Electric car is charging...");
    }
}
const tesla = new ElectricCar();
tesla.start();   
tesla.charge(); 



//Hierarchical inheritance code
class Car {
    start() {
    console.log("Car is starting...");
    }
}
    class ElectricCar extends Car {
    charge() {
    console.log("Charging electric car...");
    }
}
const tesla = new ElectricCar();
tesla.start(); 
tesla.charge();

class Car {
    start() {
    console.log("Car is starting...");
    }}


class ElectricCar extends Car {
    constructor(brand, batteryLevel) {
    super(); 
    this.brand = brand;
    this.batteryLevel = batteryLevel;
    this.showStatus = function () {
        console.log(`${this.brand} battery at ${this.batteryLevel}%`);
    };}
charge() {
    console.log("Charging electric car...");
    }}
    const tesla1 = new ElectricCar("Tesla", 85);
tesla.start();         
tesla.charge();        
tesla.showStatus();

//Multiple Inheritance
class Car {
    constructor(brand) {
    this.carname = brand;
    }
    present() {
    return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
    console.log("this from chld Class")
    super(brand);

    this.model = mod;
    }
    show() {
    return this.present() + ', it is a' + this.model;
    }
}
let myCar = new Model("Ford","Mustang");
console.log(myCar.show())


//
function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_access = function () {
        return `First name is: ${firstname}, Last name is: ${lastname}`;
    };

    this.getDetails_access = function () {
        return `First name is: ${firstname}, Last name is: ${lastname}`;
    };
}
let person1 = new person("Shweta", "Shetty");
console.log(person1.firstname);
console.log(person1.getDetails_access); 
console.log(person1.getDetails_access()); 


//write a javascript program to create a class called rectangle with properties for width and height. Include two methods to calculate rectangle area and perimeter

