const calc = require('../src/calc')

test('Проверяем функцию сложения', () => {
    const actualValue = calc.sum(2, 1);
    const expectedValue = 3
    expect(actualValue).toBe(expectedValue)
})

test('Проверяем функцию сложения. Отрицательные числа', () => {
    expect(calc.sum(-5, -1)).toBe(-6)
})

test('Проверяем функцию умножения', () => {
    expect(calc.multiply(5, 2)).toBe(10)
})

test('Проверяем функцию умножения. Ортрицательный множитель', () => {
    expect(calc.multiply(5, -2)).toBe(-10)
})

test('Проверяем функцию умножения. Умножаем на 0', () => {
    expect(calc.multiply(5, 0)).toBe(0)
})

test('Проверяем функцию вычитания', () => {
    expect(calc.sub(10, 2)).toBe(8)
})

test('Проверяем функцию вычитания. Отрицательный результат', () => {
    expect(calc.sub(10, 20)).toBe(-10)
})

test('Проверяем функцию деления', () => {
    expect(calc.div(100, 2)).toBe(50)
})

test('Проверяем функцию процента. 5% от 100', () => {
    expect(calc.percent(100, 5)).toBe(5)
})

test('Проверяем функцию процента. 4% от 200', () => {
    expect(calc.percent(200, 4)).toBe(8)
})