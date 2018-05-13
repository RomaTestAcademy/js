function fight(fighter, improvedFighter, ...point){		
	while(fighter.health > 0 && improvedFighter.health > 0){
		point.some(
			(item) => {
				if(fighter.health > 0 && improvedFighter.health > 0) 
					fighter.hit(improvedFighter, item);
				else 
					return true;
				if(fighter.health > 0 && improvedFighter.health > 0) 
					improvedFighter.doubleHit(fighter, item);
				else 
					return true;				
			}
		);
		
		if(fighter.health <= 0){
			gameOver(improvedFighter.name, fighter.name);
		}
		if(improvedFighter.health <= 0){
			gameOver(fighter.name, improvedFighter.name);
		}
	}
}
function gameOver(won, dead){
		let  message = `GAME OVER \n${won.toUpperCase()} - won \n${dead.toUpperCase()} - dead`;
		console.log(message);
	}