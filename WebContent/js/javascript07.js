//	배열
const objects = [
	{
		name: '멍멍이'
	},{
		name: '야옹이'
	}
];

console.log(objects);
console.log(objects.length);
console.log(objects[0]);
console.log(objects[1]);
console.log(objects[0].name);
console.log(objects[1].name);
console.log('===========================1==========================');

//	push(): 배열에 데이터 추가
objects.push({
	name: '멍뭉이',
});
console.log(objects);
console.log(objects.length);
console.log(objects[2]);
console.log(objects[2].name);
console.log('===========================2==========================');

const doggy = {
		name: '멍멍이',
		sound: '멍멍!',
		age: 2
};

//	Object.keys(): 인수로 지정된 객체의 key 값을 배열로 묶어서 얻어온다.
console.log(Object.keys(doggy));
//	Object.values(): 인수로 지정된 객체의 key에 할당된 values 값을 배열로 묶어서 얻어온다.
console.log(Object.values(doggy));
//	Object.entries(): 인수로 지정된 객체의 key와 value를 배열로 묶어서 얻어온다.
console.log(Object.entries(doggy));
console.log('============================3=========================');

for (let i = 0; i < Object.keys(doggy).length; i++){	// 일반 for
	console.log(Object.keys(doggy)[i]);
}
console.log('============================4=========================');

for (let value of Object.values(doggy)){	// 향상된 for
	console.log(value);
}
console.log('============================5=========================');

for (let value of Object.entries(doggy)){	
	console.log(value[0]);
	console.log(`${value}[0]: ${doggy[value[0]]}`);
}
console.log('=============================6========================');
//	in을 사용하면 객체에서 Object.keys()를 실행한 것 처럼 key값을 차례대로 얻어와서 in 앞의 변수에 
//	넣어가며 반복한다.
for (let key in doggy){
	console.log(`${key}: ${doggy[key]}`);
}
console.log('============================7=========================');




























