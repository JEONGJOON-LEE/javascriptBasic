// 	falsy: undefined, null, 0, '', NaN => 무조건 거짓이 되는 값

//	단축 평가 논리 계산법(Short-circuit evaluation)

//	'&&' 논리 연산에서 앞의 조건이 true면 '&&' 뒤의 내용이 출력된다.
console.log(true && 'hello');
//	'&&' 논리 연산에서 앞의 조건이 false면 '&&' 뒤의 내용은 아예 안보고 앞의 값 false를 출력한다.
console.log(false && 'hello');
console.log('==========================================1============================================');

const dog = {
	name: '멍멍이'
}
/*
function getName(animal){
	console.log(animal);
	if(animal){
		return animal.name;
	}
	return undefined;
}
*/

function getName(animal){
	return animal && animal.name
}

const name = getName(dog);
console.log(name);
const name1 = getName();
console.log(name1);
console.log('==========================================2============================================');

//	'||' 논리 연산에서 앞의 조건이 true면 '||' 뒤의 내용은 아예 안보고 값을 출력한다.
console.log(true || 'hell')
//	'||' 논리 연산에서 앞의 조건이 false면 '||' 뒤의 값을 출력한다.
console.log(false || 'hell')

const cat = {
	name: '야옹이'
}

function getName1(animal) {
	const name = animal || animal.name;
	/*
	if(name){
		return name.name;
	} else{
		return '이름이 없는 동물입니다.';
	}
	*/
	return name.name|| '이름이 없는 동물입니다.'
}

const name2 = getName1(cat);
console.log(name2)




























