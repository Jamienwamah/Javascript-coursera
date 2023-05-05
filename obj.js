/* Building an object in Javascript
* first you declare a variable 
* add dot operator to each trait after the variable name
*/

var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;


var assistantManager = {
    movement: 3,
    socialSkills: 20,
    streetSmart: 30,
    health: 30,
}
console.log(storeManager, assistantManager);