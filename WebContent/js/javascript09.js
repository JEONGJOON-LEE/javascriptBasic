const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index);

//	splice(index, 개수): 배열에서 index 위치부터 지정된 개수만큼 추출해 배열을 만든다.
const spliced= numbers.splice(index, 2);
console.log('spliced: ' + spliced);
console.log('numbers: ' + numbers);
console.log('=======================================1=======================================')


const numbers2 = [10, 20, 30, 40];
//	slice(a, b): 배열에서 a번째 index부터 b -1 번째 index까지 추출해 배열을 만든다.
//	slice() 함수는 splice() 함수와 다르게 원본 배열의 데이터가 유지된다.
const sliced = numbers2.slice(0,2);
console.log('sliced: ' + sliced);
console.log('numbers2: ' + numbers2);
console.log('=======================================2=======================================')


const numbers3 = [10, 20, 30, 40];
//	shift(): 배열에서 맨 앞의 데이터를 추출하고 원본 배열에서 제거한다.
let value = numbers3.shift();
console.log(value)
console.log(numbers3)

//	pop()  : 배열에서 맨 뒤의 데이터를 추출하고 원본 배열에서 제거한다.
value = numbers3.pop();
console.log(value)
console.log(numbers3)

//	unshift(): 배열에서 맨 앞에 인수로 지정된 데이터를 추가한다.
numbers3.unshift(999)
console.log(numbers3)

//	push()  : 배열에서 맨 뒤에 인수로 지정된 데이터를 추가한다.
numbers3.push(999)
console.log(numbers3)
console.log('=======================================3=======================================')

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat(): 함수를 실행한 배열에 함수의 인수로 지정한 배열을 합친다.
const concated = arr1.concat(arr2);
console.log(concated);
console.log('=======================================4=======================================')


const array3 = [1, 2, 3, 4, 5];

//	join(): 배열 요소에 인수로 지정한 문자열을 삽입해서 문자열로 리턴시킨다.
console.log(array3.join());	// 인수를 생략하면 ','가 기본 구분자로 사용된다.
console.log(array3.join(' '));	
console.log(array3.join('/'));	
console.log(array3.join('~(^^~)'));	























