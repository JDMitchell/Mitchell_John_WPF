/*
John Mitchell
Conditionals - Industry
January 23, 2014
*/


var seekingJob = prompt("Are you looking for a job? (Y/N)")	//Asks the user if they are looking for a job.
var workFromHome = prompt("Would you like to work from home? (Y/N)")	//Asks the user if he would like to work from home.


//Console tested variables
console.log(seekingJob)
console.log(workFromHome)

if(seekingJob === 'Y' || seekingJob === 'y'){	//Or operator makes sure case size does not error the user out.

	var move = prompt("Are you willing to move for your new potential job? (Y/N)")	//Asks the user if he is willing to move for his new job.
	console.log(move)


}else if(seekingJob === 'N' || seekingJob === 'n'){	//Or operator makes sure case size does not error the user out.

	console.log("This advisory program is not needed for you.")	//Tells the user they can discard this program

}else{

	console.log("please enter 'y' for yes and 'n' for no.")

}

