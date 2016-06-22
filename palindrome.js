var ask = require('readline-sync');

function isPalindrome(word){
	for(var i = word.length - 1; i >= 0; i = i - 1 ){
	temp = temp + word.charAt(i);

	}
	if (temp == word){
		return true;
	} else {
		return false;

	}
}
while(true){
	var input = ask.question('Enter a word to test if it is palindrome: ');
	if(input == 'quit'){
		break;
	}
	var test  = isPalindrome(input);

	if (test){
		console.log('The word is a palindrome');

	}  else {
		console.log('The word is a palindrome');
	}

}