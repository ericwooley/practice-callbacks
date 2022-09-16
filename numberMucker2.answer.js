export function genNumber() {
  return Math.floor(Math.random() * 11)
}
function numberMucker(callback1) {
  const num1 = callback1()
  const num2 = callback1()
  return num1 * num2
}
export default numberMucker
console.log('numberMucker2', numberMucker(genNumber))
