

var ask = require('readline-sync');

var input = ask.question('Enter a number: ');

var num = parseInt(input);

function isPrime(number){
var flag = true;
for (var i = 2; i < number; i = i + 1){
		var divisionResult = number / i;
		if (divisionResult == Math.floor(divisionResult)){
				flag = false;
				break;			
			}
	}	
	return flag;	
}

var result = isPrime(num);

if(result) {
	console.log('The number is prime');
} else {

	console.log('The number is not a prime.')
}

console.log(result);