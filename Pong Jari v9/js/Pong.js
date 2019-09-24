"use strict";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var gameState = null; // "MENU", "SINGLEPLAYER", "MULTIPLAYER"
var playerList = [];
var ballList = [];
var audioPongLose = new Audio("audio/audioPongLose.ogg");
var audioPongWall = new Audio("audio/audioPongWall.ogg");
var audioPongPaddle = new Audio("audio/audioPongPaddle.ogg");
var menuArrow = 0; // Selection arrow in menu.

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

function collisionAction(ball, player) {
	if(player==playerList[0]) // Make sure ball is not inside paddle.
		ball.x = playerList[0].x + playerList[0].width;
	if(player == playerList[1])
		ball.x = playerList[1].x - ball.width;
	ball.speedX = -ball.speedX * 1.10;
}

Game.init();
