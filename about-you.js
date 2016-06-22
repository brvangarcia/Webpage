var ask = require('readline-sync');

var name = ask.question('Whats your name? ');
var age = ask.question('Whats your aage? ');
var address = ask.question('Where do you live? ');

console.log('Your name is ' + name + ' you are ' + age + ' and you live in ' + address);