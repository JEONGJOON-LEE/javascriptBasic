function singleArr(){
//	배열 선언 방법
	var arrayObj = new Array();	// 크기가 0인 빈 배열 객체를 선언한다.
	console.log(arrayObj);
	console.log(typeof arrayObj);
	console.log(arrayObj.length);
	console.log('=====================================')
	
	var arrayObj2 = new Array(5);
	console.log(arrayObj2);
	console.log(typeof arrayObj2);
	console.log(arrayObj2.length);
	console.log('=====================================')
	
//	크기가 5인 배열 객체를 선언하고 인수로 지정한 데이터로 초기화 한다.
	var arrayObj3 = new Array(1,2,3,4,5);
	console.log(arrayObj3);
	console.log(typeof arrayObj3);
	console.log(arrayObj3.length);
	console.log('=====================================')
	
//	리터럴 이용, []에 지정된 초기치의 개수만큼 배열 객체를 선언하고 초기치로 초기화한다.
	var arrayObj4 = ['value1', 'value2', 'value3', 3, 4];
	console.log(arrayObj4);
	console.log(typeof arrayObj4);
	console.log(arrayObj4.length);
	console.log('=====================================')
	
}

function multiArr(){
	var arrRow = 4;		// 행의 개수
	var arrCol = 3;		// 열의 개수
	
//	행을 먼저 만들고 행의 개수만큼 반복하며 열을 만든다.
	var arr = new Array(arrRow);	//	행을 만든다.
	for (var i = 0; i < arrRow; i++){
		arr[i] = new Array(arrCol);	//	열을 만든다.
	}
	arr[0][0] = 'apple';
	arr[0][1] = 'banana';
	arr[0][2] = 'melon';

	arr[1][0] = '100';
	arr[1][1] = '200';
	arr[1][2] = '300';

	arr[2][0] = 'true';
	arr[2][1] = '999';
	arr[2][2] = '홍길동';

//	배열에 배열을 저장시킬 수 있다.
	arr[3][0] = ['임꺽정', '바보'];
	arr[3][1] = ['장길산', '천재'];
	arr[3][2] = ['코로나는', '무섭다'];
	
	console.log(arr);
	console.log(arr[0]);
}

function joinArr(){
	var fruit =['apple', 'banana', 'melon', 'mango'];
	var arr = ['111','222','333','444']
	
//	배열끼리 덧셈 연산을 실행하면 배열을 합쳐서 ','로 구분된 문자열을 만든다.
	var add = fruit + arr;
	console.log(add);
	console.log(typeof add);
	
//	join() 함수는 배열 요소의 데이터 사이에 인수로 지정한 문자열을 삽입해서 문자열로 만든다.
	var result = fruit.join('|')
	console.log(result);
	console.log(typeof result);
	
//	concat() 함수는 2개 이상의 배열을 합쳐서 배열로 만든다.
	var result2 = fruit.concat(arr);
	console.log(result2)
	console.log(typeof result2);
}

function sortTest1(){
	var arr = ['a', 'c', 'd', null, 5, 100];
//	sort(): 사전식 정렬, 오름차순 정렬, 무조건 문자데이터로 취급해서 코드값 순서로 정렬된다.
	//	문자열화 된 숫자 => 문자 => null 순서로 정렬된다.
	arr.sort();
	console.log(arr);
}

function sortTest2(){
	var arr = [1, 4, 3, 8, 9, 7, 10];
	arr.sort();
	console.log(arr);
//	숫자 데이터를 정렬하기 위해서는 sort() 함수의 인수로 비교함수를 사용해야 한다.
//	sort() 함수가 자동으로 비교함수로 데이터를 넘겨주므로 비교 함수를 호출할 때 인수는 적을 필요가 없다.
	arr.sort(compareFunction1);
	console.log(arr);
	console.log('===================================================')
	
	var arr2 = [8, 3, 4, 9, 1];
//	sort() 함수에 비교 함수를 익명 함수로 구현할 수 있다.
//	arr2.sort(function(i, j) => {
//		return i - j;
//	})
	arr2.sort((i, j) => j - i)
	console.log(arr2);
}

//	sortTest2() 함수에서 숫자 데이터 정렬에 사용할 비교함수를 선언한다. => 정렬 방식을 지정한다.
function compareFunction1(a,b){		//함수의 인수로 크기를 비교할 두 숫자를 넘겨받을 변수를 지정한다.
//	alert('compareFunction(a,b)')
//	앞의 값(a)이 뒤의 값(b) 보다 크면 1(양수), 같으면 0, 작으면 -1(음수)를 리턴하게 만든다.
//	if(a > b){
//		return 1;
//	} else if(a == b){
//		return 0;
//	} else{
//		return -1;
//	}
//	return a - b;		//	오름차순 정렬
//	return -(a - b);	//	내림차순 정렬
	return b - a;		//	내림차순 정렬
}

function reverseTest(){
	var arr = [1, 4, 3, 8, 9, 7, 10];
	console.log(arr);
	arr.reverse();
	console.log(arr);
}

function puscShiftPopTest(){
	var arr = [];
	console.log(arr);
//	push() 함수는 배열의 맨 마지막에 데이터를 추가한다.
	arr.push('first');
	console.log(arr);
	arr.push('second');
	console.log(arr);
	arr.push('third');
	console.log(arr);
//	unshift() 함수는 배열의 맨 처음에 데이터를 삽인한다.
	arr.unshift(5);
	console.log(arr);
	arr.unshift(100);
	console.log(arr);
	
//	pop() 함수는 배열의 맨 뒤의 데이터 얻어온 후 를 제거한다.
	console.log(arr.pop());
	console.log(arr);
//	shift() 함수는 배열의 맨 앞의 데이터를 얻어온 후 제거한다.
	console.log(arr.shift());
	console.log(arr);
}

function sliceTest(){
	var arr = [1, 2, 3, 4, 5]
	console.log(arr);
//	slice(a,b) 함수는 배열의 a번째 index 요소부터 b-1번째 index 요소까지 복사해서 새 배열을 만든다.
	var arr2 = arr.slice(1,3)
	console.log(arr);
	console.log(arr2);
	
	arr = [6,7,8,9,10];
	console.log(arr);
//	splice(a,b) 함수는 배열의 a번째 index 요소부터 b번째 index 요소까지 추출해서 새 배열을 만든다.
	arr2 = arr.splice(1,3)
	console.log(arr);
	console.log(arr2);
}

















































	

































