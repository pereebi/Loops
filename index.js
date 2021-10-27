/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var x = 1;

while(x <= 20) {
    if (x % 3 === 0){
        console.log("Fizz")
    }else if (x % 5 === 0){
        console.log("Buzz")
    }else if (x % 3 === 0 && x % 5 === 0){
        console.log("FizzBuzz")
    }else{
        console.log(x)
    }
    x = x + 1;
}


/*
 * Programming Quiz
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */



var num = 99;

while(num >= 0){
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around...`)
    num = num - 1;
}


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var seconds = 60;

while(seconds >= 0){
    if(seconds === 50){
        console.log("Orbiter transfers from ground to internal power")
    }else if(seconds === 31){
        console.log("Ground launch sequencer is go for auto sequence start")
    }else if(seconds === 16){
        console.log("Activate launch pad sound suppression system")
    }else if(seconds === 10){
        console.log("Activate main engine hydrogen burnoff system")
    }else if(seconds === 6){
        console.log("Main engine start")
    }else if(seconds === 0){
        console.log("Solid rocket booster ignition and liftoff!")
    }else{
        console.log(`T-${seconds} seconds`)
    }
    seconds = seconds - 1;
}


/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

for(let x = 9; x >= 1; x = x-1){
    console.log("hello " + x)
}


/*
 * Programming Quiz: Fix the Error 
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `5`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should increment `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


for (let x = 5; x < 10; x++){
    console.log(x);
}

  
/*
 * Programming Quiz: Fix the Error
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `k` with the value of `0`
 * - Your `for` loop should have a stop condition for the value of `k`
 * - Your `for` loop should increment `k` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


for (let k = 0; k < 200; k++){
    console.log(k);
}



/*
 * Programming Quiz: Factorials 
 */

let number = 12;
for (let i = number - 1; i >= 1; i--) {
    number *= i;
}
let solution = number;
console.log(solution)



/*
 * Programming Quiz: Find my Seat
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */

for (let row = 0; row <= 25; row++){
    for (let seat = 0; seat < 100; seat++) {
      console.log(row + "-" + seat)
    }
  }
