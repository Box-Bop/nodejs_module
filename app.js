// My module
var module = require('./module.js');
// For reading input
var readline = require('readline');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insert the name of a color: ", function(answer) {
  var ans = module(answer.toLowerCase());
  if (ans==null) {
    console.log("Couldn't find that color.")
  }
  else{
    console.log("Here's your hex for that: #"+ans);
  }
  rl.close();
});