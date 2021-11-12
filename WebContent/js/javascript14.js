const slime = {
		name: '슬라임'
}

const cuteSlime = {
		name: '슬라임',
		attribute: 'cute'
}

const purplecuteSlime = {
		name: '슬라임',
		attribute: 'cute',
		color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purplecuteSlime);
console.log('=====================================1====================================')

const slime1 = {
		name: '슬라임'
}

const cuteSlime1 = {
//	... => spread 연산자 => ES6에서 추가 => 객체나 배열 내부에 다른 객체나 배열을 퍼트린다.
	...slime1,
	attribute: 'cute'
};

const purplecuteSlime1 = {
		...cuteSlime1,
		color: 'purple'
};

console.log(slime1);
console.log(cuteSlime1);
console.log(purplecuteSlime1);
console.log('=====================================2====================================')

//	spread 연산자는 배열에도 사용할 수 있다.
const animals = ['개', '고양이', '참새'];
//const anotherAnimals = animals.concat('비둘기');
const anotherAnimals = [...animals, '닭둘기']

console.log(animals);
console.log(anotherAnimals);




















