function elementCreate(){
//	element(태그)를 만들어서 문서에 추가한다.
//	createElemnt('태그이름'): 인수로 지정된 element를 만든다.
	var div = document.createElement('div'); 	// <div></div>
	
//	element에 속성 추가
	/*
//	createAttribute('속성이름'): 특정 element에 넣어줄 인수로 지정된 속성을 만든다.
	var attr = document.createAttribute('style'); 	// style=;
//	nodeValue: 속성에 속성값을 추가한다.
	attr.nodeValue = 'border: 2px solid blue'; 		//	style='border: 2px solid blue'
//	setAttributeNode(속성): element에 속성을 추가한다.
	div.setAttributeNode(attr);
	*/
	
//	setAttribute('속성이름', '속성값'): element에 속성을 추가한다.
	div.setAttribute('style', 'border: 2px solid red')
	
	
//	appendChild('추가할 태그 또는 문자열'): 인수로 지정된 element를 태그에 추가한다.
	document.body.appendChild(div);
	div.innerHTML = '<marquee>asoidfjoiseaoifs</marquee>';
}