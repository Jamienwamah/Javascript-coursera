/* function myFunc() {
    console.log("Hey! this is javascript");

}
myFunc();*/

/*function addTwoNum() {
    var a = 10
    var b = 20
    var c = a + b
    console.log(c);
}
addTwoNum(); */

// to make functions more flexible

/*function addTwoNum(a,b) { // the variables in parentheses are called the function parameter
    var c = a + b
    console.log(c);
}

addTwoNum(10,20); // the values in the parentheses are called argument
addTwoNum(50,10);*/

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
