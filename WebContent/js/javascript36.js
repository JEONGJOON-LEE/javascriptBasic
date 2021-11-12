function createImg(){
//	선택된 라디오 버튼의 value 속성을 얻어온다.
//	얻어온 속성값을 브라우저에 표시할 이미지의 경로와 이름으로 사용한다.
	var radios = document.getElementsByName('radioBtn');
//	console.log(radios.length);
	
	var radioValue = '';
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			radioValue = radios[i].value;
			break;
		}
	}
//	console.log(radioValue);
	
//	img 태그를 만들고 src 속성의 값을 radioValue로 지정한다.
	var img = document.createElement('img')	//	<img>
//	img 태그에 이미지를 표시하기 위해 src 속성과 속성값을 추가한다.
	img.setAttribute('src', radioValue)		//	<img src="radioValue">
	
//	img 태그를 넣어줄 div 태그를 얻어온다.
	var div = document.getElementById('imgView');
	
//	라디오 버튼을 선택하고 이미지 생성하기 버튼을 클릭할 때마다 이미지가 변경되게 하려면 기존에 
//	들어가있던 img 태그를 제거하고  다시 만든 img 태그를 넣어주면 된다.
//	div 태그에 들어가 있는 첫번째 노드를 선택해서 제거한다.
	
//	firstElementChild: 첫번째 자식 노드
//	lastElementChild: 마지막 자식 노드
	
	var divImg = div.lastElementChild;
//	console.log(divImg);
//	removeChild(태그): 인수로 지정된 자식 태그를 찾아서 제거한다.
	div.removeChild(divImg);
	
	
//	nextElementSibling: 다음 형제 노드
//	previousElementSibling: 이전 형제 노드
//	var span = document.getElementsByTagName('span')[0];
//	console.log(span);
//	var node = span.nextElementSibling;
//	console.log(node);
//	var p = span.previousElementSibling;
//	console.log(p);
	
//	div 태그에 img태그를 자식으로 넣어준다.
	div.appendChild(img);
	
}

function deleteImg(){
	var div = document.getElementById('imgView');
	div.innerHTML = '<br>';
}