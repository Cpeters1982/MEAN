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


// let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
// for(let i = 0; i < names.length; i++){
//     if(names[i] === 'Kadie'){
//         console.log('Kadie is in our array!');
//         break;
//     }
// }
// console.log('We finished looping!');
// // Break
// // Sometimes we need to break out of a loop early. We can use the break keyword to do this.


// let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
// for(let i = 0; i < names.length; i++){
//     if(names[i] === 'Steve'){ continue };
//     console.log(names[i]);
// };
// // Continue
// // We can use the keyword continue to force our loop onto the next iteration. The below example will show all the names in our array except for 'Steve'.


// |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|
// |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|
// |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

// Functions
// Introduction
// No other programming construct is quite as important for JavaScript as the function. A function is a block of code that can be saved for later use. Functions are given inputs and return values. We can think of functions as factories, we put in raw materials, a set of instructions are run, and we are returned a final result. As developers, we don't want to repeat ourselves. Much like how for-loops are used for repeating a set of simple instructions, functions allow us to reuse code in a more complex and organized way.

// Declaring
// Here is a basic function:

// function sayName(name){
//     console.log("Hello my name is " + name);
// };
// sayName('Morty');

// // This is a standalone function. It starts with the keyword function and is followed by the unique identifier we give it. In this instance, our identifier is sayName. Finally, we have the parameter name. This is our input. To say it plainly, the function sayName expects us to pass it a name.

// // Invoking
// // By giving our function an identifier, we can invoke it other places of our code by typing the identifier followed by opening and closing parenthesis. How many invocations do you see in the below example?

// function sayNamePreminum(first_name, last_name){
//     console.log("Hello my name is " + first_name + " " + last_name);
// };
// sayNamePreminum("Stewart", "Dent");
// sayNamePreminum("Rocky", "Balboa");

// // There are actually three separate invocations there. We call sayNamePreminum twice, but did you also notice that console.log is also a function invocation? Any time we see opening and closing parentheses ( ) without the function keyword, you should be thinking invocation!

// // Returns
// // Unless we explicitly state otherwise, a function will return undefined by default. We can check this by looking at one of our previous examples.

// function sayName(name){
//     console.log("Hello my name is " + name);
// };
// let x = sayName('Morty');
// console.log(x);

// // In this example, x logs undefined. Let's change it up a little bit:

// function sayName(name){
//     return "Hello my name is " + name;
// };
// let message = sayName("Cinderella");
// console.log(message);

// // A return will end the function. If we write any more instructions after a return statement, they will not run. The key takeaway is that a function call is equal to whatever that function returns. Let's get one last example of that in practice:

// function ten(){
//     return 10;
// };
// let twenty = ten() + ten();
// console.log(twenty);

// // We can clearly see that the function ten() is directly equal to its return.

// // A Function By Any Other Name
// // JavaScript functions can vary dramatically in their uses and syntax. All of the below examples have the same end result, but the differences are still very important. Make sure you can recognize a function by how it's written.

// // -- standalone function ---
// function sayName1(name){
//     console.log("Hello my name is " + name);
// };
// // -- anonymous function, stored in a variable --
// let sayName2 = function(name){
//     console.log("Hello my name is " + name);
// };
// // -- standalone function, stored in a variable --
// let sayName3 = function sayName3(name){
//     console.log("Hello my name is " + name);
// };

// // Another type of function in JavaScript is an immediately invoked function. This is a function where the declaration immediately calls itself. While their purpose might not be clear at first, we will return to immediately invoked functions when we talk about scope. Check out the example below:

// (function(){
//     console.log("Hello world!");
// })();

// // ES6 - Arrow Functions
// // Probably the most popular feature of ES6, arrow functions are a concise way of writing anonymous functions. While they might appear to be just 'syntactic sugar', or features that make the language 'sweeter', arrow functions have some specific scoping rules that will be made clear as we move forward.

// // arrow functions are anonymous functions without the 'function' keyword.
// let sayName4 = (name) => { console.log("Hello my name is " + name) };
// sayName4("Dolores");


// function makeMoreExciting(string) {
//     return string + '!!!!';
// }
// let sentence = 'fuck you';
// console.log(makeMoreExciting(sentence));
// function yellIt(string) {
//     string = string.toUpperCase();
//     return makeMoreExciting(string);
// }
// console.log(yellIt('i fear no human'));

// var moodLog = [
// {
//     date: "10/20/2012",
//     mood: "catnipped"
// },
// {
//     date: "10/21/2012",
//     mood: "nonplussed"
// },
// {
//     date: "10/22/2012",
//     mood: "purring"
// }
// ];

// // ordered from least to most favorite
// var favorites = {
//     treats: ["bird sighting", "belly rub", "catnip"],
//     napSpots: ["couch", "planter box", "human face"]
// };


// var name = prompt('What is your name?');
// alert('Hello, ' + name);


