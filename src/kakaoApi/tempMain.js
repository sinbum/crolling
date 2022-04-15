const qs = require("qs");

const KakaoLogin = require('./KakaoLogin');
const KakaoLoginInfoJson = require("../../private/KakaoLoginInfo.json");


const kakaoLogin = new KakaoLogin(qs.parse(KakaoLoginInfoJson));

const loginInfo = kakaoLogin.getLoginInfo()

console.log(loginInfo)

