import { jest } from '@jest/globals'
import numberMucker, { genNumber, multipleTwoNumbers } from './numberMucker3'
describe('numberMucker', () => {
  it('should generate a random number', () => {
    // In case you are curios, testing is one reason why we might use callbacks,
    // instead of just calling Math.random() directly.
    let i = 1
    const genNumberSpy = jest.fn(() => {
      return i++
    })
    const numberModifierSpy = jest.fn((num1, num2) => {
      return num1 + num2
    })
    expect(numberMucker(genNumberSpy, numberModifierSpy)).toEqual(3)
    expect(genNumberSpy).toHaveBeenCalledTimes(2)
    expect(numberModifierSpy).toHaveBeenCalledTimes(1)
  })
  it('should always generate numbers between 0, and 100', () => {
    // Check 100 times, since we can't check what the actual random number is,
    // we can only check a bunch of times and see if it's always between 0 and 100
    for (let i = 0; i < 100; i++) {
      const number = genNumber()
      expect(number).toBeLessThanOrEqual(10)
      expect(number).toBeGreaterThanOrEqual(0)
    }
  })
  it('should multiplyTwoNumbers', () => {
    expect(multipleTwoNumbers(2, 3)).toEqual(6)
  })
})
