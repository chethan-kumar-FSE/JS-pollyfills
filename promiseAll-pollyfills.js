class Promisepollyfill {
  static all(promises) {
    return new Promise((resolve, reject) => {
      let promResult = [];
      let promiseLength = promises.length;
      if (promiseLength === 0) {
        return resolve([]);
      }

      promises.forEach((promise) => {
        Promise.resolve(promise)
          .then((data) => {
            promResult.push(data);
            promiseLength--;

            if (promiseLength === 0) {
              return resolve(promResult);
            }
          })
          .catch((err) => {
            return reject("something went wrong");
          });
      });
    });
  }
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve-01");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve-02");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("rejected-03");
  }, 1000); // This promise is rejected
});

const promises = [p1, p2, p3];
const p = Promisepollyfill.all(promises);
p.then((data) => {
  console.log(data); // This won't run if any promise rejects
}).catch((err) => {
  console.log(err); // Will log the rejection reason "rejected-03"
});
