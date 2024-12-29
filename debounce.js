function debounce(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      clearInterval(timer);
    } else {
      timer = setTimeout(() => {
        fn();
      }, delay);
    }
  };
}

function fn() {
  console.log("debounce function is executed");
}

const debounced = debounce(fn, 1000);
debounced();
