function foodShow(){
	var doc = document.getElementsByName('food')[0];
//	doc는 select 태그 객체이므로 length는 태그의 항목(option 태그)의 개수를 얻어온다.
	console.log(doc.length)
//	options는 select 태그 내부의 option들을 모아놓은 객체
	console.log(typeof doc.options)
	console.log(doc.options)
//	options의 객체의 selectedIndex로 몇 번째 option 객체가 선택되었나 얻어올 수 있다.
	console.log(doc.options.selectedIndex);
	var index = doc.options.selectedIndex;
	console.log(doc.options[index].value);
	
}

function foodShow2(){
	var doc = document.getElementsByName('food')[1];
	console.log(doc.length);
	var str = '';
	for(var i = 0; i < doc.length; i++){
//		console.log(doc[i].value);
//		option의 객체의 selected로 콤보 박스나 리스트 박스에서 특정 option 객체가 선택되었나(true)
//		선택되지 않았나(false)를 알아낼 수 있다.
//		console.log(doc[i].selected);
		console.log(doc[i].value + (doc[i].selected ? ' 선택됌' : ' 선택안됌'));
		if(doc[i].selected){
			str += doc[i].value + ' ';
		} 
	}
	console.log(str.length > 0 ? str : '없음')
}