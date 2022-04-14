// 카카오 시크릿정보 입력.
const REST_API_KEY = "54c79fae743605a84b3a9725d0a91ffa"
const CLIENT_SECRET_KEY = "Y5a0VrUB33wy7qw7U9P8E4XfcXPY5Ssi"
const REDIRECT_URI_KEY =  "http://localhost:3000/auth/kakao/callback"
const JAVASCRIPT_KEY ="	53fa10100dc19b2b6685987d3e8b2497";

class KakaoLogin {
    
    constructor(params) {
        this.REST_API_KEY = REST_API_KEY
        this.CLIENT_SECRET_KEY = CLIENT_SECRET_KEY
        this.REDIRECT_URI_KEY = REDIRECT_URI_KEY
        this.JAVASCRIPT_KEY = JAVASCRIPT_KEY
    }

}

module.exports = KakaoLogin
