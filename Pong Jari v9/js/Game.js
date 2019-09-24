"use strict";

var Game = {};
var delta = 1 / 60; // Fixed time step for game updates.

Game.init = function() {
	gameState = "MENU";
	playerList = [];
	ballList = [];
	keysDown = {};
	Game.mainLoop();
};

Game.mainLoop = function() {
	Game.update();
	Game.draw(); 
	requestAnimationFrame(Game.mainLoop);
};

Game.update = function() {
	switch(gameState) {
		case "MENU":
			gameStateMenu.update();
			break;
		case "SINGLEPLAYER":
		case "MULTIPLAYER":
			gameStateMultiplayer.update();
			break;
	}
	
};

Game.draw = function() {
	switch(gameState) {
		case "MENU":
			gameStateMenu.draw();
			break;
		case "SINGLEPLAYER":
		case "MULTIPLAYER":
			gameStateMultiplayer.draw();
			break;
	}
};
