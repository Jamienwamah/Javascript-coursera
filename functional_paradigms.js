// purpose of program is to perform currency conversions

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate
}

// To update the value of currency two you need to call the function and pass it an argument
currencyTwo = convertCurrency(currencyOne, exchangeRate)
// recall that when the currency is evoked, it will return a value which will be assigned to the variable currencyTwo
//console log the value of currency two to test your code
console.log(currencyTwo);