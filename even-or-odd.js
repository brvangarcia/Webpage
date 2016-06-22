//NUMBER IS EVEN OR ODD

var ask = require('readline-sync')

var number = ask.question('Give me a number: ')

var intNumber = parseInt(number);

if (intNumber % 2 == 0)
{
console.log('It is a even number')
}
else
{
console.log('It is an odd number')
}