<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>함수의 종류</title>

<style type="text/css">

p{
	cursor:pointer;
}
</style>

</head>
<body>

<h1>함수의 종류</h1>

<!-- onclick 이벤트가 무조건 버튼에서만 실행되는 것은 아니다.  -->
<p onclick="func1()">
	1. 명시적 함수 → 이름이 있는 함수
</p>
<p onclick="func2()">
	2. 익명 함수 → 이름이 없는 함수
</p>
<p onclick="func3()">
	3. 함수 리터럴 → 함수의 인수로 익명 함수를 전달한다.
</p>

<!-- varTest() 함수가 호출될 때 인수 목록이 arguments 객체에 전달된 후 arguments 객체에서 함수의 인수로 전달된다. -->
<h1 onclick="varTest('홍길동', '임꺽정', '장길산', '일지매')">arguments</h1>

<h1>클로저</h1>
함수 내부에서 함수를 정의해 사용한다.<br>
좋아하는 과목: <input id="good" type="text">
<input type="button" value="클릭" onclick="goodEdu(good.value)">

<script type="text/javascript" src="./js/javascript18.js"></script>
</body>
</html>


























