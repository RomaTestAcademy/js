class Fighter{
	constructor(name='noName', power=1, health=100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}
	setDamage(damage){
		this.health -= damage;
		console.log(`${this.name} health: ${this.health}`);
	}
	hit(enemy, point){
		let damage = point * this.power;
		enemy.setDamage(damage);
	}
}
