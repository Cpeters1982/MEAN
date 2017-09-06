// var x = 10;
// console.log(x);


// var x = [1, 2, 3];
// var y = x;
// x.push('Hello world!')
// // push adds to the end of arrays in JavaScript
// console.log(x);
// console.log(y);


// let firstname = "Chris";
// let lastname = "Peters";
// let message = `Hello my name is ${firstname} ${lastname}`;
// // We use backtics (`) so we can avoid ugly shit like escape characters
// let x = Math.PI;
// console.log(x, message);


// let haiku = "Having been erased, \nThe document you're seeking \nMust now be retyped."
// console.log(haiku);
// // \n pushes everything following to a new line
// // Here are some other examples of common escape characters:

// // "\t" - This creates a horizontal tab
// // "\v" - This creates a vertical tab
// // "\u" - Pass in unicode


// console.log('\u263A        \u2603        \u272f');


// let diet = false;
// if(diet){
//     dont_eat_cake();
// }else{
//     eat_cake();
// }
// // an "else" conditional at work


// let score = 4;
// if(score === 5){
//     console.log('You got 5 out of 5');
// }else if(score === 4){
//     console.log('You got 4 out of 5');
// }else if(score === 3){
//     console.log('You got 3 out of 5');
// }else if(score === 2){
//     console.log('You got 2 out of 5');
// }else if(score === 1){
//     console.log('You got 1 out of 5');
// };
// // "if else" conditional at work


// That means that all conditionals should be booleans, binary variables that are either "true" or "false", 1 or 0, on or off. In programming, certain conditionals are considered 'falsey', which means that they're the exact same as saying false. Here's a list of falsey statements in JavaScript:

// false
// null
// undefined
// 0
// NaN
// ""
// Except for some rare exceptions, the above list represents all the possible falsey values in JavaScript. Take note that an empty string evaluates as false, but an empty array does not. Negative numbers also evaluate as true. A rule of thumb is, if it's not on the above list, it's considered true!

// Common Boolean Operators for Conditionals
// Here's a list of operators used to make more complex conditional statements:

// Symbol	Meaning	example
// <	less than	10 < 20 is true
// >	greater than	10 > 20 is false
// <=	less than or equal to	10 <= 10 is true
// >=	greater than or equal to	10 >= 10 is true
// ==	is equal to value (Abstract Value Comparison)	"x" == "x" evaluates to true
// ===	is equal to value and type (Strict Equality Comparison)	“1” === 1 evaluates to false
// !	inverse (not)	!true == false is true, 'x' !== 'y' is true
// ||	or	true || false is true
// &&	and	true && false is false

// let cake = true;
// let hunger = true;
// let birthday = "May 13th";
// if(cake){
// // first, we see if there is cake... There is
//     if(hunger=== ture && birthday === "May 13th"){
//     // then we check if both hunger is true, 
//     // and birthday is set to a matching string
//         eat_cake();
//     }else{
//         dont_eat_cake();
//         //  while the cake exists (duh) we were either not hingry
//         //  or it wasn't our birthday. The cake is a lie.
//     }
// }
// // // if there is no cake, then none of the above statements will 
// // even evaluate. This is because 'if(cake)' equalled to false!


// let diet = true;
// if(!diet){
// // if NOT diet
//     eat_cake();
// }


// let x = [];
// x[15] = 'Hello World!'
// console.log(x);



// let x = [1, 2, 3];
// if(x.constructor === Array){
//     console.log('Yes x is an array!');
// }else{
//     console.log('No x is not an array!');
// }


// var text;
// var fruits = document.getElementById("myInput").value;

// switch(fruits) {
//     case "Banana":
//         text = "Banana is good!";
//         break;
//     case "Orange":
//         text = "I am not a fan of orange.";
//         break;
//     case "Apple":
//         text = "How you like them apples?";
//         break;
//     default:
//         text = "I have never heard of that fruit...";
// }


// for(let i = 0; i < 7; i++){
//     console.log('hello');
// };

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||Code	    Description                                                                                                      ||
// ||let i = 0;	This initializes our index and sets it as a particular numerical value when our loop first begins. It does not   ||   // ||           continue to reset back to 0 at every iteration.                                                                  ||
// ||i < 7;	    This is the condition that our loop must satisfy in order to keep running. As long as this statement is true, our||
// ||           for loop runs!                                                                                                   ||      ||                                                                                                                            ||
// ||i++	    This is our incrementer. This particular incrementer adds 1 to our index i after the body of the loop runs. Some ||      ||           for loops start with a high index and decrement downward. The key piece here is we're moving closer and closer to||      ||           breaking the condition.                                                                                          ||      ||                                                                                                                            ||
// ||{ console.log('hello'); };	Finally, this is the body of our for loop. Anything between the curly brackets { } is considered ||
// ||                           the body of the loop, and will continue to run as long as the condition continues to be true. In ||      ||                           the above example, the body of ourfor loop was console.log('hello');.                            ||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// let total = 0;
// for(let i = 10; i > 0; i--){
//     total = total + i;
// // console.log(i);
// // console.log(total);
// }
// console.log(total);


// let num = 1;
// while (num < 6){
//     console.log("I'm counting! The number is " + num);
//     num = num + 1;
// }
// console.log("We are done. Goodbye world!");
// // while
// //     A while loop is great for when we don't know how many times we want to repeat our code. You can think of a while loop as the middle ground between a for loop and an if statement. It is a single condition, and while it remains true, the body of the loop will keep running.


// let num = 6;
// do {
//     console.log("I'm counting! The number is " + num);
//     num = num + 1;
// }
// while (num < 6);
// console.log("We are done. Goodbye world!");
// // do/while
// // Very similar to the while loop, a do/while loop iterates before the condition is checked.


// let colors = ['blue', 'green', 'red', 'chartreuse'];
// // a simple array of strings
// for(let i = 0; i < colors.length; i++){
// // by using the length of our colors array, we can make the condition 
// // of our for loop match the number of elements in the array!
//     console.log(colors[i]);
//     // now we can use i to log the elements of the color array induvidually
// };


