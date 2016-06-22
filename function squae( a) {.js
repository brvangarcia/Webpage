var ask = require('readline-sync');

var iva = 0.115

var precio = ask.question('What is the price of the item? ');

var convertedTotal = parseFloat(precio);

var niceTotal = convertedTotal.toPrecision(4)

console.log('Total price: ' + niceTotal);

var precioArticuloDos = ask.question('What is the price of the second item: ');

var convertedTotalTwo = parseFloat(precioArticuloDos);

var totalTwo = (convertedTotalTwo * iva) + convertedTotalTwo;

var niceTotalTwo = totalTwo.toPrecision(4);

console.log('Total price of the second item: ' + niceTotalTwo);