var place = "fourth"
if (place == "first") {
    console.log("gold")
} else if (place == "second") {
    console.log("silver")
} else if (place == "third") {
    console.log("bronze")
} else {
    console.log("Bye!")
}

var light = "green"
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Don't drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

var age = 90;
if (age > 65 || age == 65) {
console.log("you get your income from pension") 
} else if (age < 65 && age > 18 || age == 18) {
    console.log("Each month you get a salary")
} else if ( age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of age variable is not numerical")
}