/*
John Mitchell
Functions - Personal
January 27, 2008
*/


//This will help the user calculate the isk per dollar ratio and how long it would take to make required isk to pay for hius subscription

alert("This will help you calculate your isk needed to pay for your monthly subscription.\nThis assumes you do not want to play your real cash.")

var siteIsk;
var siteLP;

var getInfo = function(){
	var plexPricesInGame = prompt("What is the average price of PLEX on the market?")
	console.log(plexPricesInGame)
	var plexPriceUSD = prompt("How much does PLEX cost in USD currency?")
	console.log(plexPriceUSD)
	var yourIsk = prompt("How much Isk do you have to spend?")
	console.log(yourIsk)
	var incursion = prompt("Do you run incursions to make Isk in EVE Online(Y/N)")
	if(incursion === "y" || incursion === "Y"){
		return incursion;
		incursions();
	}else if(incursion === "n" || incursion === "N"){
		var doYouMine = prompt("Do you mine to make Isk in EVE Online(Y/N)")
		if(doYouMine === "y" || doYouMine === "Y"){
			mining();
		}else{
			console.log("I cannot help you.")
		}
	}
}

var incursions = function(incursion){
	console.log(incursion)
	if(incursion === "y" || incursion === "Y"){
		var sites = ["empty", "scout", "vanguard", "assualt", "headquarters"]
		var site = prompt("Which of these do you do? \nChoose 1(scouts)-4(headquarters)\n" + sites[1] + ", " + sites[2] + ", " + sites[3] + " or " + sites[4])
		if(site === "1"){
			console.log("These provide 50k isk and 50 LP")
			siteLP = 50;
			siteIsk = 50000;
		}else if(site === "2"){
			console.log("These provide 15 million Isk and 2k LP.")
			siteIsk = 15000000
			siteLP = 2000
		}else if(site === "3"){
			console.log("These provide 26 million Isk and 5k LP.")
			siteIsk = 26000000
			siteLP = 5000
		}else if(site === "4"){
			console.log("These provide 45 million Isk and 10k LP.")
			siteIsk = 45000000
			siteLP = 10000
		}else{
			console.log("Please choose on of the selected options.\n 1, 2, 3, or 4")
		}
		console.log("All sites in high security space pay 70% of the payouts listed.")
		siteLP = siteLP*0.7
		siteIsk = siteIsk*0.7
		console.log("You will recieve " + siteIsk + " Isk and " + siteLP + " LP.")
	}
}


var mining = function(){
	if(doYouMine === "y" || doYouMine === "Y"){
		var hoursMining = prompt("How many hours a day do you mine?")
		var estimatedIskMined = prompt("What is the average value of ore mined?")
		var iskPerHour = estimatedIskMined / hoursMining;
		console.log("You estimated Isk per hour is " + iskPerHour + ".")
	}
}


var plexGettingCalculations = function(incursion){
	if(incursion === "y" || incursion === "Y"){
		var sitesNeededRan = plexPricesInGame / siteIsk
		console.log("You need to run " + sitesNeededRan + " sites to make your isk requirement.")
	}else if(doYouMine === "y" || doYouMine === "Y"){
		var hoursNeededMining = plexPricesInGame / iskPerHour
		console.log("You need to mine for " + hoursNeededMining + " hours to make enough isk for your PLEX.")
	}
}






getInfo();
plexGettingCalculations();
