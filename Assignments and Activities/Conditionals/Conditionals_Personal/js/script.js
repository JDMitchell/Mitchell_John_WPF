/*
John Mitchell
Conditionals - Personal
January 23, 2014
*/

/*
This is based on the fact that I live at least an hour from civilation currently and do constant travelling whether for entertainment or work related purposes
*/


alert("This will allow you to see if you have a car has your needed MPG rating for your trip.");	//Alerts the user of the purpose of this program
var car = prompt("Which vehicle will you be taking on this trip?")	//Asks car they will be taking.
var budgetForGas = prompt("How much do you have available for expindetures in gas?\nYou can use exact demical if you would like.")	//Asks the user to input thier gas budget.
var mpg = prompt("What is your rated Mile Per Gallon(mpg)?")	//Asks user for the MPG of the vehicle being taken
var milesToDestination = prompt("How many miles is it to your destination?\n(Please use whole numbers.)")	//Request user to enter the destination in miles being travel
var avgGasPrice = prompt("Please enter the average price of gas expected for your trip.\nExample: 3.79")	//REquest user to enter the expected avg price of gas.


//Calculations
var gasPurchased = budgetForGas / avgGasPrice;	//calculates the maximum amount of gas in gallons that can be purchased
var distanceAbleToTravel = mpg * gasPurchased;	//calculates the distance that can be travelled

var ableToGo = (distanceAbleToTravel >= milesToDestination) ? "You can make your trip!" : "You need more money for gas!"; //Ternary decision maker.

//rounds following variables to 2 decimal places
gasPurchased = gasPurchased.toFixed(2);	//Rounds gaspurchased
distanceAbleToTravel = distanceAbleToTravel.toFixed(2);	//Rounds distance travalable.

//Console output to make sure variables are storing correctly
//console.log(car);
//console.log(budgetForGas);
//console.log(mpg);
//console.log(milesToDestination);
//console.log(avgGasPrice);
//console.log(gasPurchased);


//Concatenated strings for explinations
console.log("Your " + car + " gets an average of " + mpg + " miles per gallon.");
console.log("The expected average gas price is $" + avgGasPrice + ".")
console.log("You can buy a total of " + gasPurchased + " gallons of gas with $" + budgetForGas + ".");
console.log("You can travel a total of " + distanceAbleToTravel + " miles with your budget and mpg.");
console.log("Your trip is a total of " + milesToDestination + " miles.");

console.log(ableToGo); //Ternary output.