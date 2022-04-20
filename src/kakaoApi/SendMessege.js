const request = require('request');

const sendMessege = (ACCESS_TOKEN) => {


    let template_objectObj = {
        object_type: 'text',
        text: '신범이가 테스트로 보냅니다. 제발 받아주세요',
        'link': {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com'
        }
    };

    // Javascript -> JSON 타입으로 변경
    let template_objectStr = JSON.stringify(template_objectObj);

    let options = {
        url: 'https://kapi.kakao.com/v2/api/talk/memo/default/send',
        method: 'POST',

        headers: {
            'Authorization': 'Bearer ' + ACCESS_TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
            template_object: template_objectStr,
        }
    };

    function callback(error, response, body) {
        console.log('response.statusCode', response.statusCode);
        return response.statusCode;
    }

    request(options, callback);
}

module.exports = sendMessege;