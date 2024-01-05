
const Triangle = require('../shape.js')

describe('Triangle' () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const triangle = new Triangle ('red', 'EBP', 'white');
        expect(triangle.render());
    });
});

const Circle = require('../lib/shape.js')

describe('Circle' () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const circle = new Circle ('white', 'EBP', 'red');
        expect(triangle.render());
    });
});

const Square = require('../lib/shape.js')

describe('Square' () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const square = new Square ('black', 'EBP', 'white');
        expect(triangle.render());
    });
});