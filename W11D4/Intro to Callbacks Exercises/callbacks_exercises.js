const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Clock{
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000 )
  }

  printTime() {
    console.log(this.hours + ':' + this.minutes + ':' + this.seconds)
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60){
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60){
        this.minutes = 0;
        this.hours += 1;
        if (this.hours === 24){
          this.hours = 0;
        }
      }
    }
    this.printTime();
  }
};

//const clock = new Clock();


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
      reader.question("Enter a number", function (numString1){
      let num = parseInt(numString1);
      sum += num;
      
      numsLeft = numsLeft - 1;
      console.log(sum);
      
      addNumbers(sum, numsLeft, completionCallback)
      });
  }
  else{
    completionCallback(sum)
    reader.close();
  }
}

//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(
    "Is " + el1 + " greater than " + el2 + "?: ",
    function (answer) {
      if (answer == "yes") {
        callback(true);
      } else {
        callback(false);
      }
    }
  );
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if (i == (arr.length - 1)) {
    // End of array reached.
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

  askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    if (isGreaterThan) {
      const tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;

      madeAnySwaps = true;
    }

    innerBubbleSortLoop(
      arr, i + 1, madeAnySwaps, outerBubbleSortLoop
    );
  });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 4, 1, 2, 6], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
