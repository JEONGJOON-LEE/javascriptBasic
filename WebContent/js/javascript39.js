function addAppend(){
	var fieldset = document.getElementById('addEle')
	var p = document.createElement('p');
//	p.innerHTML = '<b>fieldset 내부의 div 태그 뒤에 추가된다.</b>';
//	p.innerText = '<b>fieldset 내부의 div 태그 뒤에 추가된다.</b>';
//	createTextNode(): 태그 내부의 문자열을 만든다. 태그를 적어도 적용되지 않고 문자열로 추가된다.
	var txt = document.createTextNode('<b>fieldset 내부의 div 태그 뒤에 추가된다.</b>')
	p.appendChild(txt);
	fieldset.appendChild(p);
}

function addBefore(){
	var fieldset = document.getElementById('addEle');
	var p = document.createElement('p');
	
//	var div = document.getElementsByTagName('div')[0];
	var div = document.querySelector('#addEle > div');
	
//	p.innerHTML = '<b>fieldset 내부의 div 태그 앞에 추가된다.</b>';
//	p.innerText = '<b>fieldset 내부의 div 태그 앞에 추가된다.</b>';
//	var txt = document.createTextNode('<b>fieldset 내부의 div 태그 앞에 추가된다.</b>')
//	p.appendChild(txt);
//	textContent: createTextNode() 함수를 실행하고 appendChild() 함수를 실행한 것 처럼 태그 내부에 문자열을 넣어준다.
	p.textContent = '<b>fieldset 내부의 div 태그 앞에 추가된다.</b>';
	
//	insertBefore(a, b): b태그 앞에 a태그를 삽입한다.
	fieldset.insertBefore(p,div);
}

function moveElement(){
//	특정 element를 선택해서 다른 위치에 넣어주면 기존의 위치에서 제거된다. => 이동된다.
	var moveEle = document.getElementById('addEle');
	console.log(moveEle);
//	children[index]: 선택된 element의 index번째 요소에 해당되는 element를 얻어온다.
	console.log(moveEle.children[1]);
	
	var body = document.body;
	body.appendChild(moveEle.children[1])
	
}





















