<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>태그 및 속성 추가2</title>
</head>
<body>

<p>
	<input type="radio" name="radioBtn" value="./images/img01.jpg">이브이<br>
	<input type="radio" name="radioBtn" value="./images/img02.jpg">피카츄<br>
	<input type="radio" name="radioBtn" value="./images/img03.jpg">샤미드<br>
	<input type="radio" name="radioBtn" value="./images/img04.jpg">고라파덕<br>
	<input type="radio" name="radioBtn" value="./images/img05.jpg">이브이<br><br>
	
	<input type="button" value="이미지 생성하기" onclick="createImg()">
	<input type="button" value="이미지 삭제하기" onclick="deleteImg()">
</p>

<!-- <img alt="그런 이미지 없거덩" src="이미지 경로" title="마우스 올리면 나오는 메시지"> -->
<div id="imgView">
	<br>
</div>

<script type="text/javascript" src="./js/javascript36.js"></script>
</body>
</html>


























