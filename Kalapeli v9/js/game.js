////////////////////////
// Jarin Kalapeli v8 //
////////////////////////

window.requestAnimationFrame = (function() {
    //Check for each browser
    return window.requestAnimationFrame || //Chromium 
    window.webkitRequestAnimationFrame || //Webkit
    window.mozRequestAnimationFrame || //Mozilla Geko
    window.oRequestAnimationFrame || //Opera Presto
    window.msRequestAnimationFrame || //IE Trident?
	
	//Fallback function
    function(callback, element) 
	{ window.setTimeout(callback, 1000 / 60); }
})();

// Function to initialize settings for a new game
var gameInit = function()
{

	p1.init();
	m1.init();

	p1.spawn();
	f1.spawn();
	firstSpawn = 0;

	//var mArray = new Array();
	//mArray[1] = new Monster();
	//mArray[1].speed = 55;
	
};

// Update game objects
var gameUpdate = function()
{
	
	// Run monster AI, chases player
	m1.AI();
	
	// Run the player functions
	p1.getInput();
	
	
};

// Draw everything
var gameDraw = function()
{
	if(bgReady)
		ctx.drawImage(bgImage,0,0);
	
	if(fishReady && f1.alive==1)
		ctx.drawImage(fishImage, f1.x, f1.y);
	
	if(heroReady && p1.alive==1)
		ctx.drawImage(heroImage,p1.x,p1.y);
	
	if(monsterReady && m1.alive==1)
		ctx.drawImage(monsterImage,m1.x,m1.y);
	
	if (spotion1Ready && spotion1.alive==1)
		ctx.drawImage(spotion1Image, spotion1.x, spotion1.y );
	
	
	// Info 
	document.getElementById("fishtext").innerHTML = "Fish count: " + p1.fish; 
	document.getElementById("p1speedtext").innerHTML = "</br>Player speed: " + p1.speed;
	document.getElementById("m1speedtext").innerHTML = "</br>Monster speed: " + m1.speed;
	document.getElementById("p1xptext").innerHTML = "</br>Experience points: " + p1.xp;
	
	
};

// The main game loop
var main = function()
{
	
	// Init game, new game
	if ( gameState == 1 )
	{
		gameInit();
		gameState = 2;

	}
	
	// Game playing
	if ( gameState == 2 )
	{
		var now = Date.now();
		var delta = now - then;
		then = now;
		modifier = delta / 1000;
		gameUpdate();
		gameDraw();

	}
		
	// Player dies
	if ( gameState == 3 ) 
	{ 
		//playerDies();
		gameState = 0;
	}
	
	// Quit game
	if ( gameState == 0)
	{
		
	}
	
	requestAnimationFrame(main);
};


// Start main
gameState = 1;
var then = Date.now();
main();

// Function for button that starts a new game
function startGame()
{
	gameState = 1;
	var then = Date.now();
	main();
}

	
	
	
