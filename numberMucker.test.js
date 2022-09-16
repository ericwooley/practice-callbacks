import numberMucker from './numberMucker'
describe('numberMucker', () => {
  it('should generate a random number', () => {
    expect(numberMucker()).toBeGreaterThanOrEqual(0)
  })
  it('should always generate numbers between 0, and 100', () => {
    // Check 5000 times, since we can't check what the actual random number is,
    // we can only check a bunch of times and see if it's always between 0 and 100
    for (let i = 0; i < 5000; i++) {
      const number = numberMucker()
      expect(number).toBeLessThanOrEqual(100)
      expect(numberMucker()).toBeGreaterThanOrEqual(0)
    }
  })
})
