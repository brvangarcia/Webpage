//VAMOS A CALCULAR EL IVA
var ask = require('readline-sync');

var iva = 0.115;

var precio = ask.question('What is the price of the item? ');

var convertedTotal = parseInt(precio);

var total = (convertedTotal* iva) + convertedTotalrequio;

console.log('Total price: ' + total);