// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!


// inputs
// array of sorted numbers
// value to search for


// output
// the index of that value or nil if it's not there


function index(numbers, target) {
  // console.log(numbers)
  for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (numbers[i] === target) {
      return i;
    }
  }
  return null;
}

// looking for index of 2
// console.log(index([1,5,7,9,15,20], 10));


// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!
//

// inputs
// [1,4,6,8,10], 7 => [1,4,6,7,8,10]

function insertValue(numbers, target) {
  // console.log(numbers)
  var newArray = [];
  var inserted = false;
  numbers.forEach(function(number) {
    // console.log(number);
    if (number < target) {
      newArray.push(number);
    } else if (number >= target && inserted === false) {
      newArray.push(target);
      inserted = true;
      newArray.push(number);
    } else {
      newArray.push(number);
    }
  });
  return newArray;
}

console.log(insertValue([1,4,6,8,10,11,12,14], 7));
