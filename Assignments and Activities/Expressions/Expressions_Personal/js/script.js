//John Mitchell
//January 14, 2014
//Expressions_Personal


//This is the personal JS file.
//This script will calculate how many tea bags I will need to make a week worths of tea.
//It will request the average amount in gallons you drink a day.
//It will also request specifics on how you make tea.
//This only works if you make tea by the gallon.

var gallonsPerDay = prompt("About how many gallons of Tea do you drink a day?\nPlease use 0.5 for half a gallon and 0.25 for a quarter of a gallon."); 	//This prompt requests the amount of tea consumed in gallons with decimal format
var teaBags = prompt("How many tea bags do you use to make a gallon of tea?");	//This prompt requests how many tea bags the user needs to make a gallon.
var teaBagType = prompt("What type of tea bags do you use?");	//This requests the user to manually enter the type of tea bages he/she uses.
var desiredGallonsPerWeek = prompt("How many gallons of tea would you like to have per week.")	//This collects the desired amount of gallons a week to tell you how many gallons of water, tea bags, and cups of sugar needed.



console.log(gallonsPerDay);			//Prints collected information from prompt 1 to the console
console.log(teaBags);				//Prints collected information from prompt 2 to the console
console.log(teaBagType);			//Prints collected information from prompt 3 to the console
console.log(desiredGallonsPerWeek)	//Prints collected information from prompt 4 to the console