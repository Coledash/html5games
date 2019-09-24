"use strict";

var gameStateMenu = {};

gameStateMenu.draw = function() {
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.font="38pt impact";
	ctx.fillText("Pong Jari", canvas.width/2, 100)
	ctx.font="24pt impact";
	ctx.fillText("1 Player", canvas.width/2, canvas.height/2); 
	ctx.fillText(">", canvas.width/2 - 75, canvas.height/2 + menuArrow*50); 
	ctx.fillText("2 Player", canvas.width/2, canvas.height/2+50); 
	ctx.fillText("Controls: z, arrow keys", canvas.width/2, canvas.height-50);
	
};

gameStateMenu.update = function() {
	if(38 in keysDown) { // up arrow
		if(menuArrow > 0) {
			menuArrow--;
			return;
		}
	}
			
	if(40 in keysDown) { // down arrow
		if(menuArrow < 1) {
			menuArrow++;
			return;
		}
	}
	
	if(90 in keysDown) { // z
		keysDown = {};
		if(menuArrow==0) {
			gameState = "SINGLEPLAYER";
			playerList.push(new Player("Player 1", 50, 50));
			playerList.push(new Player("AI 1", canvas.width-75, 50));
			ballList.push(new Ball(200, 200));
			return;
		}
		if(menuArrow==1) {
			gameState = "MULTIPLAYER";
			playerList.push(new Player("Player 1", 50, 50));
			playerList.push(new Player("Player 2", canvas.width-75, 50));
			ballList.push(new Ball(200, 200));
			return;
		}
	}
			
};
