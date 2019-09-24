// Monster class


var m1 = new Monster();

function Monster()
{
	this.speed = 48;
	this.x = 0;
	this.y = 0;
	this.alive = 0;
	this.stamina = 1000;
	this.sleep = 0;

}

// Initializes attributes
Monster.prototype.init = function()
{
	this.speed = 48;
	this.x = 0;
	this.y = 0;
	this.alive = 0;
	this.stamina = 1000;
	this.sleep = 0;
	
}

// Spawns(moves) a monster somewhere on the canvas randomly
Monster.prototype.spawn = function()
{
	this.init();
	this.alive = 1;
	this.x = 32 + (Math.random() * (canvas.width - 64));
	this.y = 32 + (Math.random() * (canvas.height - 64));
}

// Monster AI, chase priorities:
// speed potion > player
// Monster uses stamina while moving, sleeps if stamina drops low
Monster.prototype.AI = function()
{ 
	if ( this.alive == 1 ) 
	{
		if (spotion1.alive == 1 && this.stamina>0)
		{
			followTarget(m1,spotion1);
			this.stamina--;
		}
		else if (p1.alive == 1 && this.stamina>0)
		{
			followTarget(m1,p1);
			this.stamina--;
		}		
		else
		{
			this.sleepf();
		}
		
		// Monster touches speed potion
		if (checkCollision(m1,spotion1))
			spotion1.pickup(m1);
			
	}
	
}

// Monster sleep function, change monster image if sleeping
var sleepStarted;
Monster.prototype.sleepf = function()
{
	
	if (this.sleep == 0 && this.stamina < 2)
	{
		this.sleep = 1;
		sleepStarted = Date.now();
		monsterImage.src = "images/monsterSleep.png";
	}
	
	if (this.sleep == 1)
	{
		var sleepNow = Date.now();
		var sleepDelta = sleepNow - sleepStarted;
		if(sleepDelta>5000)
		{
			this.sleep = 0;
			this.stamina = 1000;
			monsterImage.src = "images/monster.png";
		}
	}
	
}





