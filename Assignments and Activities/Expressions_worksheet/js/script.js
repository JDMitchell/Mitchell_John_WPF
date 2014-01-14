// John Mitchell
// January 14, 2014
// Expressions Worksheet

//Dog Years
var sparkysAge = 3;					//This variable represents Sparky's current age
var dogYears = sparkysAge * 7;		//This variable represents Sparky's Age in dog years

//The below line holds to desire display output in sentence format.
console.log("Sparky is " + sparkysAge + " " + "human years old which is " + dogYears + " " + "in dog years.");



//Slice of Pie part 1
var slicesOfPizza = 8; 		//Slices of pizza per pie 
var peopleAtParty = 11;		//The total number of people at the party
var pizzaOrderd = 5;		//The number of pizzas ordered
var slicesPerPerson = slicesOfPizza * pizzaOrderd / peopleAtParty;		//The amount of slices each person gets

//The below line displays the desired information in the desired format.
console.log("Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party.");



//Slice of Pie part 2
sparkysSlices = pizzaOrderd * slicesOfPizza % peopleAtParty;		//The amount of slices that sparky will get

//The below line displays the amount slices sparky gets.
console.log("Sparky got" + " " + sparkysSlices + " " + "slices of pizza.");



//Average Shopping Bill
var shoppingTotals = [10, 12, 15, 25, 23];	 																			//An array that displays the weekly total
var totalBill = shoppingTotals[0] + shoppingTotals[1] + shoppingTotals[2] + shoppingTotals[3] + shoppingTotals[4]		//Generates to total bill for all weeks
var weeklyAvg = totalBill / 5;

console.log(weeklyAvg); 	//Displays infromation desired