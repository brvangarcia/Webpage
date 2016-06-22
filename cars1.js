
carBrands = ['Toyota', 'Ford', 'Honda', 'Nissan'];
function swap(myList, indexA, indexB){
	if( indexA < 0 ||  indexB < 0){
	console.log('Invalid index');
	}  else if(indexA >= myList.length || indexB >= myList.length)  {
	console.log('Invalid index');
	}else {
		var temp = myList[indexA];
	myList[indexA] = myList[indexB];
	myList[indexB] = temp;

	}
return;
}

console.log('Item at position 0: ' + carBrands[0]);
console.log('Item at position 2: ' + carBrands[2]);

swap(carBrands, 0, 2);

console.log('Item at position 0: ' + carBrands[0]);
console.log('Item at position 2: ' + carBrands[2]); 

console.log("My car brands: " + carBrands);