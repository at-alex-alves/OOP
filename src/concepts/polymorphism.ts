class Square {
    public base: number;
    public height: number;

    /**
     * Creates a new instance of the Square class.
     * @param {number} base - The base of the triangle.
     * @param {number} height - The height of the triangle.
     */
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    /**
     * Calculates the area of the square.
     */
    public calculateArea() {
        console.log(`The square area is: ${(this.height * this.base) / 2}`);
    }
}

class Rectangle {
    public length: number;
    public width: number;

    /**
     * Creates a new instance of the Rectangle class.
     * @param {number} length - The length of the rectangle.
     * @param {number} width - The width of the rectangle.
     */
    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    /**
     * Calculates the area of the rectangle.
     */
    public calculateArea() {
        console.log(`The rectangle area is: ${this.length * this.width}`);
    }
}

/**
 * Creates a Square and Rectangle objects, and calculates the area for both.
 */
export function test() {
    console.log('\n\nPolymorphism:\n');

    var square = new Square(25, 10);
    var rectangle = new Rectangle(25, 10);
    
    square.calculateArea();
    rectangle.calculateArea();
}