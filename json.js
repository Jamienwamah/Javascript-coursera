/*const jsonStr = `{"greeting": "Hello"}`
JSON.parse(jsonStr)

// assign a variable name so that json is stored as a regular javascript object
const aPlainObj = JSON.parse(jsonStr)
// json can easily be manipulated
aPlainObj.greeting = 'hi'
// To confirm you inspect
aPlainObj
*/

/*function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);
*/


var result = 0;
var i = 0;
var limit = 3;
while(i < limit) {
    result += 2;
    i++;
}
console.log(result);