
function gameUpdate() {
	
	switch(gameState) {
	
		case "INTRO":
			musicIntro.play();
			if(88 in keysDown) { // x New game
				eventLog.push(flavorTown);
				gameState = "TOWN";
				break;
			}
			break;
	
		case "TOWN":
			musicIntro.pause();
			musicDungeon.pause();
			musicDungeon.currentTime = 5;
			musicTown.play();
			if(38 in keysDown) { // up arrow
				if(menuArrow > 0) {
					menuArrow--;
				}		
				break;
			}
			
			if(40 in keysDown) { // down arrow
				if(menuArrow < 2) {
					menuArrow++;
				}
				break;
			}
			
			if(88 in keysDown) { // x 
			
				if(menuArrow==0) { // Dungeon
					eventLog.push(flavorDungeon);
					gameState = "DUNGEON";
				}
				
				if(menuArrow == 1) { // Healer
					eventLog.push(flavorHealer);
					menuArrow = 0;
					gameState = "HEALER";
				}
				
				if(menuArrow == 2) { // Shop
					eventLog.push(flavorShop);
					menuArrow = 0;
					gameState = "SHOP";
				}
				
				keysDown = {};
				break;
			}
			
			break;
		
		case "DUNGEON":
			musicTown.pause();
			musicTown.currentTime = 0;
			musicDungeon.play();
			if(38 in keysDown) { // up arrow
				if(menuArrow > 0) {
					menuArrow--;
				}		
				break;
			}
			
			if(40 in keysDown) { // down arrow
				if(menuArrow < 1) {
					menuArrow++;
				}
				break;
			}
			
			if(88 in keysDown) { // x
			
				if(menuArrow==0 && player.hp > 0) {
					if(Math.random() > 0.15) {
						monsterList[0] = new Monster("Monster");
						eventLog.push("A weak Monster appears!");
					} else {
						monsterList[0] = new Monster("Boss");
						eventLog.push("A powerful Boss appears!");
					}
					
					gameState = "FIGHT";
				}
				
				else if(menuArrow == 1) { // Go back to town
					eventLog.push(flavorTown);
					menuArrow = 0;
					gameState = "TOWN";
				}
				
				keysDown = {};
				break;
			}
			
			break;
		
		case "FIGHT":
			
			if(38 in keysDown) { // up arrow
				if(menuArrow > 0) {
					menuArrow--;
				}		
				break;
			}
			
			if(40 in keysDown) { // down arrow
				if(menuArrow < 1) {
					menuArrow++;
				}
				break;
			}
			
			if(88 in keysDown) { // x
			
				if(menuArrow==0 && player.hp > 0 && monsterList[0].hp > 0) { // Fight a monster
				
					// Player attacks
					var playerDamage = player.weapon.damage - monsterList[0].armor;
					monsterList[0].hp -= playerDamage;
					eventLog.push("You hit " + monsterList[0].name + " for " + playerDamage + " damage!");
					
					if(monsterList[0].hp < 1) { // If monster is dead
						monsterList[0].dead = true;
						player.gold += monsterList[0].gold;
						eventLog.push(monsterList[0].name + " died! You loot " + monsterList[0].gold + "g");
						if(monsterList[0].name == "Boss") {
							musicDungeon.pause();
							musicWin.play();
							eventLog.push("You defeated the Boss! You win the game!");
						}
						//gameState = "DUNGEON";
						keysDown = {};
						break;
					}
					
					// Monster attacks
					var monsterDamage = monsterList[0].weapon - player.armor.protection;
					player.hp -=  monsterDamage;
					eventLog.push(monsterList[0].name + " hits you for " + monsterDamage + " damage!");
					
					// If player is dead
					if(player.hp < 1) { 
						eventLog.push("You died!");
						//gameState = "DUNGEON";
						keysDown = {};
						break;
					}
					
				}
				
				else if(menuArrow == 1) { // Go back to dungeon
					eventLog.push(flavorDungeon);
					menuArrow = 0;
					gameState = "DUNGEON";
				}
				
				keysDown = {};
				break;
			}
			
			break;
		
		case "HEALER":
			
			if(38 in keysDown) { // up arrow
				if(menuArrow > 0) {
					menuArrow--;
				}		
				break;
			}
			
			if(40 in keysDown) { // down arrow
				if(menuArrow < 1) {
					menuArrow++;
				}
				break;
			}
			
			if(88 in keysDown) { // x
			
				if(menuArrow==0 && player.gold > 0 && player.hp < 10) { // Heal
					eventLog.push("You donated 1 gold and got healed.");
					player.gold--;
					player.hp = 10;
				}
				
				else if(menuArrow == 1) { // Go back to town
					eventLog.push(flavorTown);
					menuArrow = 0;
					gameState = "TOWN";
				}
				
				keysDown = {};
				break;
			}
			
			break;
			
		case "SHOP":
		
			if(38 in keysDown) { // up arrow
				if(menuArrow > 0) {
					menuArrow--;
				}		
				break;
			}
			
			if(40 in keysDown) { // down arrow
				if(menuArrow < 2) {
					menuArrow++;
				}
				break;
			}
			
			if(88 in keysDown) { // x
				
			if(menuArrow == 0 && player.gold >= weaponList[1].price && player.weapon != weaponList[1]) { // Buy weapon
					eventLog.push("You bought a new weapon");
					player.gold -= 10;
					player.weapon = weaponList[1];
					break;
				}
				
				if(menuArrow == 1 && player.gold >= armorList[1].price && player.armor != armorList[1]) { // Buy armor
					eventLog.push("You bought a new armor");
					player.gold -= 10;
					player.armor = armorList[1];
					break;
				}
				
				if(menuArrow == 2) { // Go back to town
					eventLog.push(flavorTown);
					menuArrow = 0;
					gameState = "TOWN";
				}
			
				keysDown = {};
				break;
			}
			
			break;
		
	}
	
}
