var place = "fourth"

switch(place) {
    case "first":
        console.log("gold")
        break;
    case "second":
        console.log("silver")
        break;
    case "third":
        console.log("bronze")
        break;
    default:
        console.log("Bye!")
    
}

//converting the previous if-else example with switch-case
var light = "green"
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }


 var day = "Sunday"

switch(day) {
    case "Monday":
    console.log("We go to school")
    break;
    case "Tuesday":
    console.log("We gp to school")
    break;
    case "Wednesday":
    console.log("Could be a holiday")
    break;
    case "Friday":
    console.log("oops! I missed a day")
    break;
    default:
        console.log("Nothing Javascript")
        break;

}