<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DOM 탐색함수</title>
</head>
<body>

<p id="test" class="test" onclick="searchID()">
	1. getElementById(): 태그의 id 속성을 탐색한다.<br>
	&nbsp;&nbsp;&nbsp;같은 화면에 id요소가 여러개 있다면 첫 번째 요소 1개만 선택된다.
</p>

<p id="test" class="test" onclick="searchName()">
	2. getElementsByName(): 태그의 name 속성을 탐색한다.<br>
	&nbsp;&nbsp;&nbsp;같은 화면에 여러개의 name 속성을 가지는 요소가 있다면 모두 선택된다. → nodelist<br>
	&nbsp;&nbsp;&nbsp;<input type="text" name="test" size="30"><br>
	&nbsp;&nbsp;&nbsp;<input type="text" name="test" size="30"><br>
	&nbsp;&nbsp;&nbsp;<input type="text" name="test" size="30">
</p>

<p id="test" class="test" onclick="searchTagName()">
	3. getElementByTagName(): 태그 이름을 탐색한다.
	&nbsp;&nbsp;&nbsp;같은 화면에 여러개의 같은 이름의 태그가 있다면 모두 선택된다. → nodelist<br>
</p>

<p onclick="searchCSSSelector()">
	DOM(Document Object Model) 탐색 함수
</p>

<script type="text/javascript" src="./js/javascript22.js"></script>
</body>
</html>


























