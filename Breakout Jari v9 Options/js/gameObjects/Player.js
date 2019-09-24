"use strict";

function Player() {
	
}

Player.prototype.init = function() {
	this.name;
	this.width = 64;
	this.height = 16;
	this.x = canvas.width/2 - this.width/2;
	this.y = canvas.height - this.height*3;
	this.speedX = 512;
	this.lives = 3;
	
}

Player.prototype.draw = function() {
	
	ctx.fillStyle = "white";
	//ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.drawImage(playerImage, this.x, this.y);
	
}

Player.prototype.update = function() {
	if(37 in keysDown && this.x>0) // left arrow
		{ this.x -= this.speedX * delta; }
		
	if(39 in keysDown && this.x+this.width<canvas.width) // right arrow
		{ this.x += this.speedX * delta; }
		
	if(90 in keysDown && ballList[0].alive == 0) // z
		{ ballList[0].alive = 1; }
		
	if(this.x < 0) { // Make sure player stays inside boundaries.
		this.x = 0;
	}
	
	if(this.x + this.width > canvas.width) {
		this.x = canvas.width - this.width;
	}
	
}
