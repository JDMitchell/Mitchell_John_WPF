/*
John Mitchell
Conditionals - Personal
January 23, 2014
*/


alert("This will allow you to see if you have a car has your needed MPG rating for your trip.");	//Alerts the user of the purpose of this program
var car = prompt("Which vehicle will you be taking on this trip?")	//Asks car they will be taking.
var budgetForGas = prompt("How much do you have available for expindetures in gas?\nYou can use exact demical if you would like.")	//Asks the user to input thier gas budget.
var mpg = prompt("What is your rated Mile Per Gallon(mpg)?")	//Asks user for the MPG of the vehicle being taken
var milesToDestination = prompt("How many miles is it to your destination?\n(Please use whole numbers.)")	//Request user to enter the destination in miles being travel
var avgGasPrice = prompt("Please enter the average price of gas expected for your trip.\nExample: 3.79")	//REquest user to enter the expected avg price of gas.


//Calculations
var gasPurchased = budgetForGas * avgGasPrice;	//calculates the maximum amount of gas in gallons that can be purchased


//var  = () ? "You can make your trip!" : "You need more money for gas!";


//Console output to make sure variables are storing correctly
//console.log(car);
//console.log(budgetForGas);
//console.log(mpg);
console.log(milesToDestination);
console.log(avgGasPrice);
//console.log(gasPurchased);


//Concatenated strings for explinations
console.log("Your " + car + " gets an average of " + mpg + " miles per gallon.");
console.log("You can but a total of " + gasPurchased + " with $" + budgetForGas + ".");