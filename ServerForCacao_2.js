const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs');
const session = require('express-session');

const KakaoLogin = require('./src/kakaoApi/KakaoLogin');
const KakaoLoginInfoJson = require("./private/KakaoLoginInfo.json");
const kakaoLogin = new KakaoLogin(qs.parse(KakaoLoginInfoJson));
const loginInfo = kakaoLogin.getLoginInfo();
console.log('로그인정보', loginInfo)
const authUrl = kakaoLogin.getKakaoAuthURL(loginInfo);


const kakaoApiMessege = require('./src/kakaoApi/SendMessege');


let token = {};


app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
})

//세션을 설정할 때 쿠키가 생성된다.&&req session의 값도 생성해준다. 어느 라우터든 req session값이 존재하게 된다.
app.use(session({
    secret: 'ras',
    resave: true,
    secure: false,
    saveUninitialized: false,
}))


app.get('/auth/kakao', (req, res) => {

    console.log(authUrl)
    //res.redirect(authUrl); //authurl
    //res.send(authUrl);

    res.send('<h1>hello  world</h1>')


})


app.get('/auth/kakao/callback', async (req, res) => {
    console.log('바로 로그인됨');

    let requestInfo = kakaoLogin.getReqestInfo(loginInfo);
    requestInfo.data.code = req.query.code;
    requestInfo.data = qs.stringify(requestInfo.data);

    console.log('req.query.code', req.query.code)
    console.log(requestInfo);
    //access토큰을 받기 위한 코드
    try {
        token = await axios(requestInfo)
        //console.log('token', token)
    } catch (err) {
        //console.log('에러발생')
        res.json(err.data);
    }

    //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
    let user;
    try {
        // console.log('토큰정보', token);//access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
        user = await axios(kakaoLogin.getRequestUserData(token.data.access_token))
    } catch (e) {
        res.json(e.data);
    }
    //console.log(user);

    req.session.kakao = user.data;
    //res.send('success');
    res.redirect('localhost:8080')
});


app.get('/auth/info', (req, res) => {
    let {nickname, profile_image} = req.session.kakao.properties;

    //console.log(req.session.kakao.properties);

    res.render('info', {
        nickname, profile_image,
    })
});

app.get('/', (req, res) => {
    //console.log('렌더시작');
    res.render('main');
});


app.get(kakaoLogin.redirectUri)


app.get('/kakao/sendMessege', async (req, res) => {
    let status;

    if (token) {
        status = await kakaoApiMessege(token.data.access_token);
        console.log('status', status)
    }

    if (status == 200) {
        console.log(status)
        res.json({message: "ok!"})
        // res.status(200).end();
    }

});


app.listen(3000, () => {
    console.log(`server start 3000`);
})

app.listen(8080, () => {
    console.log(`server start 8080`);
})

app.listen(433, () => {
    console.log(`server start 433`);
})


