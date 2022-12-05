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
	const theyPlayed = currLine[0];
	const result = currLine[1]

	// They played rock
	if (theyPlayed === 'A') {
		if (result === 'X') finalVal += LOSE_VAL + SCISSOR_VAL // lose
		else if (result === 'Y') finalVal += DRAW_VAL + ROCK_VAL // draw 
		else if (result === 'Z') finalVal += WIN_VAL + PAPER_VAL // win

	// They played paper
	} else if (currLine[0] === 'B') {
		if (result === 'X') finalVal += LOSE_VAL + ROCK_VAL // lose
		else if (result === 'Y') finalVal += DRAW_VAL + PAPER_VAL // draw 
		else if (result === 'Z') finalVal += WIN_VAL + SCISSOR_VAL // win

	// They played scissors
	} else if (currLine[0] === 'C') {
		if (result === 'X') finalVal += LOSE_VAL + PAPER_VAL // lose
		else if (result === 'Y') finalVal += DRAW_VAL + SCISSOR_VAL // draw 
		else if (result === 'Z') finalVal += WIN_VAL + ROCK_VAL // win
	}
}

console.log(finalVal)