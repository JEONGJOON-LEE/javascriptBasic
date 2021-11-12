function Animal (type, name, sound){
//	멤버 변수 초기화
	this.type = type;
	this.name = name;
	this.sound = sound;
//	멤버 함수
//	this.say = function(){
//		console.log(this.sound)
//	};
};

//	함수를 클래스 내부에서 선언하면 객체가 생성될 때 마다 같은 함수가 만들어지므로
//	prototype으로 함수를 선언하면 객체가 생성될 때 마다 같은 함수가 반복적으로 생성되지 않는다.
Animal.prototype.say = function(){
		console.log(this.sound)
};

const dog = new Animal('개', '멍멍이', '멍멍')
const cat = new Animal('고양이', '야옹이', '야옹')

//	prototype으로 선언하지 않으면 함수를 만들어서 각각의 객체에 넣어줘야 한다.
//function say(){
//	console.log(this.sound)
//};
//dog.say = say;
//cat.sat = say;

dog.say()
cat.say()
console.log('====================================================1=====================================================')

//	상속
//	부모 클래스 Animal1을 정의한다.
function Animal1 (type, name, sound){
	this.type = type;
	this.name = name;
	this.sound = sound;
}

//	부모 클래스의 prototype에 say() 함수를 추가한다.
Animal1.prototype.say = function(){
	console.log(this.sound)
};

//	자식 클래스 Dog를 정의한다.
function Dog(name, sound){
//	부모 클래스 Animal1을 호출해서 자식 객체를 초기화할 데이터를 전달한다.
	Animal1.call(this, '개', name, sound);
}
	
//	자식 클래스 Cat을 정의한다.
function Cat(name, sound){
//	부모 클래스 Animal1을 호출해서 자식 객체를 초기화할 데이터를 전달한다.
	Animal1.call(this, '고양이', name, sound);
}

//	부모 클래스 Animal1 prototype을 자식 객체에 넣어준다. => 상속시킨다.
Dog.prototype = Animal1.prototype;
Cat.prototype = Animal1.prototype;

//	자식 클래스 객체를 생성하고 부모 클래스로 부터 상속받은 함수를 실행한다.
const dog1 = new Dog('맹맹이', '맹맹')
const cat1 = new Cat('어흥', '어흥')

dog1.say()
cat1.say()


















	
	