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

//Grade calculator
var grade = prompt("Please enter your grade percentage.\n32% would be 32.")
var letter
console.log(grade)
if(grade >= 95){
	letter = "A+"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade >= 90 && grade <= 94){
	letter = "A"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade >= 85 && grade <= 89){
	letter = "B+"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade >= 80 && grade <= 84){
	letter = "B"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade >= 76 && grade <= 79){
	letter = "C+"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade >= 73 && grade <= 75){
	letter = "C"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade >= 70 && grade <= 72){
	letter = "D"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}
if(grade <= 69){
	letter = "F"
	console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!")
}

/*
A+ 	95-100	4.0
A 	90-94	3.5
B+ 	85-89	3.0
B 	80-84	2.5
C+ 	76-79	2.0
C 	73-75	1.5
D 	70-72	1.0
F 	0-69 	0.0
*/