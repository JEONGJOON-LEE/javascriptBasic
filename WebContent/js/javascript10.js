const numbers = [1, 2, 3, 4, 5];

let sum = 0;
/*
for (let i = 0; i < numbers.length; i++){
	sum += numbers[i];
}
*/
numbers.forEach(n => sum += n);
console.log(sum)

//	accumulator: 연산 결과가 저장될 기억장소
//	current: reduce 함수가 실행되는 배열의 값이 차례대로 넘어와 저장되는 변수
//	index: current로 넘어오는 값의 index가 저장된다.
//	array: reduce 함수가 실행되고 있는 배열 자신을 의미한다.
// 	 accumulator의 초기치를 지정하지 않으면 배열의 0번째 index의 값이 초기치로 지정된다.

// 배열이름.reduce((accumulator, current, index, array) => {
//	return 실행할 문장;
//	}, accumulator의 초기치)
	
sum = numbers.reduce((accumulator, current, index, array) => {
//	console.log(current);
	return accumulator + current
}, 0)
console.log(sum)

sum = numbers.reduce((accumulator, current, index, array) => accumulator + current, 0)
console.log(sum)
console.log('==============================================1==========================================')

const alpha = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e']

const count = alpha.reduce((acc, cur) => {
	if(acc[cur]){
		acc[cur] += 1;
	} else {
		acc[cur] = 1;
	}
	console.log(acc);
	return acc;	
}, {}); // acc를 빈 객체로 초기화 한다.
console.log(count) //  {a: 3, b: 1, c: 2, d: 1, e: 1}
console.log('==============================================2==========================================')


const numbers1 = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60];

function tenOverNumber (numbers){
	let count1 = 0;
	numbers1.forEach(n => {
		if (n > 10){
			count1 += 1;
		}
	});
	return count1;
}
const count1 = tenOverNumber(numbers1);
console.log(count1)

function tenOverNumber2 (numbers){
	return numbers.filter(n => n > 10).length
}
const count2 = tenOverNumber2(numbers1);
console.log(count2)

function tenOverNumber3 (numbers){
	return numbers.reduce((acc, current) => {
		if (current > 10){
			return acc + 1;
		} else {
			return acc;
		}
	}, 0)
}
const count3 = tenOverNumber3(numbers1);
console.log(count3)
console.log('==============================================3==========================================')





























