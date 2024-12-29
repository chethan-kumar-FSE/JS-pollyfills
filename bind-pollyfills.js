Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Only function call be called with bind method");
  }

  context["fn"] = this;

  //gets the closure from the above context["fn"]
  return function (...innerArgs) {
    context["fn"](...args, ...innerArgs);
    delete context["fn"];
  };
};

const obj = {
  name: "chethan",
};

function calling(...args) {
  console.log("calling function", this, args);
}

const functionRef = calling.myBind(obj, "chethan", "mohan");

//the function returned to functionRef will have access to obj itself since it comes with the closure
functionRef("rahul");
