/*
John Mitchell
Functions Worksheet
January 26, 2014
*/

//////Circumference

var radius = prompt("what is the radius of your circle?")	//gathers radius from user

var circumference = circumference(radius)	//creates variable to call from function

function circumference(radius){	//Function
	circumference = 2*3.14*radius	//calculates the circumference
	return circumference;	//returns it to global area
}
console.log("The circumference of the circle is " +circumference)	//prints to console


//////Stung!

var victimWeight = prompt("How much do you weigh?\nPlease put in pounds:")	//gathers the victims weight
var stingsToKill = deathStingTotal(stingsToKill)	//sets deathsting total to a global variable
function deathStingTotal(victimWeight){		//sends parameter to function
	var stingsPerPound = 8.666666667;	//constant variable
	stingsToKill = victimWeight*stingsPerPound	//calculates how many stings it takes to kill
	stingsToKill = stingsToKill.toFixed(2)
	return stingsToKill;
}

deathStingTotal(victimWeight); //calls function
console.log("It takes " + stingsToKill + " bee stings to kill this animal.");	// prints to the console.

