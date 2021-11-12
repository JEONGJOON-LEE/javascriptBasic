superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for(let i = 0; i < superheroes.length; i++){
	console.log(superheroes[i]);
}
console.log('==============================1================================')

function print(hero){
	console.log(hero);
}

//	forEach(): 인수로 지정된 함수로 배열의 요소를 차례대로 전달하며 함수를 반복해 실행한다.
superheroes.forEach(print);
console.log('==============================2================================')

superheroes.forEach(function(hero){
	console.log(hero);
});
console.log('==============================3================================')

superheroes.forEach(hero => console.log(hero));
console.log('==============================4================================')

const array = [1, 2, 3, 4, 5, 6, 7, 8];

//	기존 배열(array)에 저장된 값을 제곱해서 새 배열(squared)을 만든다.
const squared = [];

for(let i = 0; i < array.length; i++){
//	squared.push(array[i] * array[i]);
//	squared.push(array[i] ** 2);
	squared.push(Math.pow(array[i], 2));
}
console.log(squared);

const squared2 = [];
function square(n){
	squared2.push(Math.pow(n, 2));
}
array.forEach(square);
console.log(squared2);

const squared3 = [];
array.forEach(function (n){
	squared3.push(Math.pow(n, 2));
});
console.log(squared3);

const squared4 = [];
array.forEach(n => squared4.push(Math.pow(n, 2)));
console.log(squared4);

//	map(): 배열 안의 요소를 특정 작업을 일괄적으로 실행한 후 배열로 리턴한다.
const squared5 = array.map(n => Math.pow(n, 2));
console.log(array);
console.log(squared5);
console.log('==============================5================================')

//	배열 내부 객체에서 텍스트 요소만 얻어와 새 배열을 만든다.
const items =[
	{
		id: 1,
		text: 'hello',
	},
	{
		id: 2,
		text: 'bye'
	}
];

const text = items.map(item => item.text);
console.log(text);
console.log('==============================6================================')

//	indexOf(): 배열에서 인수로 지정한 요소의 index를 리턴하고, 없으면 -1을 리턴한다.
const index = superheroes.indexOf('캡틴 아메리카')
console.log(index)
console.log('==============================7================================')

const todos = [
	{
		id: 1,
		test: '자바스크립트 입문',
		done: true
	},
	{
		id: 2,
		test: '함수 배우기',
		done: true
	},
	{
		id: 3,
		test: '객체와 배열 배우기',
		done: true
	},
	{
		id: 4,
		test: '배열 내장함수 배우기',
		done: false
	},
];

//	findIndex(): 배열에서 인수로 지정된 조건을 만족하는 요소의 인덱스를 리턴한다.
const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);
console.log('==============================8================================')

//	find(): 배열에서 인수로 지정된 조건을 만족하는 첫 번째 요소를 리턴한다.
const todo = todos.find(todo => todo.done === true);
console.log(todo);
console.log('==============================9================================')

//	filter(): 배열에서 인수로 지정된 조건을 만족하는 모든 요소를 배열로 리턴한다.
//const done = todos.filter(todo => todo.done === true);
const done = todos.filter(todo => todo.done);
//const done = todos.filter(todo => todo.done === false);
//const done = todos.filter(todo => !todo.done);
console.log(done.length);
console.log(done);
console.log('==============================10===============================')
























