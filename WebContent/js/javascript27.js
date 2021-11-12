function strTest1(){
	var str1 = 'string';
	var str2 = 'function';
	var str3 = str1 + str2;
	console.log(str3)
	
//	concat() 함수로 문자열에 인수로 지정한 문자열을 합칠 수 있다.
	var newStr = str1.concat('test', 'java', 'script');
	var newStr = str1.concat(str2);
	console.log(str1)
	console.log(newStr)
	
//	join() 함수 : 인수로 지정한 문자열을 문자열 사이사이에 삽입한다.
	var joinStr = ['java', 'script', 'good'].join(' ');
	console.log(joinStr)
}

function strTest2(){
	var num = 12.34;
	var bool = true;
	var str = '문자열';
	console.log(num + str + bool);
//	boolean 타입의 데이터는 숫자와 연산을 할 경우 true는 1로 false는 0으로 취급되서 연산된다.
	console.log(num + bool + str);
}

function strTest3(){
	var str = prompt('니 이름이 뭐니?', '숫자는 입력하지 마세요')
//	if (!isNaN(Number(str))) {	//	함수로
	if (str.match(/[0-9]/)) {	// 	정규식으로
		alert('숫자는 입력하지 말라니까 ㅡ.ㅡ')
	} else if (str == '홍길동') {
		alert(str + '님 어서오세요.')
	} else {
		alert(str + '넌 누구냐')
	}
	
//	==, !=		=> 데이터만 비교한다. 숫자와 문자를 비교하지 않는다. '1'과 1은 같은 값으로 취급한다.
//	===, !==	=> 데이터와 데이터의 자료형까지 비교한다. '1'과 1은 다른 값으로 취급한다.
	var num = 10;
	console.log(typeof num)
	var str = '10';
	console.log(typeof str)
	
	if(num == str){
		console.log('데이터 타입은 비교하지 않고, 데이터만 비교해서 같다')
	} else {
		console.log('다르다')
	}
	
	if(num === str){
		console.log('데이터 타입은 비교하지 않고, 데이터만 비교해서 같다')
	} else {
		console.log('데이터 타입과 데이터를 비교하기 때문에 서로 다르다')
	}
	
	var oldStr = '홍길동';
	var newStr = new String('홍길동');
	
//	new를 사용해서 만든 객체는 내용이 같더라도 '==='을 사용해서 비교하면 다른 값으로 취급된다.
	if(oldStr == newStr){
		console.log('같다');
	} else {
		console.log('다르다.');
	}
	
	if(oldStr === newStr){
		console.log('같다');
	} else {
		console.log('다르다.');
	}
}

function strTest4(){
//	indexOf() 함수는 문자열의 왼(앞)쪽 부터 인수로 지정된 문자열을 찾아 index를 리턴한다.
//	lastIndexOf() 함수는 문자열의 오른(뒤)쪽 부터 인수로 지정된 문자열을 찾아 index를 리턴한다.
//	indexOf(), lastIndexOf() 모두 인수로 지정한 문자열이 없으면 -1을 리턴한다.
	var name ='홍길동 임꺽정 장길산 일지매 홍길동';
	var str = prompt('검색할 이름을 입력하세요');
	console.log('indexOf() 함수로 검색한 index: ' + name.indexOf(str));
	console.log('lastIndexOf() 함수로 검색한 index: ' + name.lastIndexOf(str));
}

function strTest5(){
	var str = '2021-09-02 (목요오오오일) 2021-07-26';
//	substring(a) 함수는 문자열에서 index가 a인 문자부터 끝까지 추출한다.
//	substring(a,b) 함수는 문자열에서 index가 a인 문자부터 index가 b-1인 문자까지 추출한다.
	console.log(str.substring(11,14));
	var start = str.indexOf(' ');
	var end = str.lastIndexOf(' ');
	console.log('start: ' + start + ', end: ' + end);
	console.log(str.substring(start + 1, end));
	
	var sola = str.substring(0,start)
	var lunar = str.substring(end + 1)
	console.log('양력 ' + sola + '는 음력으로 ' + lunar + '입니다.')
}

function strTest6(){
	var str = '2021-09-02 (목요오오오일) 2021-07-26';
//	split() 함수는 인수로 지정된 구분자를 경계로 문자열을 나눠서 배열로 리턴한다,
	var arr = str.split(' ');
	console.log(arr);
	console.log('양력 ' + arr[0] + '는 음력으로 ' + arr[2] + '입니다.')
	
	
}

























































































