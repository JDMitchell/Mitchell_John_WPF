/*
John Mitchell
Functions - Personal
January 27, 2008
*/

alert("This will help you calculate your isk needed to pay for your monthly subscription.\nThis assumes you do not want to play your real cash.")

var getInfo = function(){
	var plexPricesInGame = prompt("What is the average price of PLEX on the market?")
	console.log(plexPricesInGame)
	var plexPriceUSD = prompt("How much does PLEX cost in USD currency?")
	console.log(plexPriceUSD)
	var yourIsk = prompt("How much Isk do you have to spend?")
	console.log(yourIsk)
}

//var plexCalculations = function(){
	//
//}

getInfo();
//plexCalculations();