const fs = require('fs')
let input = fs.readFileSync('rucksacks.txt').toString().split("\n");

let prioTotal = 0;

input.forEach((item) => {

	const firstCompartment = item.slice(0, item.length/2)
	const secondCompartment = item.slice(item.length/2, item.length)

	const firstComArray = firstCompartment.split("")

	for (let i = 0; i < firstComArray.length; i++) {

		if (secondCompartment.includes(firstComArray[i])) {
			prioTotal += convertToPriority(firstCompartment, i);
			break;
		}
	}
})

console.log(prioTotal)

function convertToPriority(fullString, index) {
	if (fullString[index] === fullString[index].toUpperCase()) return fullString.charCodeAt(index) - 38;
	else return fullString.charCodeAt(index) - 96;
}