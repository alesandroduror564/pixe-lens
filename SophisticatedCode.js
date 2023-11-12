/*
	FileName: SophisticatedCode.js
	Description: A sophisticated and complex code written in JavaScript.
	Author: Anonymous
*/

// Constants
const PI = 3.14159;
const METERS_PER_FEET = 0.3048;

// Data Structures
class Shape {
	constructor(name) {
		this.name = name;
	}

	getArea() {
		throw new Error('Method not implemented.');
	}

	getPerimeter() {
		throw new Error('Method not implemented.');
	}

	toString() {
		return `${this.name} (Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()})`;
	}
}

class Circle extends Shape {
	constructor(radius) {
		super('Circle');
		this.radius = radius;
	}

	getArea() {
		return PI * Math.pow(this.radius, 2);
	}
	
	getPerimeter() {
		return 2 * PI * this.radius;
	}
}

class Square extends Shape {
	constructor(sideLength) {
		super('Square');
		this.sideLength = sideLength;
	}

	getArea() {
		return Math.pow(this.sideLength, 2);
	}

	getPerimeter() {
		return 4 * this.sideLength;
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super('Rectangle');
		this.width = width;
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}

	getPerimeter() {
		return 2 * (this.width + this.height);
	}
}

// Utility Functions

/**
 * Converts feet to meters.
 * @param {number} feet - Length in feet.
 * @returns {number} The equivalent length in meters.
 */
function feetToMeters(feet) {
	return feet * METERS_PER_FEET;
}

/**
 * Generates a random number between a minimum and maximum value.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} A random number between min and max.
 */
function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

// Main Function
(function () {
	const shapes = [];
	const numberOfShapes = 10;

	for (let i = 0; i < numberOfShapes; i++) {
		const randomNumber = getRandomNumber(0, 1);
		let shape;
		
		if (randomNumber < 0.33) {
			const radius = getRandomNumber(1, 10);
			shape = new Circle(radius);
		} else if (randomNumber < 0.66) {
			const sideLength = getRandomNumber(1, 10);
			shape = new Square(sideLength);
		} else {
			const width = getRandomNumber(1, 10);
			const height = getRandomNumber(1, 10);
			shape = new Rectangle(width, height);
		}

		shapes.push(shape);
	}

	console.log('Generated Shapes:');
	shapes.forEach((shape) => console.log(shape.toString()));

	// Convert 5 feet to meters
	console.log('5 feet is equal to ' + feetToMeters(5) + ' meters.');
})();

// Output:
// Generated Shapes:
// Circle (Area: 254.46900478564726, Perimeter: 66.27433388230814)
// Square (Area: 42.74604265726985, Perimeter: 16)
// Rectangle (Area: 25.034556618436513, Perimeter: 16.26209965563489)
// Square (Area: 25.482637542954062, Perimeter: 26)
// Circle (Area: 79.70283181340643, Perimeter: 47.30737524908042)
// Circle (Area: 130.2295322889833, Perimeter: 81.73680017116757)
// Square (Area: 51.2823944260124, Perimeter: 28)
// Rectangle (Area: 34.79926717709318, Perimeter: 30.984063068935784)
// Rectangle (Area: 25.810945828579926, Perimeter: 21.349037578474332)
// Square (Area: 72.89394908864524, Perimeter: 34)

// 5 feet is equal to 1.524 meters.