/*Assigning a value to a variable and output to a console*/
var person;
var person = "John";
//To inspect what is in the variable we do
person;
// it outputs to the console
console.log("Hi", person);

var greeting = "Hello";
console.log(greeting, person);

//Declaring a new variable
var petDog = "Rex";
var petCat = "Pepper";

//output to the console
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is " + petCat);

//Declaring a new variable
var dogSound = "Woof";
var catSound = "Purr";

//Output to console
console.log(petDog, "Says", dogSound);
console.log(petCat, "Says", catSound);

//Reassigning value stored in catSound
var catSound = "meow";
console.log(petCat, "now says", catSound);
