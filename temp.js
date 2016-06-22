var ask = require('readline-sync');
var count = 0;
var total = 0;
while(true) {
	var input = ask.question('Enter a grade: ');

	if (input == 'quit'){
		break;
	}
	var grade = parseFloat(input);

		total = total + grade;

		count = count + 1;
}
var avgGrade = total / (100*count);

console.log("Grade average: " + avgGrade);

	


