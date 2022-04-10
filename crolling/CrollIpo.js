const axios = require("axios");
const cheerio = require("cheerio")
const url = "http://www.ipostock.co.kr/sub03/ipo04.asp";   

const getHTML = async() => {  
    try {
        return await axios.get(url)        
    } catch (err) {
        console.log(err)
    }
}

const parsing = async () =>{
    const html = await getHTML();
    const $ = cheerio.load(html.data);        
    //const $ipoList = $('body table tbody tr td table tbody tr td div#print table tbody tr td table tbody tr td table tbody tr');
    
    //공모 테이블 부분
    const ipoList = $('#print > table > tbody > tr:nth-child(4)');

    //컬럼
    const columnDir = $('#print > table > tbody > tr:nth-child(4) td table tbody tr:nth-child(2) td table tbody tr');

    //데이터
    const dataDir = $('#print > table > tbody > tr:nth-child(4) td table tbody tr:nth-child(4) td table tbody tr');
   
    function getColumn(elementList) {

        elementList.each((i,elem)=>{
            //추천
            console.log('1번 td',$(elem).find('td:nth-child(1)').text().trim());
            //공모일정
            console.log('3번td',$(elem).find('td:nth-child(3)').text().trim());
            // 종목명;
            console.log('5번td',$(elem).find('td:nth-child(5)').text().trim());
            // 희망공모가
            console.log('7번td',$(elem).find('td:nth-child(7)').text().trim());
            // 공모가
            console.log('9번td',$(elem).find('td:nth-child(9)').text().trim());
            // 공모금액
            console.log('11번td',$(elem).find('td:nth-child(11)').text().trim());
            // 환불일
            console.log('13번td',$(elem).find('td:nth-child(13)').text().trim());
            // 상장일
            console.log('15번td',$(elem).find('td:nth-child(15)').text().trim());
            // 경쟁률
            console.log('17번td',$(elem).find('td:nth-child(17)').text().trim());
            // 주간사
            console.log('19번td',$(elem).find('td:nth-child(19)').text().trim());

        });        
    }


    function getData(elementList) {
        const list = [];
        
        elementList.each((i,elem)=>{            
            
            function makeObj(추천,공모일정,종목명,희망공모가,공모가,공모금액,환불일,상장일,경쟁률,주간사) {
                const obj = {};

                obj.추천 = 추천;
                obj.공모일정 = 공모일정;
                obj.종목명 = 종목명;
                obj.희망공모가 = 희망공모가;
                obj.공모가 = 공모가;
                obj.공모금액 = 공모금액;
                obj.환불일 = 환불일;
                obj.상장일 = 상장일;
                obj.경쟁률 = 경쟁률;
                obj.주간사 = 주간사;

                return obj
            }
            
            //추천
            const 추천 = $(elem).css('height','30').find('td:nth-child(1)').text().trim();

            //공모일정
            const 공모일정 = $(elem).css('height','30').find('td:nth-child(2)').text().trim();
           
            // 종목명
            const 종목명 = $(elem).css('height','30').find('td:nth-child(3)').text().trim();
            
            // 희망공모가
            const 희망공모가 = $(elem).css('height','30px').find('td:nth-child(4)').text().trim();

            // 공모가
            const 공모가 = $(elem).css('height','30px').find('td:nth-child(5)').text().trim();

            // 공모금액
            const 공모금액 = $(elem).css('height','30px').find('td:nth-child(6)').text().trim();

            // 환불일
            const 환불일 = $(elem).css('height','30px').find('td:nth-child(7)').text().trim();

            // 상장일
            const 상장일 = $(elem).css('height','30px').find('td:nth-child(8)').text().trim();

            // 경쟁률
            const 경쟁률 = $(elem).css('height','30px').find('td:nth-child(9)').text().trim();

            // 주간사
            const 주간사 = $(elem).css('height','30px').find('td:nth-child(10)').text().trim();

            if(종목명.length === 0 ){
                return;
            }

            list.push(makeObj(추천,공모일정,종목명,희망공모가,공모가,공모금액,환불일,상장일,경쟁률,주간사));
        });

        list.forEach((row)=>{
            
            if(row.종목명.length !== 0){
                console.log(row);
            }
        });

        return list;
    }

    getData(dataDir)

}

parsing()

