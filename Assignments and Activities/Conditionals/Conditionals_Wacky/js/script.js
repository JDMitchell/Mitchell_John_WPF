/*
John Mitchell
Conditionals - Wacky
January 23, 2014
*/

//displays random info about the system
var systems = ["No System", " Playstation", " PS2", " PS3", " NES", " SNES", " N64", " Gamecube", " Wii", " Sega", " Sega Dreamcast", " Gameboy", " GBA ", " DS", " 3DS", " PSP"] //List of available systems
//index = 0-15
var chosenSystem = prompt(systems + "\n\nPlease choose one of the above game systems.\nNo System(0)-PSP(15)");	//requests user to make a choice


console.log(systems[chosenSystem]) //displays the array

/*
else if(chosenSystem === ""){
	alert("No information entered was blank.\nPlease enter the information requesed.")	//Lets the user know there was no information entered.
}
*/