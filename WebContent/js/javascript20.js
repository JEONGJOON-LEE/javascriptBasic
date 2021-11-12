function requestID(){
//	alert('requestID()')
//	부모 창의 데이터를 가져온다. opener는 현재 창을 띄운 부모 창을 의미한다.
	var parentID = opener.document.getElementById('parentID').value;
//	alert(parentID)
//	부모 창에서 얻어온 데이터를 자식 창의 객체에 넣어준다.
	document.getElementById('childID').value = parentID;
	
}

function sendID(){
//	부모 창으로 넘겨줄 자식 창의 데이터를 가져온다.
	var childID = document.getElementById('childID').value;
//	alert(childID)
//	부모 창으로 데이터를 보낸다.
	opener.document.getElementById('parentID').value = childID;
}

function sendID2(){
		var childID = document.getElementById('childID').value;
//		getElementById(): 인수로 지정된 id 속성을 가지는 태그를 얻어온다.
		opener.document.getElementById('requestID').value = childID;
//		getElementsByName(): 인수로 지정된 name 속성을 가지는 태그들을 얻어온다.
//		getElementById() 함수를 사용할 경우 id 속성은 문서에 딱 1번만 나올 수 있기 때문에 함수에 Element가 단수형으로 작성되었지만
//		name 속성은 같은 값을 여러개 사용할 수 있으므로 Element가 복수형으로 작성된 getElementsByName() 함수를 사용해서 배열로 얻어와서 
//		인덱스를 지정하여 사용한다.
		opener.document.getElementsByName('requestID')[0].value = childID
//		id나 name 속성이 아닌 태그 이름을 사용해서 얻어오려는 경우도 같은 이름의 태그가 여러개 나올 수 있으므로 
//		Element가 복수형으로 작성된 getElementsByTagName() 함수를 사용해서 배열로 얻어와 인덱스를 지정하여 사용한다.
		opener.document.getElementsByTagName('input')[4].value = childID
		opener.document.getElementsByTagName('h1')[1].innerHTML = childID
		self.close();
}



























