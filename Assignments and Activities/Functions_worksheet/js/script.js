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
console.log(circumference)	//prints to console

