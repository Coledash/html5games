
function Monster(name) {

	this.name = name;
	this.hp = 1;
	this.weapon = 0;
	this.armor = 0;
	this.gold = 0;
	this.dead = false;
	
	switch(name) {
		
		case "Monster":
			this.hp = 5;
			this.weapon = 1;
			this.armor = 0;
			this.gold = 2;
			break;
		
		case "Boss":
			this.hp = 10;
			this.weapon = 2;
			this.armor = 1;
			this.gold = 10;
			break;
		
	}
	
	this.draw = function() {
		
		switch(this.name) {
			
			case "Monster":
				ctx.strokeStyle = "white";
				ctx.lineWidth = 3;
				
				var x = canvas.width*0.25;
				var y = canvas.height*0.25;
				
				if(this.dead==false) {
				// Head
				ctx.beginPath();
				ctx.arc(x, y, 20, 0, Math.PI*2, true);
				ctx.stroke(); }
				
				// Body
				ctx.beginPath();
				ctx.moveTo(x, y+20);
				ctx.lineTo(x, y+20+50);
				ctx.stroke();
				
				// Hands
				ctx.beginPath();
				ctx.moveTo(x, y+20+20);
				ctx.lineTo(x+20, y+20+20);
				ctx.moveTo(x, y+20+20);
				ctx.lineTo(x-20, y+20+20);
				ctx.stroke();
				
				// Legs
				ctx.beginPath();
				ctx.moveTo(x, y+20+50);
				ctx.lineTo(x+20, y+20+50+20);
				ctx.moveTo(x, y+20+50);
				ctx.lineTo(x-20, y+20+50+20);
				ctx.stroke();
				
				break;
				
			case "Boss":
				ctx.strokeStyle = "white";
				ctx.lineWidth = 3;
				
				var x = canvas.width*0.25;
				var y = canvas.height*0.25-25;
				var arcHead = 30;
				var lineBody = 75;
				var lineHands = 45;
				var lineLegs = 30;
				
				if(this.dead==false) {
				// Head
				ctx.beginPath();
				ctx.arc(x, y, arcHead, 0, Math.PI*2, true);
				ctx.stroke(); }
				
				// Body
				ctx.beginPath();
				ctx.moveTo(x, y+arcHead);
				ctx.lineTo(x, y+arcHead+lineBody);
				ctx.stroke();
				
				// Hands
				ctx.beginPath();
				ctx.moveTo(x, y+arcHead+lineBody/2);
				ctx.lineTo(x+lineHands, y+arcHead+lineBody/2);
				ctx.moveTo(x, y+arcHead+lineBody/2);
				ctx.lineTo(x-lineHands, y+arcHead+lineBody/2);
				ctx.stroke();
				
				// Legs
				ctx.beginPath();
				ctx.moveTo(x, y+arcHead+lineBody);
				ctx.lineTo(x+lineLegs, y+arcHead+lineBody+lineLegs);
				ctx.moveTo(x, y+arcHead+lineBody);
				ctx.lineTo(x-lineLegs, y+arcHead+lineBody+lineLegs);
				ctx.stroke();
				
				break;
		
		}
		
	}
	
}
