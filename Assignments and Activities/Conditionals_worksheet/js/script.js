/*
John Mitchell
Expressional Worksheet
01-21-2014
*/


//Stuff your Face I
var competitorWeight = 249;
if(competitorWeight >= 250){
	console.log("The competitor qualifies for the heavyweight division.")
}else{
	console.log("The competitor needs to gain some weight!")
}


//Celcius to Fahrenheit converter
var degrees = prompt("Please enter the number of degrees you need covertered: \nThe next promt with gather the temperture united being coverted to.");
var unit = prompt("Please enter the unit of temperature you would like to covert to. C/F")
var convertedDegrees;
if(unit === "C" || unit === "c"){
	convertedDegrees = 5/9*(Number(degrees)-32)
	console.log("The temperature is " + convertedDegrees + " degrees Celcius.")
}else if(unit === "F" || unit === "f"){
	convertedDegrees = 9/5*degrees+32 //has decimal precision not rounded
	console.log("the temperature is " + convertedDegrees + " degrees Fahrenheit.")
}else{
	console.log("Please choose a 'f' or 'c.'")
}