function openWin(){
//	window.open();	// 	아무 내용이 없는 빈 윈도우가 실행된다.
//	window.open(url, title, option);
	var url = './javascript20_윈도우2.jsp';		//	새로 띄울 창에 표시할 페이지 이름
	var title = '아이디 중복 검사';		// 	윈도우 이름
	var option = 'top=50px, left=100px, width=500px, height=600px'
	window.open(url, title, option);
}

function registerForm(){
//	감춰놓은 id 속성이 register로 지정된 div 태그를 화면에 보이게 한다.
	document.getElementById('register').style.display = 'block';
//	윈도우의 배경색을 변경한다.
	document.body.style.background = 'gray';
	
//	회원가입 버튼을 비활성화 시킨다.
//	비활성화 시킬 name 속성이 btn인 버튼이 1개일 때
	document.getElementsByName('btn')[1].disabled = 'disabled';
//	비활성화 시킬 name 속성이 btn인 버튼이 여러개일 때
	var btns = document.getElementsByName('btn');
//	일반 for
//	for (let i = 0; i < btns.length; i++ ){
//		btns[i].disabled = 'disabled';
//	}
//	향상된 for
//	for (let btn of btns){	//	변수 btn에 btns 배열의 요소가 차례대로 전달되면서 반복된다.
//		btn.disabled = 'disabled';
//	}
	
	for (var i in btns){	// 	변수 i에 btns 배열의 인덱스가 차례대로 전달되면서 반복된다.
		btns[i].disabled = 'disabled';
	}
	
}

function idChk(){
	alert('ID 중복 체크 버튼을 클릭하고 ID 중복 체크를 하세요.');
}

function idCheck(){
	var url = './javascript21_윈도우3.jsp';		
	var title = '아이디 중복 검사';		
	var option = 'top=200px, left=500px, width=500px, height=300px'
	window.open(url, title, option);
}

function closeWin(){
	document.getElementById('register').style.display = 'none';
	document.body.style.background = 'white';
	var btns = document.getElementsByName('btn');
	for (var i in btns){	
		btns[i].disabled = '';
	}

}







