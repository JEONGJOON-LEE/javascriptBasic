//	onload 이벤트에 익명 함수를 할당한다.
//	현재 페이지의 모든 내용이 브라우저에 loading되고 난 후 onload 이벤트에 할당한 익명 함수가 실행된다.
onload = function(){
//	alert('onload 이벤트 실행');
//	button 태그를 찾아서 onclick 이벤트에 함수를 할당한다.
//	함수 이름만 써야하고 함수 이름 뒤에 ()를 적으면 자동 실행 함수가 되서 페이지가 loading될 때 자동으로 실행되기 때문에
//	()를 적으면 안된다.
	document.getElementsByTagName('button')[0].onclick = testDate1;
	document.getElementsByTagName('button')[1].onclick = testDate2;
	document.getElementsByTagName('button')[2].onclick = testDate3;
	document.getElementsByTagName('button')[3].onclick = testDate4;
	document.getElementsByTagName('button')[4].onclick = testDate5;
}

function testDate1(){
	var inputDate = document.getElementById('today');
//	컴퓨터 시스템의 오늘 날짜를 얻어온다.
	var date = new Date();
	console.log(date);
//	inputDate.innerHTML = date;							// Thu Sep 02 2021 15:12:33 GMT+0900 (한국 표준시)
//	inputDate.innerHTML = date.toDateString();			// Thu Sep 02 2021
//	inputDate.innerHTML = date.toLocaleDateString();	// 2021. 9. 2.
	inputDate.innerHTML = date.toLocaleString();		// 2021. 9. 2. 오후 3:16:53
//	inputDate.innerHTML = date.toLocaleTimeString();	// 오후 3:16:10
}

function testDate2(){
	var inputDate = document.getElementById('today');
	var date = new Date();
	
//	var year = date.getYear() + 1900;			//	년, 1900을 더해야 한다.
	var year = date.getFullYear()				// 	년
	var month = date.getMonth() + 1;			//  월, 1을 더해야 한다.
	var day = date.getDate();					//	일
	var weekDay = ['일', '월', '화', '수', '목', '금', '토']
	var week = date.getDay();					// 	요일을 숫자로 얻어온다. 일요일(0) ~ 토요일(6)
	var hour = date.getHours();					//	시
	var minute = date.getMinutes();				//	분
	var second = date.getSeconds();				//	초
	var milliSecond = date.getMilliseconds();	//  밀리초	
	
	inputDate.innerHTML = year + '.' + month + '.' + day + '(' + weekDay[week] + ')' + hour + ':' +
	minute + ':' + second + '.' + milliSecond;		
}

function testDate3(){
//	Date 객체를 만들 때 인수로 년, 월, 일을 넣어주면 특정 날짜 객체를 만들 수 있다.
	var year = 2021;
	var month = 9;
	var day = 2;
	var date = new Date(year, month - 1, day);
	console.log(date);
	
	document.getElementById('specific').innerHTML = date.toLocaleDateString();
	document.getElementById('dateInput').value = date.toLocaleString();
}

function testDate4(){
//	날짜 연산을 하기 위해서 id속성이 date1로 지정된 객체에 입력된 문자열을 날짜 데이터로 만든다.
	var date1 = document.getElementById('date1').value;
	console.log(date1);
	console.log(typeof date1);
	var date = new Date(date1);
	console.log(date);
	console.log(typeof date);
	
	var inputDate = document.getElementById('inputDate').value;
	console.log(inputDate);

	console.log(date.getDate() + Number(inputDate));
	console.log(date.getDate() + parseInt(inputDate));
	date.setDate(date.getDate() + Number(inputDate));
	console.log(date.toLocaleDateString());
	document.getElementById('result').value = date.toLocaleDateString();
}

function testDate5(){
	var date2 = document.getElementById('date2').value;
	var endDate = new Date(date2);
	console.log('수료일: ' + endDate.toLocaleDateString())
	var inputDate2 = document.getElementById('inputDate2').value;
	var startDate = new Date(inputDate2);
	console.log('지정일: ' + startDate.toLocaleDateString())
	
//	날짜/시간 데이터를 연산하면 두 시간 차이의 결과를 밀리초 단위로 계산한다.
	var result2 = endDate - startDate;
	console.log(result2 / (24 * 60 * 60 * 1000));
	document.getElementById('result2').value = result2 / (24 * 60 * 60 * 1000);
	
}














































