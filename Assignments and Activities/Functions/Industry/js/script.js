/*
John Mitchell
Functions - Industry
January 27, 2014
*/


var computersForTheWeek = prompt("How many computers do you need to work on for the week to meet scedule?")	//Gathers quota for the week
var daysWorking = prompt("How many days are you working this week?\nEnter 1-7.")	//Request how many days he is scheduled this week
var lastDay = prompt("Is today your last day of work for the week?(Y/N)")	//Checks to see if today is his last day of the work week

console.log(computersForTheWeek)
console.log(daysWorking)
console.log(lastDay)

var dailyAVG = computersForTheWeek / daysWorking
console.log("You need to do " + dailyAVG + " computers a day.")

if(lastDay === 'Y' || lastDay === 'y'){
	console.log("Get to work!")
}else{
	console.log("You still have time.")
}