// function personConstructor(name, age){
//     // an object literal that will be returned
//     var person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called 'methods'.
//     // this is our first method, greet
//     person.greet = function(){
//         alert("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     // finally, this function must return an instance
//     return person;
// }
// // create the 'steve' instance, run greet
// var steve = personConstructor("Steve", 27);
// steve.greet();
// // create the 'anika' instance, run greet. note that it is different.
// var anika = personConstructor("Anika", 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// var emily = personConstructor("Emily", 22);
// emily.greet = function(){
//     alert("I am the greatest, ever!");
// };
// emily.greet();


// function personContructor(name, age){
//     // an object literal that can be returned
//     var person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called methods.
//     // this is our first method, 'greet'
//     person.greet = function(){
//         alert('Hello, my name is ' + person.name + ' and I am ' + person.age + ' years old!');
//     }
//     // finally, this function must return an instance
//     return person;
// }
// // crate the 'steve' instance, run 'greet'
// var steve = personContructor('Steve', 27);
// steve.greet();
// // create the 'anika' instance, run greet.
// var anika = personContructor('Anika', 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// var emily = personContructor('Emily', 26);
// emily.greet = function(){
//     alert('I am the greatest ever!');
// };
// emily.greet();


// function personConstructor(name, age, hobby){
//     var person = {};
//     person.name = name;
//     person.age = age;
//     person.hobby = hobby;
//     person.greet = function(){
//         alert('Hello, I am ' + person.name + ', I am ' + person.age + ' years old and I love to ' + person.hobby + ' in my spare time.');
//     }
//     person.dismiss = function(){
//         alert('Bye ' + person.name + ', nice knowing you.')
//     }
//     return person;
// }
// var chris = personConstructor('Chris', 34, "play video games");
// chris.greet();
// chris.dismiss();

// var jack = personConstructor('Jack', 23, "eat sushi");
// jack.greet();


// function personConstructor(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
//     }
// }
// var emily = new personConstructor('Emily', 22);
// // using this and new, we can now refer to the 'name' attribute of our instance!
// emily.greet = function(){
//     console.log('My name is ' + this.name + ' and I am the coolest ever!');
// }


// console.log(this)


// function Person(name, age){
//     var privateVariable = "This variable is private";
//     var privateMethod = function(){
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
//     }
// }
// var eliza = new Person('Eliza', 48);
// console.log(eliza.privateVariable);
// //undefined!

//Do this instead

// function Person(name, age){
//     // create a private variable that stores a refference to the new object we create
//     var self = this;
//     var privateVariable = 'This variable is private';
//     var privateMethod = function(){
//         console.log('this is a private method for ' + self.name);
//         console.log(self);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!')
//         // we can access our attributes within the constructor!
//         console.log('Also, my privateVariable says: ' + privateVariable)
//         // we can access our methods within the constrcutor!
//         privateMethod();
//     }
// }
// var joe = new Person('Joe', 23);
// joe.greet();


// function Person(name, age){
//     // create a private variable that stores a reference to the new object we create
//     var self = this;
//     var privateVariable = "This variable is private";
//     var privateMethod = function(){
//         console.log("this is a private method for " + self.name);
//         console.log(self);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod();
//     }
// }
// var joe = new Person("Joe", 23);
// joe.greet();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// var myCatFriends = ['bill', 'tabby', 'ceilling'];
// myCatFriends.push('super hip cat');
// // console.log(myCatFriends[0], myCatFriends[1]. myCatFriends[3]);
// console.log(myCatFriends[3]);



// var MyObjConstructor = function(name){
//     var myPrivateVar = 'Hello'; // just to show that it is hard to see this private var easily
//     this.name = name; // but you can see the name!
//     this.method = function(){
//         console.log('I am a method');
//     };
// }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);

// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty); // anotherProperty!
// console.log(obj1.newProperty); // newProperty!
// // What about obj2?
// console.log(obj2.newProperty); // undefined
// console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
// var MyObjConstructor = function(name){
//     var myPrivateVar = 'Hello'; // just to show that it is hard to see this private var easily
//     this.name = name; // but you can see the name!
//     this.method = function(){
//         console.log('I am a method');
//     };
// }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);

// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty); // anotherProperty!
// console.log(obj1.newProperty); // newProperty!
// // What about obj2?
// console.log(obj2.newProperty); // undefined
// console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!


// function Cat( cat_name ) {
//     var name = cat_name;
//     this.getName = function() {
//         return name;
//     };
// }
// // adding a method to the cat prototype
// Cat.prototype.sayHi = function(){
//     console.log('meow');
// };
// // adding properties
// Cat.prototype.numLegs = 4;
// var muffin = new Cat('Muffin');
// var biscuit = new Cat('Biscuit');
// console.log(muffin, biscuit)
// // we access prototype properties the same we would access 'own' properties
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);
// // poor mutant cats: muffin.__proto__.numLegs ++;
// // doing this to muffin will mess up all the cats!


// Create a new class called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja
// Example Outputs
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

function Ninja(name, health, speed, strength){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        alert(`Name: ${this.name}`);    
    }
    this.drinkSake = function(){
        this.health = this.health + 10;
        // alert('I drank sake, my health is now at ' + this.health + '!')
    }
    this.showStats = function(){
        alert(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
    }
}
var joe = new Ninja('Joe')
joe.drinkSake();
joe.sayName();
joe.showStats();
