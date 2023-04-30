//Number data_type
//a = 123;
//console.log(a);
//b = 10 ** 3;
//console.log(b);

//modulus: It checks how many times it can fit one number into the other and returns a remainder
//c = 10 % 3;
//console.log(c);
//using parenthesis you can control the order of calculation.
//d = 2 * (4 + 6);
//console.log(d);

//strings: characters in js enclosed in single or double quotes
//a = 'hello'
//b = " James\n"
//c = "how are you bot\n"
//d = "im doing great"
//console.log(a + b + c + d + b);

//Boolean datatype checks if a condition is true or false
//a = 1 != 2
//console.log(a);
//assigning a value of 100 to the score variable 
//var score = 100
//console.log(score);

/*var currentTime = 10
console.log(currentTime > 9 && currentTime < 17);
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
*/

var timeRemaining = 0
var energy = 10
console.log("Game over:", timeRemaining == 0 || energy == 0)

var num1 = 2
var num2 = 5
var test1 = num1 % 2 // executing returns a number
var test2 = num2 % 2 // executing returns a number
var result1 = test1 == 0
var result2 = test2 == 0
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number", result2)

//concatenating of strings and numbers
var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d) // Outputs Now in 3D!

var counter = 0
counter += 5 // increasing the value of the counter by 5 seconds
counter += 3 // incrementing the value of the counter by 3 seconds
console.log(counter) // 8