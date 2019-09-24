// Shop object

function Shop() {

	this.name = null;
	this.flavor = null;
	this.inventory = [];
	
	this.draw = function() {
			
		// Location name
		ctx.font="18pt impact";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText(this.name, canvas.width*0.25, canvas.height*0.25 - 75);
		
		// Location graphics
		ctx.strokeStyle = "white";
		ctx.lineWidth = 3;			
		var x = canvas.width*0.25;
		var y = canvas.height*0.22;			
		// Head
		ctx.beginPath();
		ctx.arc(x, y, 20, 0, Math.PI*2, true);
		ctx.stroke();			
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
		// Table
		ctx.fillRect(x-50, y+55, 100, 50);

		// Choices
		ctx.fillText("Buy " + this.inventory[0].name + " " + weaponList[1].price + "g",
			canvas.width*0.75, canvas.height*0.25);
		ctx.fillText("Buy " + this.inventory[1].name + " " + armorList[1].price + "g", 
			canvas.width*0.75, canvas.height*0.25 + 35);
		ctx.fillText("Go back", canvas.width*0.75, canvas.height*0.25 + 70);
		ctx.fillText(">", canvas.width*0.75 - 100, canvas.height*0.25 + menuArrow*35);
	
	}
	
} 
