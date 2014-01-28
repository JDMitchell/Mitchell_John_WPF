/*
John Mitchell
Functions - Personal
January 27, 2008
*/


//This will help the user calculate the isk per dollar ratio and how long it would take to make required isk to pay for hius subscription

alert("This will help you calculate your isk needed to pay for your monthly subscription.\nThis assumes you do not want to play your real cash.")	//Alerts the user of the purpose of this program





var getInfo = function(){	//function to get info from the user
	var plexPricesInGame = prompt("What is the average price of PLEX on the market?")	//acquire in game price of the item
	console.log(plexPricesInGame)	//prints to the console.
	
	
	var yourIsk = prompt("How much Isk do you have to spend?")	//requests users available budget
	console.log(yourIsk)	//prints to console.
	
	
	var incursion = prompt("Do you run incursions to make Isk in EVE Online(Y/N)")	//ASks the user about his ingame money making
	if(incursion === "y" || incursion === "Y"){	//decision statement.
		incursions(incursion, plexPricesInGame, yourIsk);	//function call to allow later functions in code to run properly
		return incursion 	//returns incursion variable for later functions to be run
	}else if(incursion === "n" || incursion === "N"){	//lets us know whats going or hope if you dont run incursions
		console.log("I hope you mine for a living then.")		//console output
	}else{	//corrective section
		console.log("Please choose Y or N")	//corrective statement	
	}
}



var incursions = function(incursion, plexPricesInGame, yourIsk){	//Incursion function setup
	if(incursion === "y" || incursion === "Y"){	//Decision for incursions function
		var sites = ["empty", "scout", "vanguard", "assualt", "headquarters"]	//array for the types of the sites
		var site = prompt("Which of these do you do? \nChoose 1(scouts)-4(headquarters)\n" + sites[1] + ", " + sites[2] + ", " + sites[3] + " or " + sites[4])	//Request the user to input what type of site he does in game
		if(site === "1"){	//Check if site 1
			console.log("These provide 50k isk and 50 LP")	//gives info about site
			siteLP = 50;	//sets variable about site
			siteIsk = 50000;	//sets variable about site
		}else if(site === "2"){	//Checks if site 2
			console.log("These provide 15 million Isk and 2k LP.")	//gives info about site
			siteIsk = 15000000	//sets variable about site
			siteLP = 26000000//sets variable about site
		}else if(site === "3"){	//Checks if site 3
			console.log("These provide 26 million Isk and 5k LP.")	//gives info about site
			siteIsk = 26000000	//sets variable about site
			siteLP = 5000 	//sets variable about site
		}else if(site === "4"){	//checks if site 4
			console.log("These provide 45 million Isk and 10k LP.")	//gives info about site
			siteIsk = 45000000	//sets variable about site
			siteLP = 10000 	//sets variable about site
		}else{	//corrective condition
			console.log("Please choose on of the selected options.\n 1, 2, 3, or 4")	//Corrective statement
		}
		
		console.log("All sites in high security space pay 70% of the payouts listed.")	//Lets them know about mandartory price cut from above payouts
		
		siteLP = siteLP*0.7;	//sets hisec payouts
		siteIsk = siteIsk*0.7;	//sets hisec payouts

		console.log("You will recieve " + siteIsk + " Isk and " + siteLP + " LP.")	//prints the amount you will get in hisec
		plexGettingCalculations(plexPricesInGame, siteIsk, yourIsk)	//runs calculations to tell how much you need to make
	
	}else{	//else statement
	
		console.log("You don't do incursions.")	//comment to the user
	
	}
}



var plexGettingCalculations = function(plexPricesInGame, siteIsk, yourIsk){	//function that does calculations
	var plexPricesInGame	//just incase variable wont read without a local
	var siteIsk		//just incase variable wont read without a local
	var iskNeededForPlex = plexPricesInGame - yourIsk	//Calculates the amount of isk you need to make with your budget
	var sitesNeededRan = Number(iskNeededForPlex) / Number(siteIsk)	//calculates the amount of sites you need to run based on above calculation
	console.log("You need to run " + sitesNeededRan + " sites to make your isk requirement.")	//prints output to console.
	
}






getInfo();	//not sure if needed 

