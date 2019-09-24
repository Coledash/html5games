"use strict";

function Player(name,x,y) {
	this.name = name;
	this.score = 0;
	this.width = 15;
	this.height = 75;
	this.x = x;
	this.y = canvas.height/2 - this.height/2;
	this.speed = 500;
	
}

Player.prototype.draw = function() {
	ctx.fillStyle = "white";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	
}

Player.prototype.update = function() {
	switch (this.name) {
		case "Player 1":
			if (38 in keysDown && this.y > 0) // up
				{ this.y -= this.speed * delta; }
			if (40 in keysDown && this.y+this.height < canvas.height) // down
				{ this.y += this.speed * delta; }
			break;
		case "Player 2":
			if (87 in keysDown && this.y > 0) // w
				{ this.y -= this.speed * delta; }
			if (83 in keysDown && this.y+this.height < canvas.height) // a
				{ this.y += this.speed * delta; }
			break;
		case "AI 1":
			if(ballList[0].y < this.y) 
				{ this.y -= (this.speed * 0.48) * delta; }
			if(ballList[0].y > this.y && this.y+this.height < canvas.height) 
				{ this.y += (this.speed * 0.48) * delta; }
			break;
	}
		
}