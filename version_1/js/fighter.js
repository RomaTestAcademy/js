class Fighter{
	constructor(name='noName', power=1, health=100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}
	setDamage(damage){
		if(this.health > damage){
			this.health -= damage;
		}else{
			this.health = 0;
		}
		console.log(`${this.name} health: ${this.health}`);
	}
	hit(enemy,point){
		for(let i in point){
			if (enemy.health > 0){
				enemy.setDamage(point[i] * this.power);
			}else{
				this.gameOver(this.name, enemy.name);
				break;
			}			
		}
	}
	gameOver(won, dead){
		let message = `GAME OVER \n${won.toUpperCase()} - won \n${dead.toUpperCase()} - dead`;
		console.log(message);
	}
}
