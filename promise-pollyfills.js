class Promisepollyfill {
  constructor(fn) {
    this.state = "pending"; // Tracks the state (pending, fulfilled, or rejected)
    this.value = null; // Holds resolved value
    this.reason = null; // Holds rejection reason
    this.thenCallbacks = []; // Store `.then` callbacks
    this.catchCallbacks = []; // Store `.catch` callbacks

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        // Execute all the `.then` callbacks
        this.thenCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        // Execute all the `.catch` callbacks
        this.catchCallbacks.forEach((callback) => callback(reason));
      }
    };

    // Execute the executor function and pass the resolve and reject functions
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  dotThen(cb) {
    if (this.state === "fulfilled") {
      cb(this.value); // Execute `.then` callback if already resolved
    } else if (this.state === "pending") {
      // If still pending, add the callback to be executed later
      this.thenCallbacks.push(cb);
    }
    return this; // For chaining
  }

  dotCatch(cb) {
    if (this.state === "rejected") {
      cb(this.reason); // Execute `.catch` callback if already rejected
    } else if (this.state === "pending") {
      // If still pending, add the callback to be executed later
      this.catchCallbacks.push(cb);
    }
    return this; // For chaining
  }
}

// Example Usage:
new Promisepollyfill((resolve, reject) => {
  setTimeout(() => {
    reject("Resolved data after 3 seconds");
  }, 3000);
})
  .dotThen((data) => {
    console.log("Then:", data); // This will log the resolved data
  })
  .dotThen((data) => {
    console.log("then:", data);
  })
  .dotCatch((err) => {
    console.log("Catch:", err);
  });
