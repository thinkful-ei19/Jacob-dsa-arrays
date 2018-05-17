'use strict';

// O(n) - runs through the string once
function URLify(string) {
  let result = '';
  for (let i=0; i< string.length; i++) {
    if(string[i] === ' ') {
      result += '%20';
    }
    else {
      result += string[i];
    }
  }
  return result;
}

// O(n) linear, runs through the input array
function filterLessThanFive(arr) {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr[count] = arr[i];
      count++;
    }
  }
  return newArr;
}

// console.log(filterLessThanFive([1,2,6,8,3,10])); // returns [6,8,10]

// O(n) - linear
const maxSum = (arr) => {
  const sumArr = [];
  for (let i=0; i < arr.length; i++) {
    if (i === 0) {
      sumArr.push(arr[i]);
    } else {
      sumArr.push(arr[i] + sumArr[i-1]);
    }
  }
  let result = sumArr[0];
  for (let i=0; i < sumArr.length; i++) {
    if (sumArr[i] > result) {
      result = sumArr[i];
    }
  }
  return result;
};

// console.log(maxSum([4,6,-3,5,-2,1])); // returns 12

// O(n) linear, runs through both array inputs once
const merge = (arr1, arr2, res=[], count=0) => {
  let min = 0;
  if (arr1.length + arr2.length === 0) {
    return console.log(res);
  }
  if (arr1.length === 0) {
    min = arr2[0];
    arr2.shift();
  }
  if (arr2.length === 0) {
    min = arr1[0];
    arr1.shift();
  }
  if (arr1[0] <= arr2[0]) {
    min = arr1[0];
    arr1.shift();
  }
  else if (arr1[0] > arr2[0]) {
    min = arr2[0];
    arr2.shift();
  }
  res[count] = min;
  count++;
  merge(arr1, arr2, res, count);
};

// merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]); //logs out [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// O(n^2) - runs through the string for each additional character to be removed
// function removeChars(string, chars) {
//   let result = '';
//   for (let i=0; i< chars.length; i++) {
//     result = '';
//     for (let j=0; j< string.length; j++) {
//       if(string[j] !== chars[i]) {
//         result += string[j];
//       }
//     }
//     string = result;
//   }
//   return result;
// }

// O(n^2) exponential two for loops
const removeChars = (str, remove) => {
  let result = '';
  for (let i=0; i < str.length; i++) {
    let add = true;
    for (let j=0; j < remove.length; j++) {
      if (str[i] === remove[j]) {
        add = false;
        break;
      }
    }
    if (add) {
      result += str[i];
    }
  }
  return result;
};

//console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')); //logs out 'heo'

// O(n^2) quadratic
const products = (arr) => {
  let storeArr = [];
  let num;
  for (let i = 0; i < arr.length; i++) {
    num = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        num *= arr[j];
      }
    }
    storeArr[i] = num;
  }
  return storeArr;
};

// console.log(products([1, 2, 3, 4]));

let input = [
						[1,0,1,1,0],
						[0,1,1,1,0],
						[1,1,1,1,1],
						[1,0,1,1,1],
						[1,1,1,1,1]
					];
	
// O(n^4), quite slow and could be improved
const twoDArray = (arr) => {
  let clearedRowHolder = [];
  let clearedColHolder = [];
  for (let i = 0; i < arr.length; i++) {
    let rowCount = clearedRowHolder.length;
    let colCount = clearedRowHolder.length;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        clearedRowHolder[rowCount] = j;
        rowCount++;
        clearedColHolder[colCount] = i;
        colCount++;
      }
    }
  }
  for (let i = 0; i < clearedRowHolder.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[j][clearedRowHolder[i]] = 0;
    }
  }

  for (let i = 0; i < clearedColHolder.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[clearedColHolder[i]][j] = 0;
    }
  }
  return arr;
};

console.log(twoDArray(input));
// O(n^2) 
const rotation = (str1, str2) => {
  let str = str1 + str1;
  return str.includes(str2);
};
// solvable recursively
// console.log(rotation('amazon', 'azonam'));