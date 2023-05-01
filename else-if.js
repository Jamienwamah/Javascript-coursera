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