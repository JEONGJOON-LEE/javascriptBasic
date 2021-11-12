onload = () => {
//	alert('onload 이벤트 실행');
	var a = document.querySelectorAll('a');
	var img = document.querySelector('img');
	var count = 3;
	
//	'◀'에 onclick 이벤트를 연결한다.
	a[0].onclick = () => {
//		getAttribute('속성이름'): 인수로 지정된 속성의 속성값을 얻어온다.
		var imgAlt = img.getAttribute('alt');
		console.log(imgAlt)
		if (imgAlt == 'img01'){
			alert('첫번째 이미지입니다.')
		} else {
			img.setAttribute('alt', 'img0' + --count);
			img.setAttribute('src', './images/img0' + count + '.jpg');
		}
	}
	
	
//	'▶'에 onclick 이벤트를 연결한다.
	a[1].onclick = () => {
//		getAttribute('속성이름'): 인수로 지정된 속성의 속성값을 얻어온다.
		var imgAlt = img.getAttribute('alt');
		console.log(imgAlt)
		if (imgAlt == 'img05'){
			alert('마지막 이미지입니다.')
		} else {
			img.setAttribute('alt', 'img0' + ++count);
			img.setAttribute('src', './images/img0' + count + '.jpg');
		}
	}

}