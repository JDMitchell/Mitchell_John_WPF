//John Mitchell
//January 14, 2014
//Expressions_Personal


//This is the wacky JS file.

/*
This will be based on the happenings that occur everyday in the game EVE Online.
I play this game for 8+ hours a day in game for over two years.
This is the basic happenings of extractions from the wallet in game based on market purchasing of minerals.
*/

alert("The currency of EVE Online is known as Isk.")	//Informs the user what the currency is know as.

//Declared Variables
var iskAmount = prompt("How much Isk is currently in your wallet?\nDo not worry about entering the appropriate commas.");	//This line requests the user put in the amount of isk that is in his in game wallet
console.log(iskAmount); //Display in console what the user entered.

var minerals = ["Empty", "Tritanium", "Pyerite", "Isogen", "Mexallon", "Megacyte", "Morphite", "Nocxium", "Zydrine"];	//A list of the building materials in EVE Online.  SET INDEX 0 TO EMPTY FOR SELECTION PURPOSES
console.log(minerals);	//Displays the array of minerals

var mineralChoice = prompt("These are the minerals available(Use the number in () for your choice): " + minerals[1] +  "(1), " + minerals[2] + "(2), " + minerals[3] + "(3), " + minerals[4] + "(4), " + minerals[5] + "(5), " + minerals[6] + "(6), " + minerals[7] + "(7), " + minerals[8] + "(8).");	//displays the list of minerals available and requests you to choose one.
console.log(minerals[mineralChoice]);		//Displays the mineral selected.

var unitCount = prompt("How many units of " + minerals[mineralChoice] + " would you like to purchase?")		//Requests the amount of the item the person would like to purchase.
console.log(unitCount); 	//Displays the input for units desired.



//Constant prices - Extracted from Eve-Central.com
var tritanium = 4.78;
var pyerite = 12.51;
var isogen = 127.69;
var mexallon = 46.52;
var megacyte = 1560.31;
var morphite = 7200.03;
var nocxium = 704.37;
var zydrine = 738.06;



//Equations
if (mineralChoice = 1)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * tritanium;	//creates total cost to purchase Tritanium
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 2)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * pyerite;	//creates total cost to purchase Pyerite
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 3)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * isogen;	//creates total cost to purchase Isogen
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 4)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * mexallon;	//creates total cost to purchase Mexallon
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 5)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * megacyte;	//creates total cost to purchase Megacyte
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 6)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * morphite;	//creates total cost to purchase Morphite
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 7)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * nocxium;	//creates total cost to purchase Nocxium
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}
if (mineralChoice = 8)		//Function to automate which price to use by choice of mineral.
{
	cost = unitCount * zydrine;	//creates total cost to purchase Zydrine
	iskAmount -= cost;		//Tells you how much isk you will have left or, in the case of a negative, how much isk you need.
}













console.log(cost);
console.log(iskAmount);



/*
//These are for the selling of items(possible future use).
var salesTax = 0.015;
var brokersFee = 0.099;
*/







