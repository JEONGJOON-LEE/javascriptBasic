const dog = {
	name: '멍멍이',
	sound: '멍멍!',
//	객체의 멤버로 함수를 가질 수 있다.
	/*
	say: function say(){
//		함수에서 객체의 멤버를 참조할 때는 자신의 객체를 의미하는 this를 붙여야 한다.
		console.log(this.sound);
	}
	*/
	say: function() {
		console.log(this.sound);
	}
	/*
	say(){
		console.log(this.sound);
	}
	*/
	/* 
	say: () => {
//		arrow function에서는 this를 사용할 수 없다.
		console.log(this.sound);
	}
	*/
};
dog.say();

const cat = {
		name: '야옹이',
		sound: '야옹!'
};
//	dog 객체의 say() 함수가 cat객체의 say() 함수로 추가된다.
cat.say = dog.say;
cat.say();
console.log('============================================================');

//	getter, setter를 사용하면 객체의 값을 얻어오거나 넣어줄 때 일련의 기능을 실행할 수 있다.
const numbers = {
		a: 1,
		b: 2,
//		getter
		get sum(){
			console.log('sum() 함수가 실행됩니다.');
//			getter는 값을 return 시켜야 한다. => return하지 않으면 undefined가 리턴된다.
			return this.a + this.b;
		}
};
numbers.a = 5;
console.log(numbers);

//	getter 함수를 실행할 때는 ()를 붙이지 않는다.
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
console.log('============================================================');

const bull ={
		_name: '황소',
//		getter
		get name() {
			console.log('_name을 조회합니다.');
			return this._name;
		},
//		setter
		set name(value){
			console.log('name이 바뀝니다. => ' + value)
			this._name = value;
		}
};
console.log(bull.name);		// getter 실행
bull.name = '암소'			// setter 실행
console.log(bull.name);	
console.log('============================================================');

const numbers1 = {
		_a: 1,
		_b: 2,
		sum: 3,
		calculate: function(){
			console.log('calculate');
			this.sum = this.a + this.b;
		},
		get a(){
			return this._a;
		},
		get b(){
			return this._b;
		},
		set a(value){
			this._a = value;
			this.calculate();
		},
		set b(value){
			this._b = value;
			this.calculate();
		}
};
console.log(numbers1.sum);
numbers1.a = 5;
console.log(numbers1.sum);
numbers1.b = 7;
console.log(numbers1.sum);












































