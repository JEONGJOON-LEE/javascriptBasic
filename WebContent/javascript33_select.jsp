<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>select</title>
</head>
<body>

<p>
	<!-- 콤보 상자에서 어떤 option 요소가 선택(변경)되면 실행되는 이벤트는 onchange 이벤트이다. -->
	<select name="food" style="width: 150px; height: 35px" onchange="foodShow()">
		<option>짜장면</option>
		<option>짬뽕</option>
		<option>탕수육</option>
		<option>양장피</option>
		<option>팔보채</option>
	</select>
</p>

<p>
	<!-- select 태그에  multiple="multiple" 속성을 지정하면 리스트 박스가 표시된다.  -->
	<!-- size 옵션을 지정하면 리스트 박스에 표시되는 목록의 개수를 지정할 수 있다  -->
	<select name="food" style="width: 150px; height: 150px"  multiple="multiple" size="5">
		<option>짜장면</option>
		<option>짬뽕</option>
		<option>탕수육</option>
		<option>양장피</option>
		<option>팔보채</option>
	</select>
	<input type="button" value="선택" onclick="foodShow2()"> 
</p>

<script type="text/javascript" src="./js/javascript33.js"></script>
</body>
</html>


























