let numberMucker = () => {
	let num1 = Math.floor(Math.random() * 11)
	let num2 = Math.floor(Math.random() * 11)
	let callback1 = num1 * num2
	return callback1
}
numberMucker() * 2
// export default numberMucker

// export let genNumber = () => {
// 	let num1 = Math.floor(Math.random() * 1000)
// 	return num1
// }

let numberMucker2 = (callback1) => {
	return callback1() * 2
}

console.log(numberMucker2(numberMucker))
