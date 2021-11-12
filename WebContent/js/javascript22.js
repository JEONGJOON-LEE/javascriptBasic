function searchID(){
//	getElementById() 함수는 인수로 지정된 id 속성의 첫 번째 요소 1개를 찾는다.
	var doc = document.getElementById('test');
	doc.innerHTML = 'getElementById() 함수는 DOM에서 id 속성을 탐색한다';
	doc.style.backgroundColor = 'yellow';
}

function searchName(){
//	getElementsByName() 함수는 인수로 지정된 name 속성의 모든 요소를 찾는다. → 결과는 배열로 얻어온다.
	var docs = document.getElementsByName('test');
//	console.log(docs.length);
	
//	docs[0].value = '홍길동';
//	docs[1].value = '임꺽정';
//	docs[2].value = '장길산';
	var name = ['홍길동', '임꺽정', '장길산']
//	for (var i = 0; i < docs.length; i++){
//		docs[i].value = name[i];
//	}
	
//	for (var i in docs){
//		docs[i].value = name[i];
//	}
	
//	var i = 0;
//	for (var doc of name){
//		docs[i++].value = doc;
//	}
	
//	var i = 0;
//	docs.forEach(function (doc) {
//		doc.value = name[i++];
//	})
	
	var i = 0;
//	화살표 함수는 익명 함수를 사용할 때 function 예약어를 생략하고 ()안에 인수만 적은 후 화살표(=>)를 입력한다.
//	인수가 1개일 경우 ()를 생략 가능하고 함수가 실행할 문장이 1문장일 경우 {}를 생략할 수 있다.
	docs.forEach(doc => doc.value = name[i++])
}

function searchTagName(){
//	getElementsByTagName() 함수는 인수로 지정된 모든 태그 요소를 찾는다. 
//	getElementsByName()와 getElementsByTagName() 함수는 실행하면 인수로 지정된 모든 요소를 얻어오고
//	getElementsByName()[index],  getElementsByTagName()[index] 형태로 실행하면 지정된 index에 해당되는 요소만 
//	얻어온다.
	var docs = document.getElementsByTagName('p');
	for(var i = 0; i < docs.length; i++){
		docs[i].style.backgroundColor = 'yellow';
	}
	
	var docs = document.getElementsByTagName('p')[2];
	docs.style.backgroundColor = 'tomato';
}

function searchCSSSelector(){
//	querySelector()		: css 선택자를 사용해 첫 번째 요소 1개를 찾는다. → id속성 탐색에 주로 사용된다.
//	querySelectorAll()	: querySelector() 함수와 똑같이 요소를 찾지만 querySelector() 함수와의 차이점은 모든 요소를 찾는다는 것이다.
//	querySelectorAll(), querySelector() 함수의 인수로 id는 '#'으로 시작하게 class는 '.'으로 시작하게 태그는 아무것도 붙이지 않고 지정한다.
	
//	id 요소 탐색
	var doc = document.querySelector('#test');
	doc.innerHTML = 'querySelector() 함수를 이용한 선택';
	doc.style.color = 'red';
	doc.style.backgroundColor = 'skyblue';
	
//	class 요소 탐색
	var docs = document.querySelectorAll('.test');
	for (var i = 0; i < docs.length; i++) {
		docs[i].style.color = 'yellow';
		docs[i].style.backgroundColor = 'black';
		
	}
	
//	태그 요소 선택
	var tags = document.querySelectorAll('p');
	tags.forEach(function(tag){
		tag.style.color = 'cyan';
		tag.style.backgroundColor = 'magenta';
	})
	
//	id 탐색: getElementById('id'), querySelector('#id')
//	class 탐색: querySelectorAll('.class')
//	tag 탐색: getElementsByTagName('tag'), querySelectorAll('tag')
//	name 탐색: getElementsByTagName('name') 
}

















































