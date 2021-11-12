<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>javascript01</title>

<script type="text/javascript" src="./js/javascript01.js"></script>

<!-- 
	자바 스크립트를 웹 문서에 포함시키는 방법
	
	1. head에 삽입하는 경우
		<head>
			<script type="text/javascript" src="javascript01.js"></script>
		</head>
	  	: parsing html => fetching js => executing js => parsing html
	  	
	  	무거운 스크립트일수록 브라우저 랜더링이 더 지연되어 사용자에게 완성되지 못한 화면을 오래 노출할 수 있다.
	  	DOM: https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction 참조
	  	DOM(html 문서 구조) 구조가 필요한 스크립트일 경우 아직 랜더링되지 않은 DOM 요소가 있을 경우 오류가 발생할 수 있다.
	
	
	 2. </body> 앞에 선언하는 경우
			...
			<script type="text/javascript" src="javascript01.js"></script>
		</body>
		: parsing html => fetching js => executing js
		
		브라우저가 랜더링이 완료된 상태에서 스크립트가 실행된다. => 대부분의 스크립트의 위치로 추천되는 위치
		스크립트에서 DOM 요소에 접근해도 문제가 발생되지 않는다.
		
		
	  3. async
		<head>
			<script async type="text/javascript" src="javascript01.js"></script>
			<script async type="text/javascript" src="javascript02.js"></script>
			<script async type="text/javascript" src="javascript03.js"></script>
		</head>
		
		parsing html 	=>				parsing html
		fetching js		=>	executing js
		
		async 속성을 사용하면 브라우저가 html을 파싱하는 중에 병렬로 js파일을 다운받으면서 파싱을 진행하다가 js 파일의 다운이 
		완료되면 파싱을 중지하고 js를 실행한다. 실행이 된 뒤 html 파싱을 진행한다.
		js 파일을 다운받는 시간을 절약할 수 있지만, js에서 DOM 요소에 접근 시 아직 html 파싱이 완료된 상태가 아니므로 오류가 발생할 수 있고
		브라우저 랜더링이 지연될 수 있다.
		여러개의 js파일을 다운받아야 할 경우 먼저 다운된 js 파일을 우선적으로 실행하기 때문에 js 파일의 순서가 중요할 경우 자제해야 한다.


		4. defer
		<head>
			<script defer type="text/javascript" src="javascript01.js"></script>
			<script defer type="text/javascript" src="javascript02.js"></script>
			<script defer type="text/javascript" src="javascript03.js"></script>
		</head>
		
		parsing html 	=>	parsing html
		fetching js						=>	executing js

		defer 속성을 사용하면 브라우저가 html을 파싱하는 중에 병렬로 js 파일을 다운받으면서 파싱을 진행하고 html 파싱이 끝난 뒤 다운받는 js
		파일을 실행한다.
		js 파일 다운로드 시간을 절약할 수 있고, 정의한 js 순서대로 js 파일이 실행된다.
-->

</head>
<body>

</body>
</html>