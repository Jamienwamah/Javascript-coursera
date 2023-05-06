/* 
** write a program that calculates the total cost of buying a pair of shoes
** The code needs to calculate the total price
** which is the shoes multiplied by the tax amount.
*/
/*
** To code the solution
** you decide that you need  variable 
** the variable will store the shoes, tax and total price
** you also need a function, the function will be called total price 
** the function declared will be called to perform the calculation of multiplying the shoes by the tax.
** output the result.
*/

// create an object and store all data in it

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("The total price is: ", calculation);
    }
}
purchase1.totalPrice();