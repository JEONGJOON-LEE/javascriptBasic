//	클래스
class Animal{
	constructor(type, name, sound){
		this.type = type;
		this.name = name;
		this.sound = sound;
	}
	say(){
		console.log(this.sound);
	}
}

//	클래스 멤버 함수를 만들면 자동으로 클래스의 prototype에 등록된다
console.log(Animal.prototype.say);

const dog = new Animal('개', '멍멍이', '멍멍')
const cat = new Animal('고양이', '야옹이', '야옹')

dog.say()
cat.say()
console.log('====================================================1=====================================================')

//	상속 => extends를 사용한다.
class Dog extends Animal{
	constructor(name, sound){
		super('개', name, sound)
	}
}

class Cat extends Animal{
	constructor(name, sound){
		super('고양이', name, sound)
	}
}

const dog1 = new Dog('맹맹이', '맹맹')
const cat1 = new Cat('어흥이', '어흥')

dog1.say()
cat1.say()
console.log('====================================================2=====================================================')


class Food{
	constructor(name){
		this.name = name;
		this.brands = [];
	}
	
	addBrands(brand){
		this.brands.push(brand);
	}
	
	print(){
		console.log(`${this.name}을(를) 파는 음식점들: ` + this.brands.join(', '));
	}
};

const pizza = new Food('피자');
pizza.addBrands('피자헛');
pizza.addBrands('도미노 피자');
pizza.addBrands('미스터 피자');
pizza.print();

const chicken = new Food('치킨');
chicken.addBrands('굽네치킨');
chicken.addBrands('네네치킨');
chicken.addBrands('교촌치킨');
chicken.print();













