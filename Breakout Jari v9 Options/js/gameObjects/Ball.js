"use strict";

function Ball(x,y) {
	
	this.alive = 0;
	this.width = 16;
	this.height = 16;
	this.x = x;
	this.y = y;
	this.speedX = 500;
	this.speedY = 500;
	
}

Ball.prototype.draw = function() {
	
	ctx.fillStyle = "white";
	//ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.drawImage(ballImage, this.x, this.y);
	
}

Ball.prototype.update = function() {
	
	this.update = function() {
		
		if(this.alive == false) {
			this.x = playerList[0].x + (playerList[0].width / 2) - (this.width / 2);
			this.y = playerList[0].y - 20;
			
		}
		
		if(this.alive == true) {
			
			this.x += this.speedX * delta;
			this.y += this.speedY * delta;
			
			if(this.y + this.height > canvas.height) { // Ball dies
				
				this.alive = false;
				playerList[0].lives--;
				if(audioEnable)
					audioGameStart.play();
				
				if(playerList[0].lives === 0) {
					gameState = "LOSE";
				}
			
			}
			
			if(this.y < 0) { // Ball hits top, player wins level
				this.alive = false;
				mapWin();
			}
			
			if(this.x < 0) {
				this.x = 0;
				this.speedX = -this.speedX;
			}
			
			if(this.x + this.width > canvas.width) {
				this.x = canvas.width - this.width;
				this.speedX = -this.speedX;
			}
			
			for(var i=0; i<playerList.length; i++) { // Collision with player
				if(collisionCheck(this, playerList[i])) {
					collisionAction(this, playerList[i]);
				}
			}
			
			for(var i=0; i<brickList.length; i++) { // Collision with brick
				if ( collisionCheck(this, brickList[i])) {
					if(brickList[i].alive==true)
						collisionAction(this, brickList[i], i);
				}
			}
			
		}
	}
	
}
