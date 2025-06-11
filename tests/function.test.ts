import { calculatePasswordStrength } from "../src/function";

describe('Password strength tests',() => {
    test("Very Weak when password is empty", () => {
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    })

    test("Very Weak when password is strength <= 2", () => {
        expect(calculatePasswordStrength('1')).toBe('Very Weak');
        expect(calculatePasswordStrength('a')).toBe('Very Weak');
        expect(calculatePasswordStrength('A')).toBe('Very Weak');
        expect(calculatePasswordStrength('#')).toBe('Very Weak');
        expect(calculatePasswordStrength('123456789')).toBe('Very Weak');
        expect(calculatePasswordStrength('password')).toBe('Very Weak');
        expect(calculatePasswordStrength('PASSWORD')).toBe('Very Weak');
        expect(calculatePasswordStrength('!@#$%^&*')).toBe('Very Weak');
        expect(calculatePasswordStrength('1a')).toBe('Very Weak');
        expect(calculatePasswordStrength('A#')).toBe('Very Weak');
    })

    test("Weak when password is strength = 3", () => {
        expect(calculatePasswordStrength('123456789012')).toBe('Weak');
        expect(calculatePasswordStrength('_password')).toBe('Weak');
        expect(calculatePasswordStrength('_PASSWORD')).toBe('Weak');
        expect(calculatePasswordStrength('!@#$%^&*!@#$')).toBe('Weak');
        expect(calculatePasswordStrength('1aB')).toBe('Weak');
        expect(calculatePasswordStrength('2#d')).toBe('Weak');
    })

    test("Moderate when password is strength = 4", () => {
        expect(calculatePasswordStrength('this_is_password')).toBe('Moderate');
        expect(calculatePasswordStrength('Password!')).toBe('Moderate');
        expect(calculatePasswordStrength('Pa33word')).toBe('Moderate');
        expect(calculatePasswordStrength('1aB#')).toBe('Moderate');
    })

    test("Strong when password is strength = 5", () => {
        expect(calculatePasswordStrength('Th1s_1s_password')).toBe('Strong');
        expect(calculatePasswordStrength('This_is_password')).toBe('Strong');
        expect(calculatePasswordStrength('_Pa33word')).toBe('Strong');
    })
})