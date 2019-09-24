"use strict";

var gameStateLose = {};

gameStateLose.draw = function() {
	
	ctx.fillStyle = menuFontColor;
	ctx.textAlign = "center";
	ctx.font = "16pt impact";
	ctx.fillText("Game over! Press z to continue.", canvas.width/2, canvas.height/2);
	
};


gameStateLose.update = function() {
	
	if(90 in keysDown) { // z Back to menu
		keysDown = {};
		menuArrow = 0;
		gameState = "MENU";
	}
	
};