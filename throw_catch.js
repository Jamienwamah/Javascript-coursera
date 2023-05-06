// The benefit of using try catch is that even if Javascript throws an error, it will not stop the program from executing

try {
  console.log(c + d);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("The error was saved in the error log");
}
console.log("Ok now it works");

//console.log(c + d);
// console.log("This line is never reached");

/* To throw errors on purpose
 * use the throw keyword
 * new keyword
 *error constructor
 * pair of parentheses at the end
 */

//throw new ReferenceError();
