/*
John Mitchell
Functions - Industry
January 27, 2014
*/


var computersForTheWeek = prompt("How many computers do you need to work on for the week to meet scedule?")	//Gathers quota for the week
var daysWorking = prompt("How many days are you scheduled to work this week?\nEnter 1-7.")	//Request how many days he is scheduled this week
var lastDay = prompt("Is today your last day of work for the week?(Y/N)")	//Checks to see if today is his last day of the work week
var computersFinished = prompt("How many computers have you completed?")	//input for completed work


//console.log(computersForTheWeek)
//console.log(daysWorking)
//console.log(lastDay)

var dailyAVG = computersForTheWeek / daysWorking	//calculates daily avg needed to be on schedule
var yourAVG = computersFinished

console.log("You need to do " + dailyAVG + " computers a day.")

function checkDayAndSchedule(){	//fucntion creation
	if(lastDay === 'Y' || lastDay === 'y'){	//chooses below section if today is last day.
		var onSchedule = (computersFinished >= computersForTheWeek) ? "Good Job!" : "You have a lot of work to do!"	//ternary for output.
		console.log(onSchedule)	//Prints to console.
	}else{
		var daysWorked = prompt("How many days have you worked this week?")
	}
}

checkDayAndSchedule();	//calls function to action