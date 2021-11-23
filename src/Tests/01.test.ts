import {multy, summ, words} from "./01";

// Data
let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 21
    c = 3
})

test('sum should be correct', () => {
    // Function
    let result: number;
     result = summ(a, b);
    // Expect result
    expect(result).toBe(22)
    expect(b).toBe(21)
})

test('multi should be correct', () => {
    // Function
    const result = multy(b, c)
    // Expect result
    expect(result).toBe(63)
})

test('return word', () => {

    const result_1 = words('Hello word')
    const result_2 = words('Goood work')

    expect(result_1[0]).toBe('Hello')
    expect(result_1[1]).toBe('word')

    expect(result_2[0]).toBe('Goood')
    expect(result_2[1]).toBe('work')

})