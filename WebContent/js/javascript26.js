function evalTest(){
	var obj = document.getElementsByName('evalValue')[0];
	console.log(obj);
	console.log(obj.value);
	console.log(typeof obj.value);
	
	if(confirm('연산식을 올바르게 입력했나요?\n입력한 연산식: ' + obj.value)){
		
//		eval() 함수는 인수로 지정된 문자열 형태인 자바스크립트 코드를 실행한다.
//		document.getElementsByTagName('span')[0].innerHTML = '<h2>계산 결과: ' + eval(obj.value) + '</h2>'
		document.querySelectorAll('span')[0].innerHTML = '<h2>계산 결과: ' + eval(obj.value) + '</h2>'
		
	} else {
		obj.value = '';
		obj.focus();
	}
}

function calTest(){
	var docs = document.querySelectorAll('.cal');
	var str = '';
	for (var doc of docs) {
		console.log(doc.value);
		str += doc.value;
	}
	console.log(str);
	console.log(typeof str);
	document.querySelectorAll('span')[1].innerHTML = '<h2>계산 결과: ' + eval(str) + '</h2>'
}