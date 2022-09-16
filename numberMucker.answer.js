function numberMucker() {
  const num1 = Math.floor(Math.random() * 11)
  const num2 = Math.floor(Math.random() * 11)
  return num1 * num2
}
export default numberMucker
console.log('numberMucker', numberMucker())
