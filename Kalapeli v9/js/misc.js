// Miscellaneous variables, functions, etc.

// Global variables
var modifier = 0;
var firstSpawn = 0;

// Game state.
// 1 = game initialization, new game
// 2 = playing
// 3 = game over, game loop continues
// 0 = quit game, need to refresh page to play again
var gameState = 1;


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e)
{ keysDown[e.keyCode] = true; },false);

addEventListener("keyup", function (e)
{ delete keysDown[e.keyCode]; },false);
/*
addEventListener("keypress", function(e)
{ keysDown[e.keyCode] = true; },false);
*/

// Function to check if two objects collide
function checkCollision(a,b)
{

	if 
	(
		a.x <= (b.x + 30) 
		&& b.x <= (a.x + 30)
		&& a.y <= (b.y + 30)
		&& b.y <= (a.y + 30)
	)  { return true }
	
	return false;
	
	
}

// Follow target, moves first object towards the second object
function followTarget(a,b)
{			
	if (a.x > b.x) { a.x -= a.speed * modifier; }
	if (a.x < b.x) { a.x += a.speed * modifier; }
	if (a.y < b.y) { a.y += a.speed * modifier; }
	if (a.y > b.y) { a.y -= a.speed * modifier; }

}
			
// Returns true if object is alive
function checkAlive(a)
{ if (a.alive = 1) return true } 




