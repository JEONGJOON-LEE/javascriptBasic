function randomNumber(num){
//	random() 함수로 0이상이고 1미만인 무작위수를 발생시킨다.
//	console.log(Math.random())
	for(var i = 0; i < 10; i++){
	console.log(i + 1 + '번째 random: ' + (parseInt(Math.random() * num) + 1))
	}
	
//	ceil()	: 올림
//	floor()	: 내림, 버림
//	round()	: 반올림
	console.log(Math.ceil(3.14))
	console.log(Math.floor(3.94))
	console.log(Math.round(3.54))
}

function randomBgColor(){
	/*
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	 */
	
//	var ran = function(){
//		return Math.floor(Math.random() * 256)
//	}
//	document.body.style.backgroundColor = 'rgb(' +ran()+ ',' + ran() + ','+ ran() + ')'
	
	var ran = () => Math.floor(Math.random() * 256)
	document.body.style.backgroundColor = 'rgb(' +ran()+ ',' + ran() + ','+ ran() + ')'
}

function randomCircle(){
	var radius = Math.floor(Math.random() * 100) + 1 	//	원의 반지름
	console.log('원의 반지름: ' + radius + 'px');
	
	var circle = document.getElementById('circle');
	circle.style.width = radius * 2 + 'px';		// div 태그의 폭
	circle.style.height = radius * 2 + 'px';	// div 태그의 높이
	circle.style.display = 'block';				// div 태그를 화면에 보이게 한다.
	circle.style.borderRadius = radius + 'px';	// div 태그의 모서리를 둥글게 한다.
	
	var ran = () => Math.floor(Math.random() * 256)
	circle.style.backgroundColor = 'rgb(' +ran()+ ',' + ran() + ','+ ran() + ')';
}

function randomCircleArea(){
	var circleWidth = document.getElementById('circle').style.width;
	console.log('원의 지름: ' + circleWidth);
	
//	var width = circleWidth.substring(0, circleWidth.length - 2);
	var width = parseInt(circleWidth)
	console.log(width);
	
	var radius = width / 2;
	console.log('원의 반지름: ' + radius);
	
	
	var area = Math.PI * Math.pow(radius,2);	//원의 너비 = πr제곱
	var circumference = 2 * Math.PI * (radius);	//원의 둘레 = 2πr
	console.log('원의 둘레: ' + circumference);
	console.log('원의 너비: ' + area);
	
	document.getElementById('area').innerHTML = Math.round(area);
	document.getElementById('len').innerHTML = Math.round(circumference);
}



































































































