var someNumbers = [34, -1, 56, -200, 0, 15, 2];
 
 function swap(someList, indexA, indexB){
 	var temp = someList[indexA];
 	someList[indexA] = someList[indexB];
 	someList[indexB] = temp;

 	return;


 }

 function sortNumbers(listOfNumbers){
 	for(var i = 0; i < listOfNumbers.length; i = i + 1){
 		for(var k = 0; k < (listOfNumbers.length - 1 - i); k = k + 1){
 			if (listOfNumbers[k] < listOfNumbers[k + 1]){
 				swap(listOfNumbers, k, k + 1);

 			}

 		}
 		
 	}

 	
 }

function getRandomNumber(){
 	var random = Math.random() * 1000000;
 	return random;
 }

var hugeAmountOfNumbers = []
 for(var i = 0; i <= 10; i = i + 1){
 	var rand = getRandomNumber();
	hugeAmountOfNumbers.push(rand);
 }
 console.log(hugeAmountOfNumbers);

 sortNumbers(someNumbers);

 console.log(someNumbers);

 