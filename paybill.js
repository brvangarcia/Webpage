var ask = require('readline-sync');

var cost = ask.question('What was the meal total? ')

var realCost = parseFloat(cost)

var people = ask.question('How many poeple are going to split the bill? ')

var realPeople = parseInt(people)

// NEED TO CONVERT TO INTEGER NUMBER

var iva = 0.115, gratuity = 0.15

var includeIva = ask.question('This price, includes tax? ')

var total

if (includeIva == 'no')
{
	total = (realCost * iva) + realCost
}
else
{
	total = realCost;
}

var includeGratuity =ask.question('Include gratuity? ')

var finalSum

if (includeGratuity == 'yes')
{
	finalSum = (total * gratuity) + total
}
else
{
	finalSum = total
}

var amountPerPerson = finalSum / realPeople

console.log('The total was: ' + finalSum.toPrecision(4))

console.log('Each person needs to pay ' + amountPerPerson.toPrecision(4))