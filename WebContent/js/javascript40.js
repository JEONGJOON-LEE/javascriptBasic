function tableAdd(){
//	데이터가 입력된 form을 얻어와서 form에 입력된 데이터를 배열에 저장한다.
//	var doc = document.getElementsByTagName('form')[0];
//	forms[index]: 현재 문서의 form을 배열 형태로 저장하는 자바스크립트 내장 객체
	var doc = document.forms[0];
//	console.log(doc);
//	console.log(doc.id.value);
	var vals = [doc.id.value.trim(), doc.password.value.trim(), doc.address.value.trim(), doc.phone.value.trim()];
//	console.log(vals);
	
//	form에 데이터가 모두 입력되었나 검사한다.
	for(var i = 0; i < vals.length; i++){
		if(vals[i] == null || vals[i] == '' || vals[i] == undefined){
			alert('아이디, 비밀번호, 주소, 전화번호 정보를 정확히 입력해주세요.')
			return;
		}
	}
	
//	form에 입력한 데이터를 id가 ctb인 테이블에 추가한다.
//	<tbody> 태그를 얻어온다.
	var tbody = document.getElementById('addtr');
//	console.log(tbody);
//	form에 입력한 데이터를 사용해서 <tbody> 태그에 추가할 행(<tr>태그)을 만들어 리턴하는 함수를 실행해 리턴되는 결과를 추가한다.
	tbody.appendChild(createRow(vals));
}

//	<tr>태그을 만들어 리턴하는 함수를 실행해 리턴하는 함수
function createRow(vals) {
//	console.log(vals);
//	행(<tr>태그)을 만든다.
	var tr = document.createElement('tr');
	
//	행을 구성하는 열의 개수(인수로 넘어온 배열의 크기)만큼 반복하며 열을 만든다.
	for(var i = 0; i < vals.length; i++){
//		열(<tr> 태그)을 만든다.
		var td = document.createElement('td');
//		열에 데이터를 넣어준다.
		td.textContent = vals[i];
//		행에 열을 추가한다.
		tr.appendChild(td);
	}
	
//	삭제 버튼을 추가하기 위해서 열을 만들어 행에 추가한다.
	var td = document.createElement('td');
//	삭제 버튼을 만들어 열에 추가한다.
	td.innerHTML = '<input type="button" value="현재 데이터 삭제" onclick="rowDel(this)">';
//	삭제 버튼을 행에 추가한다.
	tr.appendChild(td);
	
//	<tbody> 태그에 추가할 행을 리턴시킨다.
	return tr;
}

function tableDel(){
	var tbody = document.getElementById('addtr');
//	removeChild(): 인수로 지정된 자식 태그를 제거한다.
	tbody.removeChild(tbody.lastChild);		// 마지막 자식(행)을 제거한다.
//	tbody.removeChild(tbody.firstChild);	// 첫번째 자식(행)을 제거한다.
}

function tableDelAll(){
	var tbody = document.getElementById('addtr');
	tbody.innerHTML = '';
}

function rowDel(obj){
//	console.log(obj);
//	console.log(obj.parentNode);
//	console.log(obj.parentNode.parentNode);
//	삭제할 <tr>태그를 선택한다.
	var delTr = obj.parentNode.parentNode;
	var tbody = document.getElementById('addtr');
	tbody.removeChild(delTr);
	
	
}



















