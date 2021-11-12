function numberObject(){
//	Number 객체 생성 방법
	var num = new Number(5);	// new를 사용한 Number객체 선언
	console.log('num: ' + num)
	var num2 = 5;				// 숫자리터럴을 입력해서 Number 객체 선언
	console.log('num2: ' + num2)
	
//	document.write(): 브라우저의 내용을 전부 지우고 인수로 지정한 내용을 전부 지우고 출력한다.
//	document.write('<b><i>num + num2 = </i></b>'  + (num+num2))
	var divs = document.querySelectorAll('div');
	divs[0].innerHTML = '<b><i>num + num2 = </i></b>'  + (num + num2);
//	parseInt() 함수는 문자열이나 실수를 정수로 변환한다.
//	정수로 변환할 수 없으면 숫자가 아니기 때문에 NaN을 리턴한다.
	divs[1].innerHTML = 'parseInt("100") = '  + parseInt('100');
//	'100a'와 같이 숫자로 시작하고 변환할 수 없는 문자열이 뒤에 나오면 변환할 수 있는 위치까지 정수로 바꾼다.
	divs[2].innerHTML = 'parseInt("100a") = '  + parseInt('100a');
	divs[3].innerHTML = 'parseInt("a") = '  + parseInt('a');
	divs[4].innerHTML = 'parseInt("3.14") = '  + parseInt('3.14');
	divs[5].innerHTML = 'parseInt("3.14a") + 1 = '  + (parseInt('3.14a') + 1);
	divs[6].innerHTML = 'infinity = '  + (Number.MAX_VALUE + 0.000001e+308);
	divs[7].innerHTML = 'infinity = '  + 10 / 0;
}

