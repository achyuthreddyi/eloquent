// parseExpression is a function which takes a string as input and returns 
// an object containing the data strcture for the expression at the start 
// of the string along with the part of the string left after parsing the expression

function parseExpression(program) {
    program = skipSpace(program);

    console.log("\n after removing the spaces" , program)
    let match, expr;
    //  for strings
    if (match = /^"([^"]*)"/.exec(program)) {
      expr = {type: "value", value: match[1]};
    } 
    //  for numbers
    else if (match = /^\d+\b/.exec(program)) {
      expr = {type: "value", value: Number(match[0])};
    } 
    // for words
    else if (match = /^[^\s(),#"]+/.exec(program)) {
      expr = {type: "word", name: match[0]};
    } 
    //  rest of the program
    else {
      throw new SyntaxError("Unexpected syntax: " + program);
    }
    console.log("expression is " , expr)
    console.log(" rest of the program is ", program.slice(match[0].length))
  
    return parseApply(expr, program.slice(match[0].length));
  }
  
  function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
  }

  function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        console.log(" inside the parseapply",expr)
      return {expr: expr, rest: program};
    }
  
    program = skipSpace(program.slice(1));
    expr = {type: "apply", operator: expr, args: []};
    while (program[0] != ")") {
      let arg = parseExpression(program);
      expr.args.push(arg.expr);
      program = skipSpace(arg.rest);
      if (program[0] == ",") {
        program = skipSpace(program.slice(1));
      } else if (program[0] != ")") {
        throw new SyntaxError("Expected ',' or ')'");
      }
    }
    return parseApply(expr, program.slice(1));
  }

  function parse(program) {
    let {expr, rest} = parseExpression(program);
    if (skipSpace(rest).length > 0) {
      throw new SyntaxError("Unexpected text after program");
    }
    return expr;
  }

  console.log("finaloutput",parse("+(a, 10,*(8,9))"));