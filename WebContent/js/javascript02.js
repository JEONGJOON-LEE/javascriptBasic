'use strict'
//	var를 이용해서 선언한 변수는 프로그램 어디에서 선언하던 항상 맨 위로 끌어올려진다.
//  age 변수가 hoisting되서 변수를 선언하는 문장 이전에도 사용이 가능하다.
//	변수가 선언만 되고 값이 할당되지 않았으면 'undefined'가 출력된다.
console.log('age= ' + age);	// 'undefined'

//////////////////////	변수(Variable) 	//////////////////////
//	let => ES6에서 추가
//	: block scope	=>	{} 내부의 내용은 {} 외부에서 접근할 수 없다.
//	글로벌 변수는 {} 내부, 외부 모두 사용 가능하다.

let globalName = 'global name';
{
	let name = '홍길동';
	console.log('name = ' + name);
//	let	name = '임꺽정';	=> let으로 선언한 변수를 또 선언하면 에러가 발생된다.
	name = '임꺽정';
	console.log('name = ' + name);
	console.log('globalName = ' + globalName);
}
console.log('name = ' + name);	// 아무런 값도 출력되지 않는다.
console.log('globalName = ' + globalName);
console.log('==========================================================')


//	var
//	variable hoisting	=>	아래에 선언된 variable 선언을 맨 위로 끌어올린다.
//	어디에 선언했냐에 상관없이 항상 제일 위로 변수 선언을 끌어올리는 것
//	var는 block scope를 사용하지 않고 function scope를 사용한다. => 유연성↑

console.log('age= ' + age);
age = 100;
console.log('age= ' + age);

var age;	//	variable hoisting이 발생되서 이 문장이 소스 코드 맨위로 올라간다.
console.log('==========================================================')


//////////////////////	variable type	//////////////////////
//	primitive type(기본 자료형, 원시 자료형)	=> 	single item : Number, String, Boolean, Null, Undefined, Symbol(ES6~)
//	object(객체), box container
//	function: 변수에 할당가능, 함수의 인수로 전달가능, 리턴가능

//	constant
//	값을 할당한 다음 값을 변경할 수 없는 데이터 타입, 보안성
const maxNumber = 5;
//	상수로 선언된 변수에 값을 할당하면 Assignment to constant variable. 에러가 발생된다.
// 	maxNumber = 100;

const count = 17;
const size = '크다';
//	템플릿 => ' ` ' (esc밑, 그레이브)를 사용한다. => 데이터는 ${ ~ } 사이에 출력한다.
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
console.log(infinity);
const nagativeInfinity = -1 / 0;
console.log(nagativeInfinity);
const nan = 'not a number' / 2;
console.log(nan)

//	symbol => 고유한 식별자를 만들 때 사용한다.
const symbol1 = Symbol('id');
console.log(typeof symbol1);
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
console.log('==========================================================')

//	dynamic typing	=> 변수에 저장되는 데이터의 타입에 맞춰 변수의 타입이 결정된다.
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

//	object
const obj = {name: '홍길동', age: 20};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
obj.age = 21
console.log(obj.age);
















