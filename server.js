    // 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.) 
//const http = require('http');


    // 2. http 모듈로 서버를 생성한다.
//    아래와 같이 작성하면 서버를 생성한 후, 사용자로 부터 http 요청이 들어오면 function 블럭내부의 코드를 실행해서 응답한다.
// const server = http.createServer((request,response)=>{ 

//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.end('Hello node.js!!');
    
// });

    // 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다
// server.listen(8080, function(){ 
//     console.log('Server is running...');
// });





//-------------------------------------------------------------------------
// EXPRESS 사용


// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();



// 포트로 서버 오픈
app.listen(80, function() {
    console.log("start! express server on port 80")
})

app.listen(443, function() {
    console.log("start! express server on port 433")
})



//URL Routing 처리
app.get('/',(req,res)=>{
    res.send("<h1> Hello there </h1>")
});

app.get('/main',(req,res)=>{
    res.sendFile(__dirname+"/src/web/pages/main/main.html")
});

app.get('/kakao/redirect',(req,res)=>{
    
});

app.get('/kakao/logout',(req,res)=>{
    
});

//static 디렉토리 설정
// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.

app.use(express.static(__dirname+'/src/web/public'));