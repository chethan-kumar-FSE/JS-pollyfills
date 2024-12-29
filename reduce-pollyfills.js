//(acc,current,i,arr)
Array.prototype.myReduce = function (fn, initalValue) {
  let res = initalValue;
  if (!res) {
    res = 0;
  }
  for (let i = 0; i < this.length; i++) {
    res = fn(res, this[i]);
  }
  return res;
};

const arr = [1, 2, 4, 5, 6, 6];

const reduced = arr.myReduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
console.log(reduced);
//works for both object and array of numbers
