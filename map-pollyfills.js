const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (fn) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(fn(this[i], i, this));
  }
  return temp;
};

const mappedValues = arr.myMap((val, index, arr) => {
  return val * 4;
});
console.log(mappedValues);
