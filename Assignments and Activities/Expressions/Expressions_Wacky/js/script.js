//John Mitchell
//January 14, 2014
//Expressions_Personal


//This is the wacky JS file.

/*
This will be based on the happenings that occur everyday in the game EVE Online.
I play this game for 8+ hours a day in game for over two years.
This is the basic happens of extractions from the wallet in game and the market.
*/

//Declared Variables
var iskAmount = prompt("How much Isk is currently in your wallet?\nDo not worry about entering the appropriate commas.");	//This line requests the user put in the amount of isk that is in his in game wallet
var minerals = ["Empty", "Tritanium", "Pyerite", "Isogen", "Mexallon", "Megacyte", "Morphite", "Nocxium", "Zydrine"];	//A list of the building materials in EVE Online.  SET INDEX 0 TO EMPTY FOR SELECTION PURPOSES
var mineralChoice = prompt("These are the minerals available(Use the number in () for your choice): " + minerals[1] +  "(1), " + minerals[2] + "(2), " + minerals[3] + "(3), " + minerals[4] + "(4), " + minerals[5] + "(5), " + minerals[6] + "(6), " + minerals[7] + "(7), " + minerals[8] + "(8).");	//displays the list of minerals available and requests you to choose one.

//Constant prices
var tritanium = 4.78;
var pyerite = 12.51;
var isogen = 127.69;
var mexallon = 46.52;
var megacyte = 1560.31;
var morphite = 7200.03;
var nocxium = 704.37;
var zydrine = 738.06;

var salesTax = 0.015;
var brokersFee = 0.099;





//Console Outputs from User Inputs
console.log(iskAmount); //Display in console what the user entered.
console.log(minerals);	//Displays the array of minerals
console.log(minerals[mineralChoice]);		//Displays the mineral selected.




