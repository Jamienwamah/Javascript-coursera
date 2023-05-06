/* var result = 50;
var result2 = 20;
if (result > 40 && result2 == 20) {
console.log("congratulations you passed the test") // if condition is met, it returns true
} else {
console.log("Sorry come back next year for the test") // else it returns false
}


var food = "hot";
var food2 = "cold"
if (food == "hot") {
    console.log("Too hot")
} else if (food2 == "cold") {
    console.log("Too cold")
} else {
    console.log("Just right for me")
} */

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")