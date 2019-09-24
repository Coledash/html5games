"use strict";

function Brick(x,y) {
	
	this.name = "Brick";
	this.alive = true;
	this.width = 32;
	this.height = 16;
	this.x = x;
	this.y = y;

}

Brick.prototype.draw = function() {
	
	//ctx.fillStyle = "white";
	//ctx.fillRect(this.x, this.y, this.width, this.height);
	
	ctx.drawImage(brickImage, this.x, this.y);
	
}
