function allSelect(){
//	name 속성이 all인 체크박스를 체크하면 true를 해제하면 false를 변수에 저장한다.
	var check = document.getElementsByName('all')[0].checked;
	console.log(check);
	
//	name 속성이 chk인 체크 박스를 모두 얻어온다.
	var checkBoxs = document.getElementsByName('chk');
	console.log(checkBoxs.length);
//	name 속성이 chk인 체크 박스의 개수만큼 반복하며 일괄적으로 선택 또는 해제 시킨다.
	for (var i = 0; i < checkBoxs.length; i++){
		checkBoxs[i].checked = check;
	}
}

function selectColor(){
	var checkBoxs = document.getElementsByName('chk');
	for (var i = 0; i < checkBoxs.length; i++){
		if(checkBoxs[i].checked){
			console.log(checkBoxs[i].value + '선택');
			document.getElementById(checkBoxs[i].value).style.backgroundColor = checkBoxs[i].value;
		} else {
			console.log(checkBoxs[i].value + '해제');
			document.getElementById(checkBoxs[i].value).style.backgroundColor = 'white';
		}
	}
}

function clearColor(){
	var checkBoxs = document.querySelectorAll('#colorBox > div');
	console.log(checkBoxs.length);
	for (var i = 0; i < checkBoxs.length; i++){
		checkBoxs[i].style.backgroundColor = 'white';
	}
	document.getElementsByName('all')[0].checked = false;
	allSelect();
}

function chkSelect(){
	/*
	var checkBoxs = document.getElementsByName('chk'); 
	var count = 0;
	for (var i = 0; i < checkBoxs.length; i++){
		console.log(checkBoxs[i].checked);
		if(checkBoxs[i].checked){
			count++;
		}
	}
	if(count == checkBoxs.length){
		document.getElementsByName('all')[0].checked = true;
	}else{
		document.getElementsByName('all')[0].checked = false;
	}
	*/
	var checkBoxs = document.getElementsByName('chk'); 
	var flag = true;
	for (var i = 0; i < checkBoxs.length; i++){
		if(!checkBoxs[i].checked){
			flag = false;
			break;
		}
	}
	document.getElementsByName('all')[0].checked = flag;
}

























