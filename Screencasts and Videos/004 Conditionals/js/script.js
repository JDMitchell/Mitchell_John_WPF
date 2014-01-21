/*
John Mitchell
Conditionals - Screencasts
*/

//Video - Conditional Logic Concepts
/*
if(sunny){
	goToTheBeach();
}
else{
	goToTheMovies();
}
*/

//Video - Logive Concepts
/*
var temp = 65;
// Condition Operators are >(Greater Than), <(Less Than), >=(Greater Than or Equal To), <=(Less Than or Equal To), !=(Not Equal To), ==(Equal To)
if(temp == 75){		
	go goToTheBeach();
}
*/

//Video - Nesting Conditionals
/*
if(sunny){
	goToTheBeach();
	if(warmWater){		//This is the nested conditional.
		wearNewSuit();
	}
}
else{
	goToTheMovies();
}
*/

//Video - Conditionals
//REPEAT OF VIDEO - CONDITIONAL LOGIC CONCEPTS

//Video - Conditional Example.
/*
var oldEnough = false;

//if the child is old enough, print to the console "You can Ride!"
if(oldEnough){
	//Code performed if condition is true
	console.log("You can Ride the coaster!");
}
console.log("What comes after");
*/

//Video - Relational Expressions
/*
var kidHeight = 40;
var minghieght = 48

//if the kid is over 48 inches in height, print to the console "You can Ride!"
if(kidHeight > minghieght){
	//Code performed if condition is true
	console.log("You can Ride the coaster!");
}
*/

//Video - Condition with Expression
/*
var kidHeight = 47;
var minghieght = 48;
var sneakerLift = 2;

//if the kid is over 48 inches in height, print to the console "You can Ride!"
if(kidHeight + sneakerLift > minghieght){
	//Code performed if condition is true
	console.log("You can Ride the coaster!");
}
*/

//Video - If and Else
/*
var kidHeight = 52;
var minHieght = 48

//if the kid is over 48 inches in height, print to the console "You can Ride!"
if(kidHeight > minHieght){
	//Code performed if condition is true
	console.log("You can Ride the coaster!");
}else{
	//Code performed if condition is false
	console.log("Sorry kid, You've got some growing to do first!")
}
*/

//Video - Else If
/*
var kidHeight = 52;
var minHieght = 48;
var parentHeight = 45;

//if the kid is over 48 inches in height, print to the console "You can Ride!"
if(kidHeight > minHieght){
	//You can ride
	console.log("You can Ride the coaster!");
}else if(kidHeight > parentHeight){
	//You can ride with a parent present
	console.log("You can ride, but only with a parent present.")
}else{
	//Sorry Kid you have some growin to do
	console.log("Sorry kid, You've got some growing to do first!")
}
*/

//Video - Logical Operators
//Logical Operators are &&(And), ||(Or), ^(Exclusive Or), !(Not)
var budget = 300
var iphonePrice = 199.99
var payCheck = 200

if(iphonePrice < budget && payCheck > 300){
	console.log("We can buy the phone")
}else{
	console.log("No phone for you")
}



