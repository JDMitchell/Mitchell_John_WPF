//Expressions - Screencasts



/*
This a secondary way to do standard equations

var a = 3;
a += 4;		//a = a + 4
console.log(a);

var a = 3;
a *= 4;		//a = a * 4
console.log(a);

var a = 3;
a /= 4;		//a = a / 4
console.log(a);

var a = 3;
a -= 4;		//a = a - 4
console.log(a);
*/


/*
Increments and Decrements

var a = 3;
a ++;		//a = a + 1 or a += 1
console.log(a);

var a = 3;
a --;		//a = a - 1 or a -= 1
console.log(a);
*/


//Prompts and Alerts

var width = prompt("We are calculating thie area of a rectangle. \nPlease enter the width: ");
var height = prompt("Please enter the height.");

var area = width * height;		//calculates info gathered from prompts.

console.log(area);
alert("The area of your rectangle is " + area + ".")