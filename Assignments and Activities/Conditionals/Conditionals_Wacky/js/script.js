/*
John Mitchell
Conditionals - Wacky
January 23, 2014
*/

//displays random info about the system
var systems = ["No System", " Playstation", " PS2", " PS3", " NES", " SNES", " N64", " Gamecube", " Wii"] //List of available systems
//index = 0-15
var chosenSystem = prompt(systems + "\n\nPlease choose one of the above game systems.\nNo System(0)-Wii(8)");	//requests user to make a choice


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
		console.log("Well known games are: Duck Hunt, Track & Field, Super Mario Bros., Zelda 2")
		console.log("The system was introduced to the states in 1985")
	}
	if(chosenSystem === '5'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to N64.")
		console.log("Well known games are: Super Mario World, Yoshi's Island, Donkey Kong 1-3, Mario Kart, A Link to the Past")
		console.log("The system was introduced to the states in 1991")
	}
	if(chosenSystem === '6'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to Gamecube.")
		console.log("Well known games are: Super Mario 64, Donkey Kong 64, Banjo Kazooie, Pokemon Snap, Super Smash Bros., Legend of Zelda: Ocarina of Time. GoldenEye 007")
		console.log("The system was introduced to the states in 1996")
	}
	if(chosenSystem === '7'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to Wii.")
		console.log("Well known games are: Super Smash Bros. Melee, Kirby's Air Ride, Luigi's Mansion, Super Mario Sunshine, Mario Party 4-5.")
		console.log("The system was introduced to the states in 2001")
	}
	if(chosenSystem === '8'){
		console.log(systems[chosenSystem]) //displays the array item chosen
		//Information about the chosen system
		console.log("This system has been upgraded to WiiU.")
		console.log("Well known games are: Super Mario Galaxy, Super Mario Bros Wii, Super Smash Bros Brawl, Kirby's Epic Yarn")
		console.log("The system was introduced to the states in 2005")
	}
}
}else if(chosenSystem === '0'){	//No system
	console.log("I am sorry you did not want to know little facts about gaming systems")
}else{	//requests you make a selection.
	console.log("Please choose 0-8.")
}