
const Triangle = require('../shape.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('blue','EPB','purple');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="purple">EPB</text>
        </svg>
        `
        );
    });
});

const Circle = require('../shape.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const circle = new Circle('white','EPB','orange');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="white" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="orange">EPB</text>
        </svg>
        `
        );
    });
});
const Square = require('../shape.js');

describe('Square', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const square = new Square('black','EPB','red');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="black"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="red">EPB</text>
        </svg>
        `
        );
    });
});