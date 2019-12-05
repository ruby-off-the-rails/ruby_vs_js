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
  var i = 0;

  while (i < numbers.length) {
    if (numbers[i] > target) {
      numbers.splice(i, 0, target);
      return numbers;
    }
    return null;
  }

  // numbers.forEach(function(number) {
  //   // console.log(number);
  //   if (number > target) {
  //     // add the number to the array then you're done
  //     console.log(i)
  //     console.log(numbers)
  //     numbers.splice(i, 0, target);
  //     console.log(numbers)
  //     return numbers;
  //   }
  //   i++;
  // });
  return newArray;
}

console.log(insertValue([1,4,6,8,10,11,12,14], 7));




// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function higherLower(numbers, target) {
  // find the middle value in the array
  // find the middle index in the array
  if (numbers[Math.floor(numbers.length / 2)] > target) {
    console.log("lower");
  } else {
    console.log("higher");
  }
}

higherLower([1,4,6,8,10,11,12,14,15], 14)
