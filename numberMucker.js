// let numberMucker = () => {
// 	let num1 = Math.floor(Math.random() * 11)
// 	let num2 = Math.floor(Math.random() * 11)
// 	return num1 * num2
// }
// export default numberMucker

let numbers = () => {
	let num1 = 1
	let num4 = 3
	return adder(num1, num4)
}

let adder = (num1, num2) => {
	return num1 + num2
}

console.log(numbers())
