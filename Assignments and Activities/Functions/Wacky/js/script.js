/*
John Mitchell
Functions - Wacky
January 28, 2014
*/

var ammountInBank
var change
var amountChange
var newAmount


getInfo();	//puts the function into actin
balanceCheckBook(ammountInBank, amountChange);	//Puts the function into action
bonus(newAmount)


function getInfo(){	//function for gather information from user
	var fname = prompt("Enter your first name.")	//gets first name

	var lname = prompt("Enter your last name.")	//gets last name

	var fullName = fname + " " + lname //creates full name

	ammountInBank = prompt("How much is in the bank account?") //Gets amount in the bank
	Number(ammountInBank)	//converts to number

	amountChange = prompt("How much is being changed?")	//collects the amount thats being added or removed.
	Number(amountChange)	//converts to number
}

function balanceCheckBook(ammountInBank, amountChange){	//Does the calculations
	var change = prompt("Are you adding to your bank account or taking away from?\nUse '+' to add and '-' to subtract.")	//requesting to know the action being done to the account
	balance(change, Number(ammountInBank), Number(amountChange));	//function call

}

function balance(change, ammountInBank, amountChange){	//Function creation
	if(change === '-' ){	//If decision
		newAmount = ammountInBank - amountChange;	//calculates new balance
		Number(newAmount)	//Converts to Number
		console.log("$" + newAmount + " is the balance.")	//Prints to console
	}else if(change === '+'){	//If decision
		newAmount = ammountInBank + amountChange;	//calculates new balance
		Number(newAmount)	//converts to number
		console.log("$" + newAmount + " is the balance.")	//prints to console
	}else{	//user error statement
		console.log("Make sure you use '+' or '-'.")	//Corrective statement for the user
	}
}

function bonus(newAmount){	//funciton creation
	var interest = newAmount * 0.025	//calculates interest
	var savingsBonus = newAmount * 0.025 + newAmount	//calculates saving bonus
	console.log("You earned $" +interest+ " in interest")	//prints to console
	console.log("You have $"+savingsBonus+ " with the interest added.")	//prints saving bonus
}
