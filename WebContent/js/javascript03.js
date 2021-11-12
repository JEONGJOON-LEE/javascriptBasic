//	문자열 연결 연산
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`String literals: 1 + 2 = ${1 + 2}`);	//	그레이브 사용
console.log('String literals: 1 + 2 = ${1 + 2}');
console.log('============================================================================');

//	사칙연산
console.log('3 + 5 = ' + (3 + 5));
console.log('3 - 5 = ' + (3 - 5));
console.log('3 * 5 = ' + 3 * 5);
console.log('3 / 5 = ' + 3 / 5);
console.log('3 % 5 = ' + 3 % 5);
//	console.log('3 ** 5 = ' + 3 ** 5);
console.log('3 ** 5 = ' + Math.pow(3, 5));
console.log('============================================================================');

//	증감 연산
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement:  ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement:  ${postIncrement}, counter: ${counter}`);

//	대입 연산자
let x = 3;
let y = 6;
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log('============================================================================');

//	관계 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//	== 와 !=는 값만 비교하고, ==와 !==는 값과 자료형까지 비교한다.
console.log('1' == 1);
console.log('1' === 1);
console.log('============================================================================');

//	논리연산자
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(false || true)
console.log(true  || false)
console.log(false || true)
console.log(false || false)

console.log(!false)
