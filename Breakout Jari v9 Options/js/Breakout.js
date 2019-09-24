"use strict";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var gameState = null; // "MENU", "PLAY", "LOSE", "OPTIONS"
var playerList = [];
var ballList = [];
var brickList = [ // Current "map" of bricks
	//1,1,1,1,1,1,1,1,1,1
];
var gameLevel = null; // Different game levels/maps
var menuArrow = 0; // Selection arrow in main menu

// Maps
var mapList = []; // List of maps
mapList.push(mapLevel1);
mapList.push(mapLevel2);

// Audio
var audioGameStart = new Audio("audio/audioGameStart.ogg");
var audioEnable = true;

// Graphics
var playerImage = new Image();
playerImage.src = 'gfx/player.png';
var ballImage = new Image();
ballImage.src = 'gfx/ball.png';
var brickImage = new Image();
brickImage.src = 'gfx/brickGreen.png';
var menuFontColor = "#008000";

// Handle keyboard controls
var keysDown = {};
addEventListener("keydown", function (e)
{ keysDown[e.keyCode] = true; },false);
addEventListener("keyup", function (e)
{ delete keysDown[e.keyCode]; },false);

function collisionCheck(a,b) {
	if ( a.x <= (b.x + b.width) 
		&& a.y <= (b.y + b.height)
		&& b.x <= (a.x + a.width) 
		&& b.y <= (a.y + a.height)
	) { return true } return false;
}

function collisionAction(ball, target, i) {
	ball.speedY = -ball.speedY;
	if(target.name == "Player 1") {
		ball.y = playerList[0].y - ball.height;
	}
	if(target.name == "Brick") {
		brickList[i].alive = false;
	}
}

function buildMap() {
	
	brickList = [];

	var i = 0;
	var x = 0;
	var y = 0;
	for(i=0; i< mapList[gameLevel-1].length; i++) {
	
		switch(mapList[gameLevel-1][i]) {
		
			case 1:
				brickList.push(new Brick(x * 34 + 14, y * 18 + 14));
				break;
		
		}
		
		x++;
		
		if(x > 17) {
			x = 0;
			y++;
		}
		
	}
	
}

function mapWin() {
	
	if(gameLevel < mapList.length) {
		
		gameLevel++;
		buildMap();
		
	}
	
};

Game.init();
