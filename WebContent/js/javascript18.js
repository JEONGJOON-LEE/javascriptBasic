function func1(){
	alert('명시적 함수');
}

//	익명 함수를 실행하려면 익명 함수가 할당된 변수 이름을 함수 이름처럼 사용하면 된다.
var func2 = () => alert('익명 함수');	//arrow function

//	함수 리터럴 => 함수의 인수로 함수를 전달하는 함수
function func3(){
//	literalTest() 함수를 호출한다.
//	literalTest() 함수를 호출할 때 함수의 인수 literal로 익명 함수를 익명함수를 만들어 전달한다.
	literalTest(
		function(msg){
			alert(msg);
		}
	);
};

function literalTest(literal){
//	함수의 인수 literal로 넘어온 익명함수의 인수 msg로 '함수 리터럴 입니다.'가 전달되서 실행된다.
	literal('함수 리터럴 입니다.');
}

//	자바스크립트 함수는 실인수와 가인수의 개수가 다르더라도 정상적으로 실행된다. => 함수 오버로딩은 지원하지 않는다.
// 	함수가 호출될 때 넘어오는 인수를 저장할 변수가 모자라면 모자라는 대로, 남으면 남는대로 실행된다.
//	자바스크립트의 함수가 호출될 때 전달되는 인수는 arguments 객체로 먼저 전달되고 arguments객체에 저장된 인수 목록에서 가인수의 개수만큼 반복하며 arguments 객체에 저장된 데이터를 꺼내서 넣어준다.
function varTest(){
	console.log('함수로 전달되는 데이터의 개수: ' + arguments.length);
	for(var i = 0; i < arguments.length; i++){
		console.log('arguments[' + i + '] = ' + arguments[i]);
	}
}

function goodEdu(good){
	console.log(good)
}

//	클로저 => 함수가 생성될 당시의 모든 변수를 기억해두었다가 함수가 호출될 때 사용한다. 참조할 수 없는 위치에 있어도 사용이 가능하다.
function closureTest(val){
	console.log('val: ' + val);
	function addVal(msg){
		console.log('msg: ' + msg);
	}
//	반드시 클로저 내부에서 정의한 함수를 리턴시켜야 클로저 내부의 함수가 실행된다.
	return addVal;
}

//	클로저를 호출할 때 인수로 전달한 값(자바스크립트)이 클로저의 인수(val)가 되고,
//	클로저가 호출될 때 전달된 인수(good.value)가 클로저 내부 함수의 인수(msg)로 전달된다.
var goodEdu = closureTest('자바스크립트');


















