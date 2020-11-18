import { calcAreaSquare, calcAreaTriangle, calcRads } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})
test('Degrees to Radians', () => {
    expect(calcRads(45)).toBe(Math.PI/4)
})