function max(numbers) {
  // console.log(numbers);
  var currentMax = numbers[0];
  numbers.forEach(function(number) {
    if (number > currentMax) {
      currentMax = number;
    }
    // console.log(number);
  });
  return currentMax;
}

// console.log(max([5, 4, 8, 1, 2, 12]));


// ```# Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the “reverse” method built in to Ruby.

function descend(numbers) {
  // console.log(numbers);
  var reversedArray =[];
  var i = numbers.length - 1;
  while (i >= 0) {
    // console.log(numbers[i]);
    reversedArray.push(numbers[i]);
    i--;
  }
  return reversedArray;
}

console.log(descend([1, 3, 5, 7]));
