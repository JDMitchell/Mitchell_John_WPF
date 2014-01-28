/*
John Mitchell
Functions - Industry
January 27, 2014
*/


function checkDayAndSchedule(){	//fucntion creation
	if(lastDay === 'Y' || lastDay === 'y'){	//chooses below section if today is last day.
		var onSchedule = (computersFinished >= computersForTheWeek) ? "Good Job!" : "You have work to do!"	//ternary for output.
		console.log(onSchedule)	//Prints to console.
	}else{
		var daysWorked = prompt("How many days have you worked this week?")	//requests how many days user has worked
		var yourAVG = computersFinished / daysWorked	//calculates your avg
		console.log("You seem to have an average of " + yourAVG + " computers a day.")	//lets the user know his avg
		var onSchedule = (yourAVG >= dailyAVG) ? "Your doing great!" : "You have some catching up to do..."		//ternary
		console.log(onSchedule)	//prints info to console.
	}
}


function gatherInfo(){
	var computersForTheWeek = prompt("How many computers do you need to work on for the week to meet schedule?")	//Gathers quota for the week
	var computersFinished = prompt("How many computers have you completed?")	//input for completed work
	var daysWorking = prompt("How many days are you scheduled to work this week?\nEnter 1-7.")	//Request how many days he is scheduled this week
	var lastDay = prompt("Is today your last day of work for the week?(Y/N)")	//Checks to see if today is his last day of the work week

}

gatherInfo(); //gets info from user

var dailyAVG = computersForTheWeek / daysWorking	//calculates daily avg needed to be on schedule
console.log("You need to do " + dailyAVG + " computers a day.") // tells user needed avg

checkDayAndSchedule();	//calls function to action

