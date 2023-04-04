const fs = require('fs')
let input = fs.readFileSync('supply.txt').toString().split("\n");

// You could have more than 9 stacks but let's leave it like this for now
let stacks = [
	{ stack: 1, items: [] },
	{ stack: 2, items: [] },
	{ stack: 3, items: [] },
	{ stack: 4, items: [] },
	{ stack: 5, items: [] },
	{ stack: 6, items: [] },
	{ stack: 7, items: [] },
	{ stack: 8, items: [] },
	{ stack: 9, items: [] },
];

let lines = [];

// Remove duplicate spaces
for (let i = 0; i < input.length; i++) {

	let thisLine = input[i].split(" ");
	if (thisLine.includes("1")) break;

	// It's ugly but every 4 '' === one empty stack placement
	for (let j = 0; j < thisLine.length; j++) {
		if (thisLine[j] === '' && thisLine[j+1] === '' && thisLine[j+2] === '' && thisLine[j+3] === '') {
			thisLine.splice(j, 3)
		}
	}

	lines.push(thisLine)
}

for (let i = 0; i < lines.length; i++) {

	let thisLine = lines[i]

	for (let j = 0; j < thisLine.length; j++) {

		let currStackItem = thisLine[j];
		if (thisLine[j] !== '') {

			// Put item in existing stack
			let currStack = stacks.find(x => x.stack == j + 1);
			if (currStack != undefined) {
				currStack.items.push(thisLine[j])
			} 
		}
	}
}


// Parse out our rules - original stuff
const instructions = input.filter(line => line.includes("from"))
let rules = [];

instructions.forEach(instruction => {
	let thisLineRules = instruction.split(" ")
	thisLineRules = thisLineRules.filter(rule => !isNaN(rule))
	rules.push(thisLineRules)
})

// Apply the rules
rules.forEach(rule => {

	const numItems = parseInt(rule[0])
	const fromStack = parseInt(rule[1])
	const toStack = parseInt(rule[2])

	let holdItems = [];

	// Remove numItems from fromStack
	for (let i = 0; i < numItems; i++) {
		let removedItem = stacks.filter(currStack => currStack.stack === fromStack)[0].items.shift();
		holdItems.push(removedItem)
	}

	// Add holdItems to toStack -- in opposite order bc it's fancy crane time
	holdItems = holdItems.reverse()
	for (let i = 0; i < holdItems.length; i++) {
		stacks.filter(currStack => currStack.stack === toStack)[0].items.unshift(holdItems[i]);
	}
})


// Get letters of each top of stack
let stackString = '';
stacks.forEach(stack => {
	if (stack.items.length) stackString += stack.items[0].replace('[', '').replace(']','');
})

console.log(stackString)