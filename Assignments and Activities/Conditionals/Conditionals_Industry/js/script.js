/*
John Mitchell
Conditionals - Industry
January 23, 2014
*/



//This is based on the decision not only people in the field of work I am in but people who work in general need to ask themselve when looking for work.

var seekingJob = prompt("Are you looking for a job? (Y/N)")	//Asks the user if they are looking for a job.


//Console tested variables
console.log(seekingJob)

if(seekingJob === 'Y' || seekingJob === 'y'){	//Or operator makes sure case size does not error the user out.

	var move = prompt("Are you willing to move for your new potential job? (Y/N)")	//Asks the user if he is willing to move for his new job.
	console.log(move)

	var workFromHome = prompt("Would you like to work from home? (Y/N)")	//Asks the user if he would like to work from home.
	console.log(workFromHome)

	if((move === 'Y' || move === 'y') || (workFromHome === 'N' || workFromHome === 'n')){	//double setted logical condition
	
		console.log("Apply to every job you have interest in.")	//offers advice
	
	}else if((move === 'N' || move === 'n') || (workFromHome === 'Y' || workFromHome === 'y')){	//|| operator allows one option to be false.

		console.log("Apply to every job you have interest in but tactfully deny any offers that will not allow you to work from home.")	//offers advice

	}else if((move === 'N' || move === 'n') && (workFromHome === 'N' || workFromHome === 'n')){	//&& operator makes sure both conditions are true

		console.log("Only apply to local jobs or jobs within a distance you are willing to travel.")	//offers advice

	}else if((move === 'Y' || move === 'y') && (workFromHome === 'Y' || workFromHome === 'y')){

		console.log("Apply to every job you have interest in")	//offers advice

	}else{
		console.log("please enter 'y' for yes and 'n' for no.")
	}




}else if(seekingJob === 'N' || seekingJob === 'n'){	//Or operator makes sure case size does not error the user out.

	console.log("This advisory program is not needed for you.")	//Tells the user they can discard this program

}else{

	console.log("please enter 'y' for yes and 'n' for no.")

}

