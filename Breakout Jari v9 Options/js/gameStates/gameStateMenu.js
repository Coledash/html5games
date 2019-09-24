"use strict";

var gameStateMenu = {};

gameStateMenu.draw = function() {
	
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.fillStyle = menuFontColor;
	ctx.textAlign = "center";
	ctx.font = "38pt impact";
	ctx.fillText("Breakout Jari", canvas.width/2, 100)
	ctx.font = "24pt impact";
	ctx.fillText("Play", canvas.width/2, canvas.height/2);
	ctx.fillText("Options", canvas.width/2, canvas.height/2 + 50);
	ctx.fillText(">", canvas.width/2-80, canvas.height/2  + menuArrow * 50);
	ctx.fillText("Keyboard: z, arrow keys.", canvas.width/2, canvas.height-50);

};

gameStateMenu.update = function() {
	
	if(90 in keysDown && menuArrow === 0) { // z Play
		keysDown = {};
		menuArrow = 0;
		gameState = "PLAY";
		buildMap();
		playerList.push(new Player("Player 1"));
		playerList[0].init();
		ballList = [];
		ballList.push(new Ball(playerList[0].x+25, playerList[0].y-35));
		if(audioEnable)
			audioGameStart.play();
	}
	
	if(90 in keysDown && menuArrow === 1) { // z Options
		keysDown = {};
		menuArrow = 0;
		gameState = "OPTIONS";
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

