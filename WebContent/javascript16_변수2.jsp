<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>javascript16</title>
</head>
<body>

<h1>자바스크립트 변수</h1>
<button type="button" onclick="scopeTest()">변수 범위</button>

<!-- 
	<dl> 태그는 definition list(정의 목록)의 약자로 사전처럼 용어를 설명하는 목록을 만든다. 
	<dt> 태그는 definition term(정의 용어)의 약자로 정의되는 용어의 제목을 넣을 때 사용한다. 
	<dd> 태그는 definition description(정의 설명)의 약자로 용어 설명에 사용한다. 
-->

<dl>
	<dt>변수명 작성방법</dt>
	<p> 
		<dd>1. 대문자와 소문자를 구분한다.</dd>
		<dd>2. 문자로 시작해야 한다. (특수문자는 '_'와 '$'만 사용 가능)</dd>
		<dd>3. 자바스크립트와 약속된 예약어는 변수명으로 사용할 수 없다.</dd>
	</p>
	
	<dt>변수의 범위</dt>
	<p>
		<dd>1. 전역 변수는 자바스크립트의 최상위 객체 window 객체에 포함되는 변수로 모든 함수에서<br>
			&nbsp;&nbsp;&nbsp;공통적으로 사용할 수 있다.<br>
		    &nbsp;&nbsp;&nbsp;변수에 저장된 값이 계속 유지된다.<br>
		    &nbsp;&nbsp;&nbsp;<button type="button" onclick="test1()">확인</button>
		 </dd>
		 <!-- 전역 변수 variable에 저장된 값을 출력한다. -->
		 <dd id="var1"></dd>
		 <dd>
		 	2. 지역 변수는 함수나 객체 내부에서 선언되고 함수나 객체가 종료되는 시점에서 메모리에서 소멸된다.<br>
		    &nbsp;&nbsp;&nbsp;<button type="button" onclick="test2()">지역 Scope</button>
		    <button type="button" onclick="test3()">지역 변수 확인</button>
		 </dd>
		 <dd id="var2"></dd>
	</p>
	<dt>자바스크립트의 데이터 타입 종류</dt>
	<p>
		<dd>1. 문자(string) </dd>
		<dd>2. 숫자(number) </dd>
		<dd>3. 논리(boolean)</dd>
		<dd>4. null			</dd>
		<dd>5. 객체(object) </dd>
		<dd>6. 함수(function)</dd>
	</p>
	
	<dt>변수의 선언과 저장</dt>
	<p>
		<dd>1. var 예약어로 변수를 선언한다. var를 붙이지 않아도 변수는 선언된다.</dd>
		<dd>2. ES6부터 let과 const가 추가되었다.</dd>
		<dd>
			3. 변수의 데이터 타입은 변수에 저장되는 데이터의 타입에 따라서 자동으로 결정된다.<br>
			 &nbsp;&nbsp;&nbsp;<button type="button" onclick="test4()">변수 타입 확인</button>
		</dd>
	</p>
</dl>

<script type="text/javascript" src="./js/javascript16.js"></script>
</body>
</html>


























