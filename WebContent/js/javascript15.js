const purpleCuteSlime = {
		name: '슬라임',
		attribute: 'cute',
		color: 'purple'
};

//	rest: spread와는 반대로 퍼져있는 것을 모으는 역할을 한다. 
//	지정된 속성을 제외한 나머지가 rest에 저장되므로 rest는 반드시 맨 마지막에 딱 1번만 써야한다.
const {color, ...cuteSlime} = purpleCuteSlime;
console.log(color)
console.log(cuteSlime);

const {attribute, ...slime} = cuteSlime;
console.log(attribute)
console.log(slime);
console.log('===================================1===================================');

//	배열에 사용할 때도 rest는 맨 마지막에 딱 1번만 써야한다.
const numbers = [0, 1, 2, 3, 4, 5, 6];		

const [one, two, ...rest] = numbers; 
console.log(one);
console.log(two);
console.log(rest);
console.log('===================================2===================================');

// 	spread와 rest를 사용한 함수 실행
function sum(...rest) {
	return rest.reduce((acc,current) => acc + current, 0);
}

const spread = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(...spread))
console.log('===================================3===================================');

function max(...number){
	return number.reduce((acc,current) => current > acc ? current : acc, number[0]);
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7) 
console.log(result)
console.log('===================================4===================================');