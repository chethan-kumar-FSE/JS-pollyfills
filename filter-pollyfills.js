Array.prototype.myFilter = function (fn) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const arr = [12, 3, 4, 5, 6];

const filtered = arr.myFilter((val) => {
  return val % 2 == 0;
});

console.log(filtered);
