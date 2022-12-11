const fs = require('fs')
let input = fs.readFileSync('cleanup.txt').toString().split("\n");

let containCount = 0;

input.forEach((pair) => {

	const pairArray = pair.split(',');
	const firstRange = pairArray[0].split('-').map(item => parseInt(item))
	const secondRange = pairArray[1].split('-').map(item => parseInt(item))

	if ((firstRange[0] <= secondRange[0]) || firstRange[1] <= secondRange[1]) {
		containCount += 1;
	} else if ((firstRange[0] >= secondRange[0]) && (secondRange[1] <= firstRange[1])){
		containCount += 1;
	} else {
		console.log(firstRange + " and " + secondRange + " do not overlap")
	}

})

console.log(containCount)