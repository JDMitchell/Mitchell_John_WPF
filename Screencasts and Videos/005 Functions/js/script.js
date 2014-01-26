//////Video - Introduction to Functions

/*
Video review
*/

//////Video - Different Types of Functions
/*
explained what type of functions we will deal with
*/

//////Video - Basic Funtion Structure

// - function structure
/* 
function functionName(){
	//code to be run
}
*/
// - Example Functions
/*
function outputMsg(){
	console.log("hello Word")
}

function calcArea(){
	var width = 20
	var height = 30
	var area = width * height
	console.log(area)
}
*/

//////Video - Function Invocation
/*
function outputMsg(){
	console.log("hello Word")
}

function calcArea(){
	var width = 20
	var height = 30
	var area = width * height
	console.log(area)
}

calcArea(); //calls the function
*/

//////Video - Variable Scope
/*
Learned the difference between gloabl and loca variables
*/


//////Video - Arguments and Parameters
/*
function dogYears(age){
	
	var dogYears = age * 7
	console.log("Sparky is " + dogYears + " years old.")
}
dogYears(4);
dogYears(5);
dogYears(6);
*/

//////Video - Returning Values
/*
var total = calcArea(30, 20)

function calcArea(){
	var area = width * height
	return area;	// function providing info

}
console.log(total)
*/

//////Video - Functions vs Procedures
/*
explains the all the difference the return section makes when creating functions or procedures
*/

//////Video - Anonymous Functions
var calcArea = function(width, height){	//Anonymous functions must be declared before the call
	var area = width * height
	return area;
}

var a = calcArea(20, 30)	// invocation
console.log(a)
































