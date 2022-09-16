export function multipleTwoNumbers(num1, num2) {
  return num1 * num2
}
export function genNumber() {
  return Math.floor(Math.random() * 11)
}
function numberMucker(callback1, callback2) {
  const num1 = callback1()
  const num2 = callback1()
  return callback2(num1, num2)
}
export default numberMucker

console.log('numberMucker3', numberMucker(genNumber, multipleTwoNumbers))
