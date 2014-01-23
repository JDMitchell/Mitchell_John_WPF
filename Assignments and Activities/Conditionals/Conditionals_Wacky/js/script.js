/*
John Mitchell
Conditionals - Wacky
January 23, 2014
*/

//displays random info about the system
var systems = ["No System", " Playstation", " PS2", " PS3", " NES", " SNES", " N64", " Gamecube", " Wii", " Sega", " Sega Dreamcast", " Gameboy", " GBA", " DS", " 3DS", " PSP"] //List of available systems
//index = 0-15
var chosenSystem = prompt(systems + "\n\nPlease choose one of the above game systems.\nNo System(0)-PSP(15)");	//requests user to make a choice


//console.log(systems[chosenSystem]) //displays the array item chosen

if(chosenSystem === '1' || chosenSystem === '2' || chosenSystem === '3'){	//Playstation gaming consoles
	if(chosenSystem === '1'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system was later upgraded to the Playstation 2(PS2).")
		console.log("Some well known games of this system are: Spyro the Dragon, Crash Bandicoot, Final Fantasy 7-9, and Brave Fencer Musashi")
		console.log("The system was introduced to the states in 1995")
	}
	if(chosenSystem === '2'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system was later upgraded to the Playstation 3(PS3).")
		console.log("Well known games are: Jak and Daxter, Ratchet and Clank, Final Fantasy XII, Kingdom Hearts 1&2")
		console.log("The system was introduced to the states in 2000")
	}
	if(chosenSystem === '3'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to Playstation 4(PS4).")
		console.log("Well known games are: Lost Planet 2, Resident Evil 5, Fallout, The Elder Scrolls:Skyrim")
		console.log("The system was introduced to the states in 2006")
	}
}else if(chosenSystem === '4' || chosenSystem === '5' || chosenSystem === '6' || chosenSystem === '7' || chosenSystem === '8'){	//nintendo gaming system
	if(chosenSystem === '4'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to SNES.")
		console.log("Well known games are: Lost Planet 2, Resident Evil 5, Fallout, The Elder Scrolls:Skyrim")
		console.log("The system was introduced to the states in 2006")
	}
	if(chosenSystem === '5'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to N64.")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in 2006")
	}
	if(chosenSystem === '6'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to Gamecube.")
		console.log("Well known games are:")
		console.log("The system was introduced to the states in 2006")
	}
	if(chosenSystem === '7'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to Wii.")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in 2006")
	}
	if(chosenSystem === '8'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
}else if(chosenSystem === '9' || chosenSystem === '10'){	//Sega game systems
	if(chosenSystem === '9'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
	if(chosenSystem === '10'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}		
}else if(chosenSystem === '11' || chosenSystem === '12' || chosenSystem === '13' || chosenSystem === '14'){	//Nintendo Handhelds
	if(chosenSystem === '11'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
	if(chosenSystem === '12'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
	if(chosenSystem === '13'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
	if(chosenSystem === '14'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
}else if(chosenSystem === '15'){	//Playstation handheld
	if(chosenSystem === '15'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to .")
		console.log("Well known games are: ")
		console.log("The system was introduced to the states in ")
	}
}else if(chosenSystem === '0'){	//No system
	console.log("I am sorry you did not want to know little facts about gaming systems")
}else{	//requests you make a selection.
	console.log("Please choose 0-15.")
}