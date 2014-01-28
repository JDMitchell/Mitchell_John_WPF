/*
John Mitchell
Functions - Personal
January 27, 2008
*/


//This will help the user calculate the isk per dollar ratio and how long it would take to make required isk to pay for hius subscription

alert("This will help you calculate your isk needed to pay for your monthly subscription.\nThis assumes you do not want to play your real cash.")

var getInfo = function(){
	var plexPricesInGame = prompt("What is the average price of PLEX on the market?")
	console.log(plexPricesInGame)
	var plexPriceUSD = prompt("How much does PLEX cost in USD currency?")
	console.log(plexPriceUSD)
	var yourIsk = prompt("How much Isk do you have to spend?")
	console.log(yourIsk)
}

var incursions = function(){
	var incursion = prompt("Do you run incursions in EVE online(Y/N)")
	console.log(incursion)
	if(incursion === "y" || incursion === "Y"){
		var sites = [empty, scout, vanguard, assualt, headquarters]
		console.log(sites)
	}
}

//var plexGettingCalculations = function(){
	
//}

getInfo();
incursions();
//plexGettingCalculations();