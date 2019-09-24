"use strict";

var gameStateOptions = {};

gameStateOptions.draw = function() {
	
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.fillStyle = menuFontColor;
	ctx.textAlign = "center";
	ctx.font = "38pt impact";
	ctx.fillText("Breakout Jari", canvas.width/2, 100)
	ctx.font = "24pt impact";
	
	if(audioEnable) {
		ctx.fillText("Enable audio", canvas.width/2, canvas.height/2);
	} else {
		ctx.fillText("Disable audio", canvas.width/2, canvas.height/2);
	}
	
	ctx.fillText("Back", canvas.width/2, canvas.height/2 + 50);
	
	ctx.fillText(">", canvas.width/2-120, canvas.height/2 + menuArrow * 50);
	ctx.fillText("Keyboard: z, arrow keys.", canvas.width/2, canvas.height-50);

};

gameStateOptions.update = function() {
	
	if(90 in keysDown && menuArrow === 0) { // z Toggle audio
		keysDown = {};
		if(audioEnable) {
			audioEnable = false;
			return;
		} else {
			audioEnable = true;
			return;
		}
		
	}
	
	if(90 in keysDown && menuArrow === 1) { // z Back to menu
		keysDown = {};
		menuArrow = 0;
		gameState = "MENU";
	}
	
	if(40 in keysDown) { // down arrow
		if(menuArrow < 1) {
			menuArrow++;
			return;
		}
	}
	
	if(38 in keysDown) { // up arrow
		if(menuArrow > 0) {
			menuArrow--;
			return;
		}
	}
		
};
