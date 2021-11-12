//	변수 선언 방법
//	var는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.
var name = 'hong';	//	변수 선언
console.log('name: ' + name);

// 	같은 이름으로 변수를 한 번 더 선언했음에도 불구하고 에러가 발생되지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.
var name = 'javascript';	//	변수 선언
console.log('name: ' + name);

//	이런 방식은 유연한 변수 선언으로 간단한 테스트에는 편리할 수 있으나 코드의 양이 많아진다면 어디에서 어떻게 사용될지 파악하기 힘들고
//	변수에 저장된 값이 변경될 우려가 있다.
//	그래서 ES6 이후 이를 보완하기 위해서 추가된 변수 선언 방식 => let, const

let id = 'lim';
console.log('id: ' + id);

//	let id = 'kim';				
//	console.log('id: ' + id);		// Uncaught SyntaxError: Identifier 'id' has already been declared 오류

const test = 'test';				// 상수 선언
console.log('test: ' + test);

// 	let 뿐만 아니라 const를 사용해서 변수를 선언해도 변수가 이미 선언되었다는 에러 메시지가 출력된다.
//	const test = 'java';			
//	console.log('test: ' + test);	//	Uncaught SyntaxError: Identifier 'test' has already been declared

//	선언된 상수에 값을 할당하면 아래와 같은 에러 메시지가 콘솔에 출력된다.
// test = 'javascript';				//	Uncaught TypeError: Assignment to constant variable.

//	let과 const는 변수 재선언이 되지 않는다는 공통점이 있다.
//	let(일반변수느낌) => 선언된 변수에 데이터를 재할당 할 수 있다. / const(상수) => 데이터를 프로그램 중간에서 재할당 할 수 없다. 

//	전역 변수: 함수 외부에서 선언한 변수로 스크립트의 모든 함수에서 공통적으로 변수에 저장된 데이터를 사용할 수 있다. 
//				=> var를 붙이지 않고 변수를 선언하면 전역변수로 인식 된다.
// 	지역 변수: 함수 내부에서 선언한 변수로 선언된 함수 내부(var) 또는 { } 블록 내부 (let, const)에서만 변수에 저장된 데이터를 사용할 수 있다.
//				전역 변수와 같은 이름의 지역 변수를 사용해야 한다면 지역 변수를 선언할 때 반드시 var를 붙여서 선언해야 한다.

var variable = 10;	// 	전역 변수

//	var로 선언 변수는 function scope이므로 선언된 함수 외부에서 사용할 수 없다.
//	let으로 선언한 변수는 block scope이므로 선언된 { }블록 외부에서 사용할 수 없다.
//	console.log('함수 외부의 i: ' + i);			// 	에러발생
function scopeTest(){
//	alert('scopeTest() 실행')
//	console.log('scopeTest() 실행')
	var a = 0		// 	지역 변수
	if(true){
		var b = 5;	//	지역 변수
//		var로 선언한 변수는 function scope이므로 선언된 함수 내부에서는 자유롭게 사용할 수 있다.
//		let으로 선언한 변수는 block scope이므로 선언된 { }블록 외부에서 사용할 수 없다.
		console.log('for 외부의 i: ' + i);		//	undefined	=> 	변수가 선언되었지만 데이터가 할당되지 않았다.
		for(var i = 0; i < 5; i++){
			console.log('for 내부의 i: ' + i);
		}
	}
	console.log('a : ' + a);
	console.log('b : ' + b);
	console.log('scopeTest() 함수 외부 variable : ' + variable);
	var variable = 999;
	console.log('scopeTest() 함수 외부 variable : ' + variable);

}
// variable(전역변수)는 함수내부에서 어떤 작업을 해 놓아도 함수 밖에서 출력하면 초기값이 출력된다.
console.log('>> scopeTest() 함수 외부 variable : ' + variable);


function test1() {
	variable += 5;
//	getElementById(): html문서에서 함수의 인수로 지정된 id 속성을 가지는 객체(태그)를 얻어온다.
//	alert(window.document.getElementById('var1'));
//	console.log(window.document.getElementById('var1'));
//	innerHTML: getElementById() 함수로 얻어온 태그 내부의 텍스트를 의미한다.
//	window.document.getElementById('var1').innerHTML = '꺄~~~~~';
	document.getElementById('var1').innerHTML = '<b style="color: red; background: yellow">' + variable + '</b>';
}

function test2(){
	console.log(variable);
//	함수 내부에서 아래와 같이 var를 사용해서 전역변수와 같은 이름의 지역변수를 선언하면 함수 내부의 variable이라는 이름을 가지는 지역 변수로
//	취급되지만, 변수명 앞에 var를 사용하지 않으면 전역변수를 의미한다.
//	지역 변수가 선언되기 전에 지역 변수를 사용하면 undefined가 출력된다.
	variable = 5;
	console.log(variable);
}

function test3() {
	var variable2 = variable + 3;
	document.getElementById('var2').innerHTML = '<b style="color: red; background: yellow">' + variable2 + '</b>';
}

function test4(){
	var variable3 = '문자';
	console.log(typeof variable3);	//	string 
	variable3 = 5;
	console.log(typeof variable3);	//	number 
	variable3 = 5.5;
	console.log(typeof variable3);	//	number 
	variable3 = true;
	console.log(typeof variable3);	//	boolean
	variable3 = null;
	console.log(typeof variable3);	//	object, null도 객체로 취급한다.
	variable3 = [1, 2, 3];
	console.log(typeof variable3);	//	object
	variable3 = {name: '홍길동'};
	console.log(typeof variable3);	//	object
	variable3 = function(name) {
		console.log(name + '님 안녕하세요');
		return name;
	}
	console.log(typeof variable3);	//	function
	
//	익명 함수 실행하기 => 함수를 할당한 변수 이름으로 실행한다. => 변수 이름이 함수 이름처럼 사용된다.
	variable3('홍길동');
	var result = variable3('임꺽정');
	console.log(result);
}





























