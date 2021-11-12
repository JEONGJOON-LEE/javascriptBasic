<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>javascript20.jsp</title>
</head>

<!-- 자식 창이 열릴 때 부모 창의 데이터를 가져오려면 onload 이벤트를 이용한다.-->
<body onload="requestID()">

<!--readonly="readonly" : 수정이 불가능한 읽기전용 옵션  -->
ID : <input id="childID" type="text" readonly="readonly"><br>
<input type="button" value="부모 창으로 전달" onclick="sendID()"><br>
<input type="button" value="창을 닫을 때 부모 창으로 전달" onclick="sendID2()"><br> 
<!-- self : 현재 윈도우를 의미한다. / self.close() -->
<input type="button" value="창닫기" onclick="self.close()"><br> 

<script type="text/javascript" src="./js/javascript20.js"></script>
</body>
</html>


























