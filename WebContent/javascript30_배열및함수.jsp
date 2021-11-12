<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>배열 객체</title>
</head>
<body>

<h2>배열 및 함수</h2>

<!-- 
	ul: 순서 없는 리스트, type 속성이 disc(기본값)면 까만 원, circle이면 하얀 원, square면 까만 사각형이 표시된다.
	ol: 순서 있는 리스트, type 속성이 1(기본값)이면 숫자, A면 대문자, a면 소문자, I면 로마 숫자 대문자, i면 로마 숫자 소문자가 표시된다.
	li: 리스트 항목
 -->
<ol>
	<li onclick="singleArr()">1차원 배열</li>
	<li onclick="multiArr()">2차원 배열</li>
	<li onclick="joinArr()">join() 함수</li>
	<li>배열 정렬
		<ul>
			<li onclick="sortTest1()">문자 정렬</li>
			<li onclick="sortTest2()">숫자 정렬</li>
			<li onclick="reverseTest()">배열 순서 뒤집기</li>
		</ul>
	</li>
	<li onclick="puscShiftPopTest()">배열 데이터 입출력
		<ul>
			<li>push()</li>
			<li>unshift()</li>
			<li>shift()</li>
			<li>pop()</li>
		</ul>
	</li>
	<li onclick="sliceTest()"> 배열의 일부분을 새 배열로 만든다.</li>
</ol>

<script type="text/javascript" src="./js/javascript30.js"></script>
</body>
</html>


























