//RestApi 를 사용함.

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs');
const session = require('express-session');


const getLoginInfo = () => {
    const KakaoLogin = require('./src/kakaoApi/KakaoLogin');
    const KakaoLoginInfoJson = require("./private/KakaoLoginInfo.json");
    const kakaoLogin = new KakaoLogin(qs.parse(KakaoLoginInfoJson));
    const loginInfo = kakaoLogin.getLoginInfo();
    return loginInfo;
}

// const kakaoApiMessege = require('./src/kakaoApi/SendMessege');

//인가코드받기

//console.log(getLoginInfo())
const Host = "kauth.kakao.com"
const AuthUrl = "/oauth/authorize?client_id=" + getLoginInfo().clientID + "&redirect_uri=" + getLoginInfo().redirectUri + "&response_type=code"

//서버키기
app.listen(3000, () => {
    console.log(`server start 3000`);
})

app.get('/auth/kakao/callback', () => {
    console.log('콜백 받아옴')
});


axios.get(Host + AuthUrl)
    .then(response => {
        console.log('response 함', response)
    })
    .catch(err => {
        console.log('에러발생', err)
    })

//console.log('accessAuth', accessAuth)








