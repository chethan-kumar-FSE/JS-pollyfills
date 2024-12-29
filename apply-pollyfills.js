Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error("only can be called with function");
  }
  //attach the function to the context , thats an object being passed from call method
  context["fn"] = this;

  //pass in the arguments inside the function
  context["fn"](args);

  //delete the function once used
  delete context["fn"];
};

function calling(args) {
  console.log("", this.name, ...args);
}

const obj = {
  name: "chethan",
};

calling.myApply(obj, ["cdhgasdh", "asfdbasdfs"]);
