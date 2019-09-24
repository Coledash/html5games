// Player class

var p1 = new Player();

function Player() 
{
	
	this.speed = 88;
	this.x = 0;
	this.y = 0;
	this.width = 32;
	this.height = 32;
	this.fish = 0;
	this.alive = 0;
	this.xp = 0;
	
}

// Initializes attributes
Player.prototype.init = function()
{
	this.speed = 88;
	this.x = 0;
	this.y = 0;
	this.width = 32;
	this.height = 32;
	this.fish = 0;
	this.alive = 0;
	this.xp = 0;
	
}

Player.prototype.spawn = function()
{
	this.init();
	this.alive = 1;
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
}

// Bunch of functions for player, these need to be split up!
Player.prototype.getInput = function()
{
	// Player holding up
	if (38 in keysDown && p1.y > canvas.height-canvas.height+32) 
	{ p1.y -= p1.speed * modifier; }
	// Player holding down
	if (40 in keysDown && p1.y < canvas.height-64) 
	{ p1.y += p1.speed * modifier; }
	// Player holding left
	if (37 in keysDown && p1.x > canvas.width-canvas.width+32) 
	{ p1.x -= p1.speed * modifier; }
	// Player holding right
	if (39 in keysDown && p1.x+32 < canvas.width-32)
	{ p1.x += p1.speed * modifier; }
	// Backspace, jump to initialization (new game)
	if (8 in keysDown) { gameState = 1; }
	// Enter, end game (die)
	if (13 in keysDown) { gameState = 3; }
	// q, quit the game (temporarily respawns fish)
	if (81 in keysDown) { 
	//gameState = 0; 
	f1.spawn();
	}
	
	
	// Player touches fish
	if (checkCollision(p1,f1)) 
	{
		f1.pickup(p1);
		if(firstSpawn==0)
		{
			++firstSpawn;
			m1.spawn();
		}
	}
	
	// Player touches speed potion
	if (checkCollision(p1,spotion1)) 
		spotion1.pickup(p1);
	
	// Player touches monster, game over
	if (checkCollision(p1,m1)) 
		gameState = 3;
		
	
}




