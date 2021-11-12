//	객체 선언 => function 사용
function Clazz(){
//	객체를 구성하는 멤버를 선언할 때 앞에 this를 붙여주면 객체 외부에서 접근이 가능(public)하고, this를 붙이지 않으면 객체 외부에서 접근이 불가능(private)하다.
	this.name = '홍길동';	// public
	age = 20;				// private
//	age에 저장된 데이터를 리턴하는 함수, 변수에 함수를 할당하는 익명 함수로 만든다.
	this.getAge = function(){
		return age;
	}
}

//	prototype => 객체 외부에서 객체의 함수를 정의한다.
//	객체이름.prototype.변수 = 익명함수()
Clazz.prototype.toString = function(){
//	객체 외부에서 함수를 정의할 때 this로 선언한 멤버 변수는 this를 붙여서 접근해야 한다.
	console.log(this.name + '님은 ' + age + '살 입니다.')
}

//	객체 선언 => JSON
var Clazz2 = {
		name: '임꺽정',
		age: 35,
		getAge: function(){
//			함수 내부에서 JSON형식을 사용한 객체의 key를 참조하려면 반드시 객체 이름에 '.'을 찍어서 접근해야 한다.
			return Clazz2.age;
		}
}


function objectTest(){
//	function을 사용해서 선언한 객체는 new를 사용해서 만든다.
	var clazz = new Clazz();
//	객체 외부에서 객체의 멤버에 접근하려면 생성된 객체에 '.'을 찍고 접근한다.
	console.log('clazz.name: ' + clazz.name);
	console.log('clazz.age: ' + clazz.age);		//	선언 시 this를 붙이지 않아서 객체 외부에서 접근할 수 없다. 
	console.log('clazz.age: ' + clazz.getAge());
	clazz.toString();
	console.log('====================================================')
	
//	JSON을 사용한 객체는 new를 사용해서 생성하지 않고 '.'을 찍어 바로 접근할 수 있다.
	console.log('Clazz2.name: ' + Clazz2.name);
	console.log('Clazz2.age: ' + Clazz2.age);
	console.log('Clazz2.age: ' + Clazz2.getAge());
	console.log(Clazz2.namee + '님은 ' + Clazz2.age + '살 입니다.')
	console.log('====================================================')
	
//	JSON을 가장한 문자열 => key부분은 반드시 문자열로 만든다.
	var myJSON ='{"name":"장길산", "age" : 31, "addr": "서울"}';
	console.log(typeof myJSON)
	console.log(myJSON)
	
//	JSON.parse(): 인수로 지정된 JSON을 가장한 문자열을 JSON 객체로 변환한다.
	var obj = JSON.parse(myJSON);
	console.log(typeof obj)
	console.log(obj)
	
	console.log(obj.name);
	console.log(obj.age);
	console.log(obj.addr);
	document.querySelectorAll('h1')[0].innerHTML = obj.name;
}































