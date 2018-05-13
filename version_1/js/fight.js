function fight(fighter, improvedFighter, ...point){		
	while(true){
		if(fighter.health > 0 && improvedFighter.health > 0) 
			fighter.hit(improvedFighter, point);
		else 
			break;
		if(fighter.health > 0 && improvedFighter.health > 0) 
			improvedFighter.doubleHit(fighter, point);
		else 
			break;
	}
}