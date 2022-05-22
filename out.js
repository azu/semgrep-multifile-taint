// src/mod.js
var ge = (event) => {
  eval("alert");
  eval(event["smth"]);
  var x = new Function("a", "b", `return ${event["func"]}(a,b)`);
  var y = Function("a", "b", event["code"]);
};

// src/index.js
exports.handler = async (event) => {
  ge(event);
  eval(event["smth"]);
};
