/*
John Mitchell
Functions - Wacky
January 28, 2014
*/



function getInfo(){	//function for gather information from user
	var fname = prompt("Enter your first name.")	//gets first name
	console.log(fname)	//prints first name

	var lname = prompt("Enter your last name.")	//gets last name
	console.log(lname)	//prints last name

	var fullName = fname + " " + lname //creates full name
	console.log(fullName)	//prints fullname

	var ammountInBank = prompt("How much is in the bank account?") //Gets amount in the bank
	console.log(ammountInBank);	//prints amount in bank

	var change = prompt("Are you adding to your bank account or taking away from?\nUse '+' to add and '-' to subtract.")	//requesting to know the action being done to the account
	console.log(change)	//prints action being done.

	var amountChange = prompt("How much is being changed?")	//collects the amount thats being added or removed.
	console.log(amountChange);	//prints amount being changed 
}

function balanceCheckBook(){	//Does the calculations
	//insert code
}



getInfo();	//puts the function into actin
balanceCheckBook();	//Puts the function into action