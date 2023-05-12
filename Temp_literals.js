//let multiline = "No multiline in ES5"
//console.log("Did you know: " + multiline);

/* let multiline = 
`Using the multiline
strings are possible 
in ES6`
console.log(multiline);
// Note backticks converts an Es5 single line to an ES6 multiline which is known as template literals
*/

// ES6 variable interpolation

let first = `We said, "Don't you know? ES6. It's got some great features"`;
let second = `"Would't you want to learn more". he asked`;

console.log(`${first} and i got curious ${second}`);