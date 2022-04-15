const qs = require("qs");

class KakaoLogin {

    constructor(loginInfo) {

        if (!loginInfo.REST_API_KEY) {
            console.log('getLoginInfo', 'REST_API_KEY 값이 존재하지 않습니다.')
        }
        if (!loginInfo.CLIENT_SECRET_KEY) {
            console.log('getLoginInfo', 'CLIENT_SECRET_KEY 값이 존재하지 않습니다.')
        }
        if (!loginInfo.REDIRECT_URI_KEY) {
            console.log('getLoginInfo', 'REDIRECT_URI_KEY 값이 존재하지 않습니다.')
        }

        if (loginInfo.REST_API_KEY) {
            this.clientID = loginInfo.REST_API_KEY
        }

        if (loginInfo.CLIENT_SECRET_KEY) {
            this.clientSecret = loginInfo.CLIENT_SECRET_KEY
        }

        if (loginInfo.REDIRECT_URI_KEY) {
            this.redirectUri = loginInfo.REDIRECT_URI_KEY
        }
    }

    //kakaoLoginInfo 반환
    getLoginInfo() {
        return this
    }

    getKakaoAuthURL(kakaoLoginInfo) {
        if (!kakaoLoginInfo) {
            console.log("getReqestInfo()", "로그인 엑세스 정보가 없음")
        }
        const scope = 'scope=profile_nickname,account_email,profile_image,talk_message';
        const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoLoginInfo.clientID}&redirect_uri=${kakaoLoginInfo.redirectUri}&response_type=code&` + scope;
        return kakaoAuthURL
    }

    getReqestInfo(kakaoLoginInfo) {

        if (!kakaoLoginInfo) {
            console.log("getReqestInfo()", "로그인 엑세스 정보가 없음")
        }

        return {//token
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                grant_type: 'authorization_code',//특정 스트링
                client_id: kakaoLoginInfo.clientID,
                client_secret: kakaoLoginInfo.clientSecret,
                redirectUri: kakaoLoginInfo.redirectUri,

                //주의()!!!!!!
                //code: req.query.code,//결과값을 반환했다. 안됐다.

            }//객체를 string 으로 변환
        }
    }

    getRequestUserData(access_token) {
        if (!access_token) {
            console.log('getRequestUserData() 에러발생', '액세스토큰 이없음.')
            return
        }

        return {
            method: 'get',
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                Authorization: `Bearer ` + access_token
            }//헤더에 내용을 보고 보내주겠다.
        }
    }


}


module.exports = KakaoLogin




