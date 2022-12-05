const fs = require('fs')
let input = fs.readFileSync('rockPaperScissors.txt').toString().split("\n");

const WIN_VAL = 6;
const DRAW_VAL = 3;
const LOSE_VAL = 0;

const ROCK_VAL = 1;
const PAPER_VAL = 2;
const SCISSOR_VAL = 3;

let finalVal = 0;

for (let i = 0; i < input.length; i++) {

	const currLine = input[i].split(" ")

	if (currLine[0] === 'A') {
		if (currLine[1] === 'X') finalVal += DRAW_VAL + ROCK_VAL;
		else if (currLine[1] === 'Y') finalVal += WIN_VAL + PAPER_VAL;
		else if (currLine[1] === 'Z') finalVal += LOSE_VAL + SCISSOR_VAL;
	} else if (currLine[0] === 'B') {
		if (currLine[1] === 'X') finalVal += LOSE_VAL + ROCK_VAL;
		else if (currLine[1] === 'Y') finalVal += DRAW_VAL + PAPER_VAL;
		else if (currLine[1] === 'Z') finalVal += WIN_VAL + SCISSOR_VAL;
	} else if (currLine[0] === 'C') {
		if (currLine[1] === 'X') finalVal += WIN_VAL + ROCK_VAL;
		else if (currLine[1] === 'Y') finalVal += LOSE_VAL + PAPER_VAL;
		else if (currLine[1] === 'Z') finalVal += DRAW_VAL + SCISSOR_VAL;
	}
}

console.log(finalVal)