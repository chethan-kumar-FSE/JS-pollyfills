Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("can be called only with functions");
  }

  //this referes to the function in here
  //assign the function reference to context["fn"];
  //and then call the function to execute the statments inside it
  context["fn"] = this;
  context["fn"](...args);

  //once the function called , delete it from the object
  delete context["fn"];
};

function calling(...args) {
  console.log("", args);
}

const obj = {
  name: "chethan",
};

calling.myCall(obj, "akratka", "basc");
