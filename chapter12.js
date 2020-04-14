// parseExpression is a function which takes a string as input and returns 
// an object containing the data strcture for the expression at the start 
// of the string along with the part of the string left after parsing the expression

function parseExpression(program) {

    program = skipSpace(program);

    let match, expr;
    //  for strings
    if (match = /^"([^"]*)"/.exec(program)) {
      expr = {type: "value", value: match[1]};
    } 
    //  for numbers
    else if (match = /^\d+\b/.exec(program)) {
      expr = {type: "value", value: Number(match[0])};
    } 
    // for binding or variable
    else if (match = /^[^\s(),#"]+/.exec(program)) {
      expr = {type: "word", name: match[0]};
    } 
    //  rest of the program
    else {
      throw new SyntaxError("Unexpected syntax: " + program);
    }
  
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

  console.log("finaloutput",parse(" **achuth()"));

  const specialForms = Object.create(null)

  function evaluate(expr,scope){
    if(expr.type == "value"){
        return expr.value;
    }
    else if(expr.type == "word"){
      if (expr.name in scope){
        return scope[expr.name]
      }
      else{
        throw new ReferenceError(
          `Undefined binding : ${expr.name}`)
      }
    }
      else if(expr.type == "apply"){
        let{operator , args } = expr;
        if(operator.type == "word" && 
        operator.name in specialForms){
          return specialForms[operator.name] (expr.args,scope)
        }
        else{
          let op = evaluate(operator,scope)
          if( typeof op == "function"){
            return op(...args.map(arg => evaluate(arg,scope)))
          }
          else{
            throw new TypeError("applying a non function")
          }

        }

      }
    }
  
