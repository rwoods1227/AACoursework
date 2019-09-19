
function sum1() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

function sum2(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

 Function.prototype.myBind1 = function(this_obj) {
   let caller_func = this;
   let bindTimeArgs = Array.from(arguments).slice(1); //takes all bind time args outside of this_obj 
   return function(){ //anon function to take second group of args 
     let callTimeArgs = Array.from(arguments); //creates an array from call time args  
     return caller_func.apply(this_obj, bindTimeArgs.concat(callTimeArgs));//sets return of return fucntion to apply call on caller function of bind with all args
   };
 };
//bind returns a function, call time argument is passed to that returned function

Function.prototype.myBind2 = function(...args) {
  let caller_func = this;
  let this_obj = args[0];
  let bindTimeArgs = Array.from(args).slice(1); //takes all bind time args outside of this_obj 
  return function (...args) { //anon function to take second group of args 
    let callTimeArgs = Array.from(args); //creates an array from call time args  
    return caller_func.apply(this_obj, bindTimeArgs.concat(callTimeArgs)); //sets return of return fucntion to apply call on caller function of bind with all args
  };
};

function curriedSum(numArgs) {
  let numbers = [];

  let _curriedSum = function(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let sum = 0;

      numbers.forEach(number => {
        sum += number
      });
      return sum;
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum; // return 1
}

Function.prototype.curry = function (numArgs){
  let numbers = [];
  let func = this;
  let _curry = function(num) {
    numbers.push(num)
    if (numbers.length === numArgs){
        return func(...numbers);
    }
    else{
      return _curry;
    }
  }
  return _curry;
}

Function.prototype.curry2 = function (numArgs) {
  let numbers = [];
  let func = this;
  let _curry2 = function (num) {
    numbers.push(num)
    if (numbers.length === numArgs) {
      return func.apply(undefined, numbers); 
    }
    else {
      return _curry2;
    }
  }
  return _curry2;
}





