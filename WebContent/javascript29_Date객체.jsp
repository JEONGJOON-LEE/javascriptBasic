<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Date 객체</title>
</head>
<body>

<p>
	<h2>오늘 날짜</h2>
	<span id="today"></span><br><br>
	<!-- <input type="button" value="오늘 날짜" onclick="testDate1()"> -->
	<button type="button">오늘날짜</button>
	<button type="button">날짜 관련 함수</button>
</p>

<p>
	<h2>특정 날짜</h2>
	<span id="specific"></span><br>
	<input type="text" id="dateInput" size="50"><br><br> 
	<button type="button">특정날짜</button>
</p>

<p>
	<h2>경과 날짜</h2>
	지정 날짜<input id="date1" type="date" value="2021-06-15">
	경과 날짜<input id="inputDate" type="number"><br>
	지정 날짜에서 경과 날짜가 지난 날짜는 <input id="result" type="text" readonly="readonly">일 입니다.<br>
	<button type="button">경과 날짜 보기</button>
</p>

<p>
	<h2>D-Day</h2>
	수료 날짜 <input id="date2" type="date" value="2021-11-22">
	지정 날짜 <input id="inputDate2" type="date" value="2021-09-02"><br>
	수료일까지 남은 날짜는<input id="result2" type="text" readonly="readonly">일 입니다.<br>
	<button type="button">수료일까지 남은 날짜 보기</button>
</p>

<script type="text/javascript" src="./js/javascript29.js"></script>
</body>
</html>


























