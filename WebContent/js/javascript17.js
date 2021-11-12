function alertTest() {
	alert('단순한 메시지를 출력하는 대화창');
}

function confirmTest() {
//	confirm('메시지')
//	확인 버튼을 클릭하면 true, 취소 버튼을 클릭하면 false가 리턴된다.
//	console.log(confirm('메시지'))
	if(confirm('배경색을 바꿀래?')){
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'yellow';
	}
}

function promptTest() {
//	prompt('메시지');
//	prompt('메시지','안내메시지');
//	prompt() 함수는 데이터를 입력하고 확인 버튼을 클릭하면 입력한 데이터가 리턴되고 취소 버튼을 클릭하면 null이 리턴된다.
	var menu = prompt('점심은 뭘 먹을까요?\n(1. 짜장면, 2. 짬뽕, 3. 볶음밥)', '1, 2, 3 중 선택');
	console.log(menu)
	console.log(typeof menu)
	
	switch(menu){
	case '1':
		console.log('짜장면');
		break;
	case '2':
		console.log('짬뽕');
		break;
	case '3':
		console.log('볶음밥');
		break;
	default:
		console.log('1, 2, 3 중에 하나만 입력해주세요.')
		break;
	}
}