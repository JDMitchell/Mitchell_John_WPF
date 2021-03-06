//John Mitchell
//January 14, 2014
//Expressions_Personal


//This is the personal JS file.
//This script will calculate how many tea bags I will need to make a week worths of tea.
//It will request the average amount in gallons you drink a day.
//It will also request specifics on how you make tea.
//This only works if you make tea by the gallon.

/*
ALL CALCULATIONS ARE BASED UPON MY WEEKLY AND DAILY CONSUMPTION OF TEA
*/


alert("It takes a gallon of water to make a gallon of tea.");	//Informs the user how much water is needed to make a gallon of tea.
//All initial variables are stated below.
var gallonsPerDay = prompt("About how many gallons of Tea do you drink a day?\nPlease use 0.50 for half a gallon and 0.25 for a quarter of a gallon."); 	//This prompt requests the amount of tea consumed in gallons with decimal format
var amountOfTeaBags = prompt("How many tea bags do you use to make a gallon of tea?");	//This prompt requests how many tea bags the user needs to make a gallon.
var teaBagType = prompt("What type of tea bags do you use?");	//This requests the user to manually enter the type of tea bages he/she uses.
var cupsOfSugar = prompt("How many cups of sugar do you use to make your gallon of tea?\nUse 0.50 for half a cup and 0.25 for quarter cup.");	//Collects the amount of sugar used to make each gallon of tea.
var desiredGallonsPerWeek = prompt("How many gallons of tea would you like to have per week.")	//This collects the desired amount of gallons a week to tell you how many gallons of water, tea bags, and cups of sugar needed.
var gallonsOfWater = desiredGallonsPerWeek; //Stores the amount of water need to make desired gallons of tea.


//All console output are below
console.log("You drink about " + gallonsPerDay + " gallons per day.");			//Prints collected information from prompt 1 to the console
console.log("You use " + amountOfTeaBags + " tea bags to make a gallon of tea.");				//Prints collected information from prompt 2 to the console
console.log("You use " + teaBagType + " tea bags to make your tea.");			//Prints collected information from prompt 3 to the console
console.log("It takes you " + cupsOfSugar + " cups of sugar to make a gallon of tea.");			//Prints collected information from prompt 4 to the console
console.log("You would like to have " + desiredGallonsPerWeek + " gallons of tea made a week.");	//Prints collected information from prompt 5 to the console


//Below are the calculations to make the desired amount of tea.
var teaBagsNeeded = desiredGallonsPerWeek * amountOfTeaBags;	//This equation will calculate the number of tea bags needed to make the desired gallons of tea
var cupsOfSugarNeeded = desiredGallonsPerWeek * cupsOfSugar;	//This equation will calculate the cups of sugar needed to make the desired gallons of tea

//Console output for needed amounts below.
console.log("You will need " + teaBagsNeeded + " tea bags to make " + desiredGallonsPerWeek + " gallons of tea.");		//Displays how many tea bags are needed for specified amount of gallons.
console.log("You will need " + cupsOfSugarNeeded + " cups of sugar to make " + desiredGallonsPerWeek + " gallons of tea.");		//Displays how many cups of sugar are needed for the specified amount of gallons.
console.log("You will also need " + gallonsOfWater + " gallons of water to make " + desiredGallonsPerWeek + " gallons of tea.")		//Displays how many gallons of water are needed for the specified amount of gallons.

//Alert and console output for final statement.
alert("You need " + teaBagsNeeded + " teabags, " + cupsOfSugarNeeded + " cups of sugar and " + gallonsOfWater + " gallons of water to make " + desiredGallonsPerWeek + " gallons of tea.")		//This displays an alert window that tells the user what is needed on one line.
console.log("You need " + teaBagsNeeded + " teabags, " + cupsOfSugarNeeded + " cups of sugar and " + gallonsOfWater + " gallons of water to make " + desiredGallonsPerWeek + " gallons of tea.")	//Displays the same information in the lane above in the console