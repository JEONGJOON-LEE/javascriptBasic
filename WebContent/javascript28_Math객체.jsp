<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Math 객체</title>
<link rel="stylesheet" href="./css/javascript28.css">
</head>
<body>

<p>
	<h2>랜덤 숫자 생성하기</h2>
	숫자: <input id="randeom" type="text">
	<input type="button" value="랜덤 숫자 만들기" onclick="randomNumber(random.value)">
</p>

<p>
	<h2>랜덤 배경색 변경하기</h2>
	<input type="button" value="랜덤 배경색 변경" onclick="randomBgColor()">
</p>

<p>
	<h2>랜덤한 크기의 원 만들기</h2>
	<input type="button" value="랜덤한 크기의 원 만들기" onclick="randomCircle()"><br><br>
	<!-- 아래의 div 태그에 css를 randomCircle() 함수로 지정해서 원을 표시한다. -->
	<div id="circle"></div>
</p>

<p>
	<h2>위에서 만든 랜덤한 크기인 원의 너비와 둘레 계산하기</h2>
	<input type="button" value="원의 너비와 둘레 계산" onclick="randomCircleArea()"><br>
	원의 너비: <span id="area"></span><br>
	원의 둘레: <span id="len"></span>
</p>

<script type="text/javascript" src="./js/javascript28.js"></script>
</body>
</html>


























