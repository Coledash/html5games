"use strict";

var gameStatePlay = {};

gameStatePlay.draw = function() {
	
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.fillStyle = menuFontColor;
	ctx.textAlign = "left";
	ctx.font = "16pt impact";
	ctx.fillText("Level: " + gameLevel, 5, canvas.height-5);
	ctx.textAlign = "right";
	ctx.fillText("Lives: " + playerList[0].lives, canvas.width-5, canvas.height-5);
	
	for(var i=0; i<brickList.length; i++) {
		if(brickList[i].alive)
			brickList[i].draw();
	}
	
	for(var i=0; i<playerList.length; i++) {
		playerList[i].draw();
	}
	
	for(var i=0; i<ballList.length; i++) {
		ballList[i].draw();
	}

};	

gameStatePlay.update = function() {
	
	for(var i=0; i<playerList.length; i++) {
		playerList[i].update();
	}
	for(var i=0; i<ballList.length; i++) {
		ballList[i].update();
	}
	
};	
	
	
	
	