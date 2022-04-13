const SecretInfo = require('./secret');
const secreInfo = new SecretInfo();

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs');
const session = require('express-session');

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

const kakao = {
    clientID: secreInfo.REST_API_KEY,
    clientSecret: secreInfo.CLIENT_SECRET_KEY,
    redirectUri: secreInfo.REDIRECT_URI_KEY
}

//profile account_email
app.get('/auth/kakao', (req, res) => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,account_email,profile_image`;
    // const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`;
    res.redirect(kakaoAuthURL);
})

app.get('/auth/kakao/callback', async (req, res) => {
    //axios>>promise object
    try {//access토큰을 받기 위한 코드
        token = await axios({//token
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                grant_type: 'authorization_code',//특정 스트링
                client_id: kakao.clientID,
                client_secret: kakao.clientSecret,
                redirectUri: kakao.redirectUri,
                code: req.query.code,//결과값을 반환했다. 안됐다.
            })//객체를 string 으로 변환
        })
    } catch (err) {
        res.json(err.data);
    }

    //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
    let user;
    try {
        console.log(token);//access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
        user = await axios({
            method: 'get',
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                Authorization: `Bearer ${token.data.access_token}`
            }//헤더에 내용을 보고 보내주겠다.
        })
    } catch (e) {
        res.json(e.data);
    }
    //console.log(user);

    req.session.kakao = user.data;
    //res.send('success');
    res.redirect('lcoalhost:3000')
});


app.get('/auth/info', (req, res) => {
    let { nickname, profile_image } = req.session.kakao.properties;

    console.log(req.session.kakao.properties);
    
    res.render('info', {
        nickname, profile_image,
    })
});

app.get('/', (req, res) => {
    console.log('렌더시작');
    res.render('main');    
});


app.get(kakao.redirectUri);

app.listen(3000, ()=>{
    console.log(`server start 3000`);
})

app.listen(8080, ()=>{
    console.log(`server start 8080`);
})

app.listen(433, ()=>{
    console.log(`server start 433`);
})

//app.use(express.static(__dirname+'/src/web/public'));