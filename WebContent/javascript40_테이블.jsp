<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>테이블</title>
</head>
<body>

<form action="?">
	<table id="inTable" border="1" cellpadding="5" cellspacing="0">
		<tr>
			<td>아이디</td>
			<td>
				<input type="text" name="id">
			</td>
		</tr>
		<tr>
			<td>비밀번호</td>
			<td>
				<input type="text" name="password">
			</td>
		</tr>
		<tr>
			<td>주소</td>
			<td>
				<input type="text" name="address">
			</td>
		</tr>
		<tr>
			<td>전화번호</td>
			<td>
				<input type="text" name="phone">
			</td>
		</tr>
	</table><br>
	<input type="button" value="추가" onclick="tableAdd()">
</form><br><br>

<input type="button" value="마지막 데이터부터 1행씩 삭제" onclick="tableDel()">
<input type="button" value="전체 삭제" onclick="tableDelAll()"><br><br>

<div id="addTable">
	<table id="ctb" border="1" cellpadding="5" cellspacing="0">
		<thead>
			<tr>
				<th>아이디</th>
				<th>비밀번호</th>
				<th>주소</th>
				<th>전화번호</th>
				<th></th>
			</tr>
		</thead>
		<tbody id="addtr">
		
		</tbody>
	</table>
</div>

<script type="text/javascript" src="./js/javascript40.js"></script>
</body>
</html>
