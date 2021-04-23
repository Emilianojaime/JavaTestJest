import * as functions from './functions';

describe ('Simple Functions Test:', () => {

// Text Function 100%
test('Returns the same text that is send to it', () => {
  expect(functions.texto('Hello')).toBe('Hello');
});

// Suma Function 100%
test('Returns the sum of the 2 numbers sent as arguments', () => {
  expect(functions.suma(5,3)).toBe(8);
})

// Resta Function 100%
test('Returns the subtraction of the first number minus the second', () => {
  expect(functions.resta(10,5)).toBe(5);
})

// Multiplicacion Function 100%
test('Returns the product of the two arguments sent', () => {
  expect(functions.multiplicacion(3,5)).toBe(15);
})
});

// Division Function 100%
describe ('Division tests:', () => {

test('Returns the division between the first argument and the second argument, it cannot be divided by 0.', () => {
  expect(functions.division(10,2)).toBe(5);
} )

test('Returns message  when divided by 0', () => {
  expect(functions.division(4,0)).toBe('No se puede dividir por 0');
})
});

// TablaMultiplicar Function 100%
describe ('Tabla Multiplicar Test:', () => {

  test('Take the first argument and create an array starting from 0 by adding that same number over itself as many times as the second argument indicates.', () => {
    expect(functions.tablaMultiplicar(3,5)).toEqual([0, 3, 6, 9, 12, 15])
  })

  test('Uses 10 as default for the second argument when the second argument is undefined', () => {
    expect(functions.tablaMultiplicar(1,undefined)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
});


// Potencia Function 100%
describe('Testing use of built-in functions (Math.Pow)', () => {

test('Returns the result of the first argument raised to the second argument (base / exponent)', () => {
  expect(functions.potencia(2,3)).toEqual(8);
})
});

// Anidada Function 100%
describe('Testing nested declared functions', () => {

  test('Returns the sum of the squares of its arguments', () => {
    expect(functions.anidada(5,1)).toBe(26);
  })
})

// CerozIzq Fuction 100%
describe('Testing add ceros to number', () => {

  test('Returns the first argument and places a number of leading zeros according to the 2nd argument', () => {
    expect(functions.cerosIzq(2,2)).toBe('02');
  })
})