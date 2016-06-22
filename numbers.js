var carBrands = ['Toyota', 'Ford', 'Honda', 'Nissan'];

var numbersLength = carBrands.length

console.log('The list has: ' + numbersLength + ' items');

var temp = carBrands[2];

console.log('The item in position 2 is: ' + temp);

carBrands.push('Suzuki');

console.log('The item at the end of the lsit isd : ' + carBrands[4]);

carBrands.push("LOL");

console.log('Added item : ' + carBrands[5]);

carBrands.pop()

console.log('Last item:' + carBrands[4]);

var newLength = carBrands.length
console.log('New list size: ' + newLength);