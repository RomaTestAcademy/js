class ImprovedFighter extends Fighter{
	constructor(name='improvedNoName', power=2, health=200){
		super(name, power, health);
	}
	doubleHit(enemy,point){
		super.hit(enemy, point.map(x =>  x * 2));
	}
}
