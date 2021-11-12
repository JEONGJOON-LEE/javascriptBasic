onload = () => {
//	alert('onload 이벤트 실행');
	var a = document.querySelectorAll('a');
	var img = document.querySelector('img');
	var count = 3;
	
//	'◀'에 onclick 이벤트를 연결한다.
	a[0].onclick = () => {
	count = --count < 1 ? 5 : count;
	img.setAttribute('src', './images/img0' + count + '.jpg');
	}
	
	
//	'▶'에 onclick 이벤트를 연결한다.
	a[1].onclick = () => {
	count = ++count > 5 ? 1 : count;
	img.setAttribute('src', './images/img0' + count + '.jpg');
	}

}