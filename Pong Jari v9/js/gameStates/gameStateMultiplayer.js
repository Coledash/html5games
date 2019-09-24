"use strict";

var gameStateMultiplayer = {};

gameStateMultiplayer.draw = function() {
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "white";
	ctx.font="38pt impact";
	ctx.fillText(playerList[0].score, canvas.width/2 - 100, 75);
	ctx.fillText(playerList[1].score, canvas.width/2 + 75, 75);
	
	for(var i=0; i<15; i++) {
		ctx.fillRect(canvas.width/2-15, i*52-1, 15, 15);
	}
	for(var i=0; i<playerList.length; i++) {
		playerList[i].draw();
	}
	for(var i=0; i<ballList.length; i++) {
		ballList[i].draw();
	}
	
};

gameStateMultiplayer.update = function() {
	for(var i=0; i<playerList.length; i++) {
		playerList[i].update();
	}
	
	for(var i=0; i<ballList.length; i++) {
		ballList[i].update();
	}
	
};
