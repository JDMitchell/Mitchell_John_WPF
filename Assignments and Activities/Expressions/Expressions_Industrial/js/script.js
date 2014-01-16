//John Mitchell
//January 14, 2014
//Expressions_Personal


//This is the Industrial JS file.
/*
This will request the users information on the basics of their current educational career
*/

alert("The following prompts will request your information about the school you are currently attending.");  // Lets the user know what to expect from the next few lines of code.

var firstName = prompt("Please enter your first name:")	//requests users first name
//console.log(firstName)	//Displays firstName in the console.

var lastName = prompt("Pleas enter your last name:")	//requests users last name
//console.log(lastName)	//displays lastName to the console


var schoolName = prompt("What is the name of the school you are currently attending?");	//Retrieves user input on the school name.
console.log(schoolName);	//Displays user input in the console.

var programName = prompt("What program are you enrolled in?")	//Requests the user to enter the name of their program
console.log(programName);	//Displays user input to console.


var programClasses = prompt("How many classes are there in the program?\nPlease included transfer credits and completed classes.\nAlso use number format E.G. 22, 53, ...")	//Acquires the total classes the program has
console.log(programClasses);	//Displays input to console.

/*DOES NOT WORK WITH SMALLER OR LARGER INPUTS OTHER THAN THOSE THAT MATCH MY CREDENTIALS EXACT.
console.log("SCHOOL NAME\t\tPROGRAM NAME\t\t\t\tNUMBER OF CLASSES")	//meant to be format for display below.
console.log(schoolName +"\t\t"+programName+"\t"+programClasses)		//Displays users information in the above format. 
*/

var classesTaken = prompt("How many classes have you completed?\nThese do not include transfer credits.")	//Collects the number of completed courses.
console.log(classesTaken);	//Displays input in the console.

var transferCredits = prompt("How many classes did you transfer over?")		//request how many classes were transfered.
console.log(transferCredits);	//Displays input in the console.

var removedClasses = Number(classesTaken) + Number(transferCredits);	//Added the number of taken classes and transferred classes together.
console.log(removedClasses);	//Displays calculation in console.

var classesLeft = Number(programClasses) - Number(removedClasses);		//Removes the number of classes removed from total number of classes
console.log(classesLeft);		//Displays the number classes left.


var fullName = firstName + " " + lastName;	//Should create users first and last name on the same line.
console.log(fullName);	//Displays fullname

var schoolNameAndProgram = schoolName + " - " + programName;		//Will create one line that holds the school and program name
console.log(schoolNameAndProgram);	//Displays school name and program.



