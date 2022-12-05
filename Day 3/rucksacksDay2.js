const fs = require('fs')
let input = fs.readFileSync('rucksacks.txt').toString().split("\n");

let prioTotal = 0;


for (let i = 0; i < input.length; i += 3) {

	const firstSack = input[i];
	const secondSack = input[i + 1];
	const thirdSack = input[i + 2];

	const firstSackArray = firstSack.split("")

	for (let j = 0; j < firstSackArray.length; j++) {
		if (secondSack.includes(firstSackArray[j]) && thirdSack.includes(firstSackArray[j])) {
			prioTotal += convertToPriority(firstSack, j)
			break;
		}
	}
}

console.log(prioTotal)

function convertToPriority(fullString, index) {
	if (fullString[index] === fullString[index].toUpperCase()) return fullString.charCodeAt(index) - 38;
	else return fullString.charCodeAt(index) - 96;
}