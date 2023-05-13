/* A set is a collection of unique values.

To build a new set, you can use the Set constructor:
*/
//new Set();

/*
The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.
*/
/*const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
*/

function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);

