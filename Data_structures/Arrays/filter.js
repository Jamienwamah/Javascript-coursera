/* Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

Here's an example:
*/

const number = [0,10,20,30,40,50];
number.filter( function(num) {
    return num > 20;
})