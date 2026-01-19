// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
 1. Understanding Question
  - Print array element to the string
 2. Divide Problems
  - Take all the element of array using for loop
  - Put them in to string
*/

const forcast = function printForecast(arr) {
  let result = "... ";
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let day = i;
    result = result + ` ${temp}ºC in ${day} days ...`;
  }
  console.log(result);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

forcast(data1);
