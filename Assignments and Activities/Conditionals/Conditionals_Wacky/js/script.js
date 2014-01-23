/*
John Mitchell
Conditionals - Wacky
January 23, 2014
*/

//displays random info about the system
var systems = ["No System", " Playstation", " PS2", " PS3", " NES", " SNES", " N64", " Gamecube", " Wii", " Sega", " Sega Dreamcast", " Gameboy", " GBA", " DS", " 3DS", " PSP"] //List of available systems
//index = 0-15
var chosenSystem = prompt(systems + "\n\nPlease choose one of the above game systems.\nNo System(0)-PSP(15)");	//requests user to make a choice


console.log(systems[chosenSystem]) //displays the array

if(chosenSystem === '1' || chosenSystem === '2' || chosenSystem === '3'){	//Playstation gaming consoles
	console.log('test')
}else if(chosenSystem === '4' || chosenSystem === '5' || chosenSystem === '6' || chosenSystem === '7' || chosenSystem === '8'){	//nintendo gaming system
	console.log('test2')
}else if(chosenSystem === '9' || chosenSystem === '10'){	//Sega game systems
	console.log('test3')
}else if(chosenSystem === '11' || chosenSystem === '12' || chosenSystem === '13' || chosenSystem === '14'){	//Nintendo Handhelds
	console.log('test4')
}else if(chosenSystem === '15'){	//Playstation handheld
	console.log('test5')
}else if(chosenSystem === '0'){	//No system
	console.log("I am sorry you did not want to know little facts about gaming systems")
}else{	//requests you make a selection.
	console.log("Please choose 0-15.")
}