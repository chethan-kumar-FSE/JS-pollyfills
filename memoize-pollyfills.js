function memoized(fn) {
  const cache = {};

  return function (num1, num2) {
    const caching = JSON.stringify(num1, num2);

    if (cache[caching]) {
      return cache[caching];
    }
    const cachedValue = fn(num1, num2);
    cache[caching] = cachedValue;
    return cache[caching];
  };
}

function hardCalculations(num1, num2) {
  //expensive calculation;
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += num1 + num2;
  }
  return sum;
}
//timer 1

const memoizedCalc = memoized(hardCalculations);
const start1 = Date.now();
console.log(memoizedCalc(100, 200));
const end1 = Date.now();
console.log(end1 - start1);
const start2 = Date.now();
console.log(memoizedCalc(300, 100));
const end2 = Date.now();
console.log(end2 - start2);
