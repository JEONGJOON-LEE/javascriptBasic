<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>체크박스</title>
<link rel="stylesheet" href="./css/javascript32.css">
</head>
<body>

<div id="colorBox">
	<div id="red">빨강</div>
	<div id="blue">파랑</div>
	<div id="yellow">노랑</div>
	<div id="black">검정</div>
</div><br>

<form action="?">
	<input type="checkbox" name="all" onclick="allSelect()">전체선택<br>
	<input type="checkbox" name="chk" value="red" onclick="chkSelect()">빨강<br>
	<input type="checkbox" name="chk" value="blue" onclick="chkSelect()">파랑<br>
	<input type="checkbox" name="chk" value="yellow" onclick="chkSelect()">노랑<br>
	<input type="checkbox" name="chk" value="black" onclick="chkSelect()">검정<br><br>
	
	<input type="button" value="선택" onclick="selectColor()">
	<input type="button" value="클리어" onclick="clearColor()">
</form>

<script type="text/javascript" src="./js/javascript32.js"></script>
</body>
</html>


























