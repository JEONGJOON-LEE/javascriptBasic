//	함수
function printHello() {
	console.log('Hello');
}
printHello()
console.log('=============================================');



function log(message) {
	console.log(message);
}
log('Hi')
console.log('=============================================');



function changeName(obj) {
	obj.name = '임꺽정';
}
const hong = {name: '홍길동'}
console.log(hong)
changeName(hong);
console.log(hong);
console.log('=============================================');


//	디폴트 인수 => ES6 추가
// 	ES5
/*
function showMessage(message, from){
	if (from == undefined){
		from = 'unknown';
	}
	console.log(`ES5: ${message} by ${from}`)
}
*/

function showMessage(message, from = 'unknown'){
	console.log(`ES6: ${message} by ${from}`)
}
showMessage('Hi!');
console.log('=============================================');

// rest => 가변인자 => ES6
function printAll(...args){
	console.log('일반 for')
	for(let i = 0; i < args.length; i++){
		console.log(args[i])
	}
//	향상된 for
	console.log('향상된 for')
	for (const arg of args){
		console.log(arg);
	}
}

printAll('홍길동', '임꺽정', '장길산', '일지매')
console.log('=============================================');

//	익명 함수 => 익명으로 함수를 만들어 변수에 할당해서 실행한다.
const print = function(){
	console.log('print');
}

print();

const printAgain = print;
printAgain()

//	일반 함수도 변수에 할당할 수 있다.
function sum(a,b){
	return a+ b;
}

console.log(sum(5,3));

const sumAgain = sum;
console.log(sumAgain(5,3));
console.log('=============================================');

//	callback 함수
//	콜백 함수는 코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 등록하기만 하고, 
//	어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출(자동으로 실행) 하는 함수를 말한다.
//	익명 함수는 callback을 구현할 때 주로 사용한다

//	printYes, printNo 함수를 callback으로 등록한다.
const printYes = function () {
	console.log('Yes!');
}

const printNo = function () {
	console.log('No!');
}

function randomQuiz(answer, printYes, printNo){
	if (answer == 'love you') {
		printYes();
	} else {
		printNo();
	}
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
console.log('=============================================');

//	화살표(arrow) 함수 => ES6 추가

/*
const simplePrint = function(){
	console.log('simplePrint');
}
*/

/*
const simplePrint = () => {
	console.log('화살표 함수 simplePrint');
}
*/

//	화살표 함수가 실행할 문장이 1줄일 경우 {}를 생략할 수 있다.
const simplePrint = () => console.log('{}를 생략한 화살표 함수 simplePrint')
simplePrint();

/*
const whoAreYou = function (name) {
	console.log(name + '님 안녕하세요');
}
*/

/*
const whoAreYou = (name) => {
	console.log(name + '님 안녕하세요');
}
*/

//	const whoAreYou = (name) => console.log(name + '님 안녕하세요');

//	화살표 함수의 인수가 1개일 경우 ()도 생략할 수 있다.
//	const whoAreYou = name => console.log(name + '님 안녕하세요');

/*
const whoAreYou = name => {
	return name + '님 안녕하세요';
}
*/

// 	함수가 실행할 문장이 return 1문장만 있을 경우 {}를 생략하고 return도 생략할 수 있다.
const whoAreYou = name => name + '님 안녕하세요';

console.log('return: ' + whoAreYou('임꺽정'));
/*   
function add(a,b) {
	return a + b;
}
*/

/*
const add = (a,b) => {
	return a + b;
}
*/

const add = (a,b) => a + b;
console.log(add(6,2));

/*
function circleArea(r = 1){
	return Math.PI * Math.pow(r,2);
}
*/

const circleArea = (r = 1) => Math.PI * Math.pow(r,2);


console.log(circleArea(10));

console.log('=============================================');

//	자동실행 함수 => 자동으로 실행할 함수 전체를 ()에 묶고 ')'뒤에 ()를 붙여서 실행한다.
(function hello() {
	console.log('자동실행');
})();


















