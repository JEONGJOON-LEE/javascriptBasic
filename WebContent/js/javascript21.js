var ids = ['aaa', 'bbb', 'ccc', 'ddd'];		// 	아이디 목록

function confirmChk(){
	var id = document.getElementsByName('id')[0].value.trim();
	
//	아이디 중복 검사 결과 메시지를 출력할 <div> 태그를 얻어온다.
	var div = document.getElementsByTagName('div')[0]
//	div.innerHTML = id;
//	입력한 아이디가 아이디 목록에 존재하는가 검사한다.
//	indexOf() 함수는 인수로 지정된 데이터가 배열의 몇 번째 index에 존재하는가 리턴한다.
//	존재하면 데이터의 index를 리턴하고 존재하지 않으면 -1을 리턴한다.
	if(id.length == 0){
		div.innerHTML = '<b> 중복 검사할 ID를 입력하세요.</b>';
	} else if(ids.indexOf(id) != -1){
		div.innerHTML = '<b>' + id + '는(은) 사용할 수 없는 아이디 입니다.</b>';
	} else {
		div.innerHTML = '<b>' + id + '는(은) 사용할 수 있는 아이디 입니다.</b>' +  
		  '<input type="button" value="사용하기" onclick="insertID(\''+ id + '\')">';
	}
}

function insertID(id){
//	console.log(id);
	opener.document.getElementsByName('id')[0].value = id;
	opener.document.getElementsByName('password')[0].focus();
	self.close();
}