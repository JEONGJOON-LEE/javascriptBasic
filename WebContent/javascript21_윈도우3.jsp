<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>아이디 중복 검사</title>
</head>
<body>

<table>
	<tr>
		<td>아이디</td>
		<td>
			<input type="text" name="id"> 
		</td>
	</tr>
	<tr>
		<td colspan="2" align="center">
			<input type="button" value="중복확인" onclick="confirmChk()">
			<input type="button" value="닫기" onclick="self.close()">
		</td>
	</tr>
</table>

<!-- 아이디 중복 검사 결과를 출력할 <div> 태그 -->
<div></div>

<script type="text/javascript" src="./js/javascript21.js"></script>
</body>
</html>


























