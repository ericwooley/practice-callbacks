import { jest } from '@jest/globals'
import numberMucker, { genNumber } from './numberMucker2'
describe('numberMucker', () => {
  it('should generate a random number', () => {
    // In case you are curios, testing is one reason why we might use callbacks,
    // instead of just calling Math.random() directly.
    let i = 1
    const spy = jest.fn(() => {
      return i++
    })
    expect(numberMucker(spy)).toEqual(2)
    expect(spy).toHaveBeenCalledTimes(2)
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
})
