"use strict";

function Ball(x,y) {
	this.width = 15;
	this.height = 15;
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.speedX = -250;
	this.speedY = -250;
	
}

Ball.prototype.draw = function() {
	ctx.fillStyle = "white";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	
}

Ball.prototype.update = function() {
	this.x += this.speedX * delta;
	this.y += this.speedY * delta;
	for(var i=0; i<playerList.length; i++) {
		if(collisionCheck(this, playerList[i])) {
			audioPongPaddle.play();
			collisionAction(this, playerList[i]);
		}
	}
	if(this.y+this.height > canvas.height) {
		audioPongWall.play();
		this.y = canvas.height - this.height;
		this.speedY = -this.speedY;
	}
	if(this.y < 0) {
		audioPongWall.play();
		this.y = 0;
		this.speedY = -this.speedY;
	}
	if(this.x < 0) {
		audioPongLose.play();
		this.speedX = 250;
		this.x = canvas.width/2;
		playerList[1].score += 1;
	}
	if(this.x+this.width > canvas.width) {
		audioPongLose.play();
		this.speedX = -250;
		this.x = canvas.width/2;
		playerList[0].score += 1;
	}

}
