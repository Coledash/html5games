// Items on ground class

var f1 = new Item();
f1.itemtype = "fish";
var spotion1 = new Item();
spotion1.itemtype = "speedpotion";

function Item() 
{
	
	this.itemtype = "";
	this.x = 0;
	this.y = 0;
	this.alive = 0;
	this.r = 32;
	
	
}


// Player picks up an item
Item.prototype.pickup = function(pickupper)
{
	// Pick up a fish
	if(this.itemtype=="fish" && this.alive == 1)
	{
		this.alive = 0
		++pickupper.fish;
		++pickupper.xp;
		f1.spawn();
		
		// Sometimes spawns a speed potion
		if ( Math.random() <= 0.50 && spotion1.alive == 0 )
			spotion1.spawn();
				
	}
	
	// Pickup speed potion
	if(this.itemtype=="speedpotion" && this.alive == 1)
	{
		this.alive = 0;
		pickupper.speed += 8;
		++pickupper.xp;
	}
	
}	

// Spawns(moves) a fish somewhere on the canvas randomly
Item.prototype.spawn = function()
{

	// Spawn fish
	if (this.itemtype=="fish")
	{
		this.alive = 1;
		this.x = 32 + (Math.random() * (canvas.width - 64));
		this.y = 32 + (Math.random() * (canvas.height - 64));
	}
		
	// Spawn speed potion
	if (this.itemtype=="speedpotion")
	{
		this.alive = 1;
		this.x = 32 + (Math.random() * (canvas.width - 64));
		this.y = 32 + (Math.random() * (canvas.height - 64));
	}
		
	
}













