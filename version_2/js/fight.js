function fight(fighter, improvedFighter, ...point){		
	while(fighter.health > 0 && improvedFighter.health > 0){
		try {
			point.forEach(
				(item) => {
					if(fighter.health > 0){
						fighter.hit(improvedFighter, item);
					}
					else{
						let BreakException = {'won':improvedFighter.name, 'dead':fighter.name};
						throw BreakException;
					} 
					if(improvedFighter.health > 0){
						improvedFighter.doubleHit(fighter, item);
					}
					else {
						let BreakException = {'dead':fighter.name, 'won':improvedFighter.name};
						throw BreakException;
					}	
				}
			);
		}catch (e) {
			message = `GAME OVER \n${e.won.toUpperCase()} - won \n${e.dead.toUpperCase()} - dead`;
			console.log(message);
		}
	}	
}
