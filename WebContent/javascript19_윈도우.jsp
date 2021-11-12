<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>윈도우</title>
<link rel="stylesheet" href="./css/javascript19.css">
</head>
<body>

<div>
	<h1>팝업창 만들기 - 새창</h1>
	<input id="parentID" type="text">
	<input type="button" name="btn" value="아이디 중복 검사" onclick="openWin()"><br>
	<input id="requestID" type="text"><br>
	<input type="text" name="requestID"><br>
	<input type="text"><br>
	<h1></h1>
	
	<h1>회원가입-현재창</h1>
	<input type="button" value="회원가입" name="btn" onclick="registerForm()">
</div><br>

<div id="register">
	<form action="?">
		<table>
			<tr>
				<td>아이디</td>
				<td>
					<input type="text" name="id" readonly="readonly" onclick="idChk()">
					<input type="button" value="중복체크" onclick="idCheck()"> 
				</td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td>
					<input type="text" name="password">
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="button" value="확인" onclick="closeWin()">
				</td>
			</tr>
		</table>
	</form>
</div>

<script type="text/javascript" src="./js/javascript19.js"></script>
</body>
</html>


























