"use strict";

var Game = {};
var delta = 1 / 60; // Fixed time step for game updates.

Game.init = function() {
	gameState = "MENU";
	gameLevel = 1;
	playerList = [];
	ballList = [];
	Game.mainLoop();
}

Game.mainLoop = function() {
	Game.update();
	Game.draw();			
	requestAnimationFrame(Game.mainLoop);
}

Game.update = function() {
	
	switch(gameState) {
		case "MENU":
			gameStateMenu.update();
			break;
		case "PLAY":
			gameStatePlay.update();
			break;
		case "LOSE":
			gameStateLose.update();
			break;
		case "OPTIONS":
			gameStateOptions.update();
			break;
			
	}
	
}

Game.draw = function() {
	
	switch(gameState) {
		case "MENU":
			gameStateMenu.draw();
			break;
		case "PLAY":
			gameStatePlay.draw();
			break;
		case "LOSE":
			gameStatePlay.draw();
			gameStateLose.draw();
			break;
		case "OPTIONS":
			gameStateOptions.draw();
			break;
			
	}
	
}
