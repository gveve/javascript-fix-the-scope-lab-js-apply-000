var animal = 'dog'

function myAnimal() {
  return animal;
}

myAnimal(animal);

function yourAnimal() {
var animal = 'cat';
  return animal;
}

yourAnimal(animal);


function add2(n) {
  const two = 2;
    return n + two;
}

add2(14)

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()();
