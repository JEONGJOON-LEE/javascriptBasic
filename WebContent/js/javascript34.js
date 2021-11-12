function searchParents(){
	var child = document.getElementsByTagName('p')[0];
	console.log(child);
	console.log(child.innerHTML);	// 텍스트와 html 요소까지 얻어온다.
	console.log(child.innerText);	// 텍스트만 얻어온다.
	
//	parentNode는 탐색된 element의 부모 element를 탐색한다.
	var parentDiv = child.parentNode;
	console.log(parentDiv);
//	nodeName은 탐색된 element의 태그 이름을 얻어온다.
	console.log(parentDiv.nodeName);
	parentDiv.style.backgroundColor = 'pink';
}

function searchChild(){
	var div = document.getElementsByTagName('div')[0];
	console.log(div.innerHTML)
	console.log(div.innerText)
//	div.innerHTML = '글자 바꾸기';
	
//	children은 탐색된 element의 자식 element(태그만)를 탐색해서 배열로 리턴한다.
	var childs = div.children;
	console.log(childs);
	
//	childNodes은 탐색된 element의 자식 element(태그 및 텍스트 포함)를 탐색해서 배열로 리턴한다.
	var childs = div.childNodes;
	console.log(childs);
	
	console.log(childs[0]);
	console.log(childs[1]);
	
	childs[1].style.backgroundColor = 'red';
	childs[3].style.backgroundColor = 'green';
	childs[5].style.backgroundColor = 'blue';
}

function testSearch(){
	var test1 = document.getElementsByTagName('p')[3];
	var div = test1.parentNode;
	div.style.backgroundColor = 'skyblue';
	
	var test4 = document.getElementsByTagName('div')[3];
	var childs = test4.childNodes;
	childs[3].style.fontSize = '20pt';
	
}