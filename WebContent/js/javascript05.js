//	객체 
const dog = {
		name: '홍길동', 
		age: 2
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);
console.log('=====================================================================================================');

const ironMan = {
	name: '토니 스타크',
	actor: '로버트 다우니 주니어',
	alias: '아이언맨'
};

const captainAmerica = {
		name: '스티븐 로저스',
		actor: '크리스 에반스',
		alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);
console.log('=====================================================================================================');

function print(hero) {
	const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
	console.log(text);
}
print(ironMan);
print(captainAmerica);
console.log('=====================================================================================================');

//	비구조화 할당 => 객체 구조 분해
function print1(hero) {
//	hero 객체 내부의 값을 외부로 꺼내온다.
//	비구조화 할당을 통해서 객체 내부의 값을 꺼내서 저장시킬 변수의 이름은 객체에서 사용한 이름과 반드시 같아야 한다.
	const {name, actor, alias} = hero;
	const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
	console.log(text);
}
print1(ironMan);
print1(captainAmerica);
console.log('=====================================================================================================');

function print2({name, actor, alias}) {
	const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
	console.log(text);
}
print2(ironMan);
print2(captainAmerica);
console.log('=====================================================================================================');

//	비구조화 할당은 함수 외부에서도 가능하다.
const {name} = ironMan;
console.log(name);