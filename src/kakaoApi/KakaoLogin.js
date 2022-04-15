const KakaoLoginInfo = require('../../private/KakaoLoginInfo.json')
const qs = require('qs')
loginInfo = qs.parse(KakaoLoginInfo)


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

    getLoginInfo() {
        console.log('이객체 반환', this)
        return this
    }


}


module.exports = KakaoLogin
