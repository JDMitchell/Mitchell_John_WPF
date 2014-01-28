/*
John Mitchell
Functions - Wacky
January 28, 2014
*/

var ammountInBank
var change
var amountChange


getInfo();	//puts the function into actin
balanceCheckBook(change, ammountInBank, amountChange);	//Puts the function into action



function getInfo(change){	//function for gather information from user
	var fname = prompt("Enter your first name.")	//gets first name
	console.log(fname)	//prints first name

	var lname = prompt("Enter your last name.")	//gets last name
	console.log(lname)	//prints last name

	var fullName = fname + " " + lname //creates full name
	console.log(fullName)	//prints fullname

	var ammountInBank = prompt("How much is in the bank account?") //Gets amount in the bank
	console.log(ammountInBank);	//prints amount in bank

	var amountChange = prompt("How much is being changed?")	//collects the amount thats being added or removed.
	console.log(amountChange);	//prints amount being changed 
	return change;
}

function balanceCheckBook(ammountInBank, amountChange){	//Does the calculations
	var change = prompt("Are you adding to your bank account or taking away from?\nUse '+' to add and '-' to subtract.")	//requesting to know the action being done to the account
	console.log(change)	//prints action being done.
	var ammountInBank
	var amountChange
	function balance(ammountInBank, amountChange){
		if(change === '-' ){
			var newAmount = ammountInBank - amountChange;
			console.log(newAmount);
		}else if(change === '+'){
			var newAmount = ammountInBank + amountChange;
			console.log(newAmount)
		}else{
			console.log("Make sure you use '+' or '-'.")
		}
	}
}

