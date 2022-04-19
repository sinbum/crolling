Crolling Study
==============

----------------------------------------------------------------

## 마크다운문법 참고링크

https://gist.github.com/ihoneymon/652be052a0727ad59601

----------------------------------------------------------------

## 스크래핑과 크롤링 날짜별 기록

### 스크래핑(cheerio)

웹사이트에서 정보를 한번만 긁어 가져오는 것을 스크래핑이라합니다.
정보를 원하는 웹사이트에 접속해서 html파일을 받아오고 원하는 정보만 추려내는 작업을 cheerio를 통해 쉽게 할 수
있습니다. [[참고링크]](https://velog.io/@ljh305/%EC%8A%A4%ED%81%AC%EB%9E%98%ED%95%91%EA%B3%BC-%ED%81%AC%EB%A1%A4%EB%A7%81)

### 크롤링(puppeteer)

한번이 아닌 지속적으로 정보를 긁어오고싶다면 puppeteer로 크롤링이 가능합니다.
puppeteer는 사이트자체를 복제하여 브라우저로 띄울수 있으며 내부 로그인등도 가능하게 해줍니다.

----------------------------------------------------------------------------------------------

22/04/12

### File System의 사용과 async & await 처리

Fs에서 sync기능과 아닌 기능의 차이점을 설명하고
있다. [[참고링크]](https://velog.io/@93jm/Node.js-File-System%EC%9D%98-%EC%82%AC%EC%9A%A9%EA%B3%BC-async-await-%EC%B2%98%EB%A6%AC)



----------------------------------------------------------------------------------------------


22/04/13

### Express

Express.js, 또는 간단히 익스프레스는 Node.js를 위한 웹 프레임워크의 하나로,
MIT 허가서로 라이선스되는 자유-오픈 소스 소프트웨어로 출시되었다. 웹 애플리케이션,
API 개발을 위해 설계되었다. Node.js의 사실상의 표준 서버 프레임워크로 불리고 있다

### Nodemon

파일 내부를 수정하고 저장하면 자동으로 서버가 다시
시작된다. [[참고링크]](https://velog.io/@goody/NodeJs-Express-%EB%A1%9C-%EC%9B%B9%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0)

### nunjucks

html내부에서 템플릿 사용가능. thymleaf,jstl 같은
라이브러리. [[참고링크]](https://inpa.tistory.com/entry/Nunjucks-%F0%9F%93%9A-%EB%84%8C%EC%A0%81%EC%8A%A4-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC)

### qs

QueryString 의 약자이며 JSON.parse,JSON.stringfy 와 비슷한 기능을 내포하고있다.


----------------------------------------------------------------------------------------------

22/04/14

### 카카오 와 로그인 연동하기

node js를 활용한 카카오 로그인 연동 설명
[[참고링크]](https://velog.io/@nara7875/Node.js-kakao-login-api-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0)

### 로그인 연동 후 자바스크립트로 메시지 보내기

restApi가 이루어지는방식에서 서버자신이 클라이언트가 되도록 리다이렉트를 해서 함수를 호출한다.[[참고링크]](https://psyhm.tistory.com/4)

### express-generator를 사용해 디렉토리를 구조적으로 만들기.

정리) 토큰받고 토큰정보와 request 에 해당 요청정보를 함께 보낸다.

카카오 로그인 방식의 정리본 : [[참고링크]](https://han-py.tistory.com/417)

----------------------------------------------------------------------------------------------
22/04/15

### 코드 정리 >> 클래스화

초기에 객체지향방식으로 공부했었던.. 그리고 최근 함수지향방식으로 코딩하고있는요즘
다시 객체지향방식의 필요성을 느끼고 es6에서 코딩가능한 클래스화를 카카오로그인방식을 클래스화 시킴.
[참고링크](https://webclub.tistory.com/136)


------------------------------------------------
22/04/17

### node.js 의 HTTP 요청 관련 라이브러리들

(request vs axios vs superagent)  
[참고링크](https://bluayer.com/34)

### passport 라이브러리.

카카오톡 친구목록불러서 친구에게 보내기.
Node.js에서 Authenticate를 적용할 때에, 편하게 사용할 수 있는 미들웨어입니다.
여권은 입/출국 심사시에 해당 여권 소지자가 입/출국 자격에 대해 인증하는 역할을 합니다.
이를 서버에 비교해보면, 클라이언트가 서버에 요청할 자격이 있는지 인증할 때에 passport 미들웨어를 사용합니다.

------------------------------------------------

22/04/18

### selenium-webdriver

selenium을 활용하면 웹페이지 정보 수집도 가능하고 원하는 웹 자동화 프로그램을 작성할 수 있습니다.
selenium은 다양한 브라우저(Chrome, Internet, Edge, Firefox, Opera, Safari)를 지원합니다.

[참고링크](https://dreamjy.tistory.com/96)

------------------------------------------------

22/04/19

### npm install 과 npm install --save 의 차이점.

'--save' 옵션이 없는 경우에는 현재 node_modules 에 설치만 하지만
'--save' 옵션을 붙인 경우에는 package.json 의 dependecies에 추가되게 된다.

[참고링크](https://wotres.tistory.com/entry/npm-install-%EA%B3%BC-npm-install-save-%EC%B0%A8%EC%9D%B4)

### npm 설치 항목 목록보기.

npm ls -g
npm list -g

[참고링크](https://backback.tistory.com/357)




