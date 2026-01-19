// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
//Divide smaller sub-problems
/*
1. sum array
2. sum array / array.length
3. Max value of the array
4. Count array which is not 0
5. if sum >= 35 -> full-time
*/

const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const total = function totalHours(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const average = function averageHour(arr) {
  return total(arr) / arr.length;
};

const max = function maxHour(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

const count = function countWorkHour(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
};

const full = function fullTime(arr) {
  if (total(arr) >= 35) {
    return true;
  } else {
    return false;
  }
};

console.log(`1. Total hours worked : ${total(data)} hours
2. Avarage daily hours : ${average(data)} hours
3. The day with the most hours worked : ${max(data)} hours
4. Number of days worked : ${count(data)} days
5. Full time : ${full(data)}`);
