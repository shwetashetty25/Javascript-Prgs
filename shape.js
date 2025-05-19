class Shape {
  area() {
    return "Area method should be overridden by subclasses.";
  }
}class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}const circle = new Circle(5);
console.log("Area of Circle:", circle.area().toFixed(2));

const triangle = new Triangle(4, 6);
console.log("Area of Triangle:", triangle.area().toFixed(2));
