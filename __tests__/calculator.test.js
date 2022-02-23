
const calculator = require('../calculator.js');

test('Testando a adição de dois números', () => {

    expect(calculator.sum(20, 20)).toBe(40);
    expect(calculator.sum(1450, 264)).toBe(1714);
    expect(calculator.sum(555, 444)).toBe(999);

});

test('Testando a subtração de dois números', () => {

    expect(calculator.subtract(20, 20)).toBe(0);
    expect(calculator.subtract(1450, 264)).toBe(1186);
    expect(calculator.subtract(4545, 22)).toBe(4523);

});

test('Testando a multiplicação de dois números', () => {

    expect(calculator.multiply(20, 20)).toBe(400);
    expect(calculator.multiply(1450, 264)).toBe(382800);
    expect(calculator.multiply(4545, 22)).toBe(99990);

});

test('Testando a divisão de dois números', () => {

    expect(calculator.division(20, 20)).toBe(1);
    expect(calculator.division(1450, 264)).toBe(5.492424242424242);
    expect(calculator.division(4545, 22)).toBe(206.5909090909091);

});

test('Testando o mod de dois números', () => {

    expect(calculator.mod(20, 20)).toBe(0);
    expect(calculator.mod(1450, 264)).toBe(130);
    expect(calculator.mod(4545, 22)).toBe(13);

});