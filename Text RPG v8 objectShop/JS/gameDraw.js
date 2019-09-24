
function gameDraw() {
	
	// Clear screen
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	if(gameState != "INTRO") {
		// Lines dividing the UI
		ctx.fillStyle = "white";
		ctx.fillRect(canvas.width/2, 0, 5, canvas.height/2);
		ctx.fillRect(0, canvas.height/2, canvas.width, 5);
		ctx.fillRect(0, canvas.height - (canvas.height/12), canvas.width, 5);
		
		// Show player stats in bottom
		ctx.font="16pt impact";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("Health: " + player.hp, canvas.width*0.20, canvas.height - 8);
		ctx.fillText("Gold: " + player.gold, canvas.width*0.40, canvas.height - 8);
		ctx.fillText("" + player.weapon.name, canvas.width*0.60, canvas.height - 8);
		ctx.fillText("" + player.armor.name, canvas.width*0.80, canvas.height - 8);
		//ctx.fillText("Player HP: " + player.hp + " Gold: " + player.gold + " Weapon: " + player.weapon +
		//" Armor: " + player.armor, canvas.width/2, canvas.height - 8);
		
		// Event log
		ctx.font="20pt impact";
		ctx.fillStyle = "white";
		ctx.textAlign = "left";
		ctx.fillText(eventLog[eventLog.length-1], 10, canvas.width*0.7-25);
		ctx.font="12pt impact";
		for(var y = 2; y < 5; y++) {
			if(eventLog.length < y) break;
			ctx.fillText(eventLog[eventLog.length-y], 10, canvas.width*0.7-(y*30));
		}
		
	}
	
	switch(gameState) {
		
		case "INTRO":
			// Title text
			ctx.font="40pt impact";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Text RPG", canvas.width*0.50, canvas.height*0.25);
			ctx.font="24pt impact";
			ctx.fillText("> New game", canvas.width*0.50, canvas.height*0.50);
			ctx.font="16pt impact";
			ctx.fillText("Keyboard controls: x, arrow keys", canvas.width*0.5, canvas.height*0.90);
			break;
			
		case "TOWN":
			// Location text
			ctx.font="24pt impact";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Town", canvas.width*0.25, canvas.height*0.25 - 75);
			
			// Location image
			
			// First house roof
			ctx.beginPath();
			var x = canvas.width*0.35;
			var y = canvas.height*0.25;
			ctx.moveTo(x-25, y);
			ctx.lineTo(x, y-25);
			ctx.lineTo(x+25, y);
			ctx.closePath();
			ctx.fill();
			// House body
			ctx.fillRect(x-20, y, 40, 20);
			
			// Second house roof
			ctx.beginPath();
			var x = canvas.width*0.15;
			var y = canvas.height*0.20;
			ctx.moveTo(x-25, y);
			ctx.lineTo(x, y-25);
			ctx.lineTo(x+25, y);
			ctx.closePath();
			ctx.fill();
			// House body
			ctx.fillRect(x-20, y, 40, 20);
			
			// Third house roof
			ctx.beginPath();
			var x = canvas.width*0.20;
			var y = canvas.height*0.40;
			ctx.moveTo(x-25, y);
			ctx.lineTo(x, y-25);
			ctx.lineTo(x+25, y);
			ctx.closePath();
			ctx.fill();
			// House body
			ctx.fillRect(x-20, y, 40, 20);
			
			// Choices 
			ctx.fillText("Dungeon", canvas.width*0.75, canvas.height*0.25);
			ctx.fillText("Healer", canvas.width*0.75, canvas.height*0.25 + 35);
			ctx.fillText("Shop", canvas.width*0.75, canvas.height*0.25 + 70);
			ctx.fillText(">", canvas.width*0.75 - 100, canvas.height*0.25 + menuArrow*35);
			
			break;
		
		case "DUNGEON":
			// Location text
			ctx.font="24pt impact";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Dungeon", canvas.width*0.25, canvas.height*0.25 - 75);
			
			// Location graphics
			var x = canvas.width*0.25;
			var y = canvas.height*0.35;
			// Wall
			ctx.fillRect(x-50, y-25, 100, 50);
			// Left tower
			ctx.fillRect(x-85, y-50, 40, 75);
			ctx.beginPath();
			ctx.moveTo(x-90, y-50);
			ctx.lineTo(x-65, y-75);
			ctx.lineTo(x-40, y-50);
			ctx.closePath();
			ctx.fill();
			// Right tower
			ctx.fillRect(x+45, y-50, 40, 75);
			ctx.beginPath();
			ctx.moveTo(x+90, y-50);
			ctx.lineTo(x+65, y-75);
			ctx.lineTo(x+40, y-50);
			ctx.closePath();
			ctx.fill();
			
			// Choices
			ctx.fillText("Explore", canvas.width*0.75, canvas.height*0.25);
			ctx.fillText("Go back", canvas.width*0.75, canvas.height*0.25 + 35);
			ctx.fillText(">", canvas.width*0.75 - 100, canvas.height*0.25 + menuArrow*35);

			break;
			
		case "FIGHT":
			monsterList[0].draw();
			ctx.font="24pt impact";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Battle", canvas.width*0.25, canvas.height*0.25 - 75);
			// Choices
			ctx.fillText("Fight", canvas.width*0.75, canvas.height*0.25);
			ctx.fillText("Go back", canvas.width*0.75, canvas.height*0.25 + 35);
			ctx.fillText(">", canvas.width*0.75 - 100, canvas.height*0.25 + menuArrow*35);
			break;	
		
		case "HEALER":
			// Location text
			ctx.font="24pt impact";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Healer", canvas.width*0.25, canvas.height*0.25 - 75);
			
			// Location graphics
			var x = canvas.width*0.25;
			var y = canvas.height*0.25;
			ctx.strokeStyle = "white";
			ctx.lineWidth = 3;
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
			// Legs
			ctx.beginPath();
			ctx.moveTo(x, y+20);
			ctx.lineTo(x+20, y+20+50+20);
			ctx.lineTo(x-20, y+20+50+20);
			ctx.closePath()
			ctx.fill();
			
			// Choices
			ctx.fillText("Heal.", canvas.width*0.75, canvas.height*0.25);
			ctx.fillText("Go back", canvas.width*0.75, canvas.height*0.25 + 35);
			ctx.fillText(">", canvas.width*0.75 - 100, canvas.height*0.25 + menuArrow*35);

			break;
			
		case "SHOP":
		
			shopList[0].draw();

			break;	
		
	}
	
}
