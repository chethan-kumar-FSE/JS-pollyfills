function throttle(fn, delay) {
  let lastTime = 0;
  let timeout;
  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastTime > delay) {
      lastTime = currentTime;
      fn(...args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        console.log("exuted");
        timeout = null;
        lastTime = Date.now();
        fn(...args);
      }, delay - (currentTime - lastTime));
    }
  };
}
function fn(...args) {
  console.log("excuting the api call", args);
}
const throttledLog = throttle(fn, 2000);
setTimeout(() => throttledLog("Call 1"), 0); // At T=0ms
setTimeout(() => throttledLog("Call 2"), 500); // At T=500ms
