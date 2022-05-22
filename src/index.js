const newEval = (code) => {
  eval(code);
}
exports.handler = async (event) => {
  // ruleid:tainted-eval
  eval(event['smth'])
  // ruleid:tainted-eval
  var x = new Function('a', 'b', `return ${event['func']}(a,b)`)
  // ruleid:tainted-eval
  var y = Function('a', 'b', event['code'])
  // ruleid:tainted-eval
  newEval(event["smth"])
}