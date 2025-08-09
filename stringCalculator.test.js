const add = require("./stringCalculator");

describe('String Calculator', () => {
    test('empty string returns 0', () => {
        expect(add("")).toBe(0);
    });

    test('single number returns its value', () => {
        expect(add("1")).toBe(1);
    });

    test('two numbers returns sum', () => {
        expect(add("1,5")).toBe(6);
    });
})

