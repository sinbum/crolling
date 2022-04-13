
const axios = require("axios");
const cheerio = require("cheerio");
const url = "http://www.ipostock.co.kr/sub03/ipo04.asp";   

const getHTML = async() => {
    try {
        return await axios.get(url)        
    } catch (err) {
        console.log(err)
    }
}

module.exports.parsing = async () =>{
    const html = await getHTML();
    const $ = cheerio.load(html.data);     
    let ipoList = [];
    
    //공모 테이블 부분
    //const ipoListDir = $('#print > table > tbody > tr:nth-child(4)');

    //컬럼
    const columnDir = $('#print > table > tbody > tr:nth-child(4) td table tbody tr:nth-child(2) td table tbody tr');

    //데이터
    const dataDir = $('#print > table > tbody > tr:nth-child(4) td table tbody tr:nth-child(4) td table tbody tr');
   
    function getColumn(elementList) {
        const obj={};
        elementList.each((i,elem)=>{
            //추천
            obj[$(elem).find('td:nth-child(1)').text().trim()]=
            console.log('1번 td',$(elem).find('td:nth-child(1)').text().trim());
            //공모일정
            console.log('3번td',$(elem).find('td:nth-child(3)').text().trim());
            obj[$(elem).find('td:nth-child(3)').text().trim()]
            // 종목명;
            console.log('5번td',$(elem).find('td:nth-child(5)').text().trim());
            obj[$(elem).find('td:nth-child(5)').text().trim()]
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

        console.log(obj);
    }


    function getData(elementList) {
        const tempList = [];
        const result = [];
        let id = 1;

        elementList.each((i,elem)=>{            
            
            function makeObj(id,추천,공모일정,종목명,희망공모가,공모가,공모금액,환불일,상장일,경쟁률,주간사) {
                const obj = {};
                obj.id = id;                
                obj.recommend = 추천;
                obj.recommend.desc = "추천";

                obj.applyDate = 공모일정;
                obj.applyDate.desc = "공모일정";

                obj.name = 종목명;
                obj.name.desc = "종목명";

                obj.mostPrice = 희망공모가; 
                obj.mostPrice.desc = "희망공모가";

                obj.price = 공모가;
                obj.price.desc = "공모가";

                obj.priceAllTogether = 공모금액;
                obj.priceAllTogether.desc = "공모금액";

                obj.refundDate = 환불일;
                obj.refundDate.desc = "환불일";

                obj.openDate = 상장일;
                obj.openDate.desc = "상장일"; 

                obj.coRate = 경쟁률;
                obj.coRate.desc = "경쟁률";
                
                obj.companyName = 주간사;
                obj.companyName.desc = "주간사";

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

            tempList.push(makeObj(id++,추천,공모일정,종목명,희망공모가,공모가,공모금액,환불일,상장일,경쟁률,주간사));

            
        });

        tempList.forEach((row)=>{            
            if(row.name.length !== 0){
                result.push(row)                
            }
        });
        return result;
    }  
    
    ipoList = getData(dataDir);

    return ipoList;   
    
    
    
}

