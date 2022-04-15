/*

이거슨 참고용.

*/







const express = require('express');
const session = require('express-session');
const cors = require("cors");
const qs = require("qs");
const axios = require('axios');
const app = express();
const port = 4000;
app.use(session({
    secret: 'your session secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
let corsOptions = {
    origin: 'http://localhost',
    credentials: true
}
app.use(cors(corsOptions));

const client_id = '여기에 REST_API_KEY를 입력하세요';
const redirect_uri = 'http://localhost:4000/redirect';
const token_uri = 'https://kauth.kakao.com/oauth/token';
const api_host = "https://kapi.kakao.com";
const client_secret = '';

app.get('/authorize', function (req, res) {
    let { scope } = req.query;
    var scopeParam = "";
    if (scope) {
        scopeParam = "&scope=" + scope;
    }
    res.status(302).redirect(`https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code${scopeParam}`);
})
async function call(method, uri, param, header){
    try {
        rtn = await axios({
            method: method,
            url: uri,
            headers: header,
            data: param
        })
    } catch (err) {
        rtn = err.response;
    }    
    return rtn.data;
}

app.get('/redirect', async function (req, res) {
    const param = qs.stringify({
        "grant_type": 'authorization_code',
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "client_secret": client_secret,
        "code": req.query.code
    });
    const header = { 'content-type': 'application/x-www-form-urlencoded' };
    var rtn = await call('POST', token_uri, param, header);
    req.session.key = rtn.access_token;
    res.status(302).redirect(`http://localhost/demo.html`);
})

app.get('/profile', async function (req, res) {
    const uri = api_host + "/v2/user/me";
    const param = {};
    const header = {
        'content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + req.session.key
    }
    var rtn = await call('POST', uri, param, header);
    res.send(rtn);
})

app.get('/friends', async function (req, res) {
    const uri = api_host + "/v1/api/talk/friends";
    const param = null;
    const header = {
        'Authorization': 'Bearer ' + req.session.key
    }
    var rtn = await call('GET', uri, param, header);
    res.send(rtn);
})

app.get('/message', async function (req, res) {
    const uri = api_host + "/v2/api/talk/memo/default/send";
    const param = qs.stringify({
        "template_object": '{'+
                '"object_type": "text",'+
                '"text": "텍스트보내기 신범.",'+
                '"link": {'+
                '    "web_url": "https://developers.kakao.com",'+
                '    "mobile_web_url": "https://developers.kakao.com"'+
                '},'+
                '"button_title": "바로 확인"'+
            '}'
        });
    const header = {
        'content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + req.session.key
    }
    var rtn = await call('POST', uri, param, header);
    res.send(rtn);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})