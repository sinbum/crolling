const fs = require('fs');
const fsPromises = require('fs').promises;




//제이슨 파일 가져오기
const getJsonFromFile =async (directory, fileName) => {
    const filePath =await directory + "/" + fileName + ".json";

    let data = await fsPromises.readFile(filePath, 'utf8', (err, data) => {
        if (err) {            
            return console.log('제이슨 파일 가져오기 에러발생', err);
        }
        if (data) {
            return JSON.parse(data)            
        }
    });
    return JSON.parse(data);

}

// 디렉토리 생성하기
const makeDirectory = (dir) => {
    const directory = dir;
    if (!fs.existsSync(directory)) fs.mkdirSync(directory);    //보통 Directory가 없다면 새로 만들어야 한다면 아래와 같은 코드를 만들어 사용할 수 있다. 
}

// 제이슨 파일 저장하기
const makeJsonToFile = (directory, fileName, jsonList) => {
    let filePath;


    if (!directory) {
        console.log("파일경로 입력 필요");
    }

    if (!fileName) {
        console.log("파일이름 입력 필요");
    }

    if (!jsonList) {
        console.log("데이터정보 입력 필요");
    }

    filePath = directory + "/" + fileName + ".json";

    //디렉토리가 없으면 디렉토리 생성
    makeDirectory(directory);

    fs.writeFileSync(filePath, JSON.stringify(jsonList), function (err) {
        if (err) {
            console.log(err);
        }
    });

}


//인자로 받은 객체 정보 와 저장되어있는 데이터 비교하기.
const localUpdate = async (directory, fileName, webDataList) => {
    let isChanged = false;
    let changedList = [];

    let localDataList = await getJsonFromFile(directory, fileName);
    

    // console.log("webDataList", webDataList);
    // console.log("localDataList", localDataList);
    
    
    //둘다 리스트화 시켜야함.

    console.log('webDataList.length',webDataList.length);
    console.log('localDataList.length',localDataList.length);
    
    if (webDataList.length != localDataList.length) {
        if (webDataList.length - localDataList.length > 0) {
            const 차수 = webDataList.length - localDataList.length;
            let idx = webDataList.length - 차수;

            for (let index = 0; index < 차수; index++) {
                localDataList.push(webDataList[idx]);
                idx++;
            }

            console.log("(알림)", "데이터 업데이트", 'ipo정보가 ' + 차수 + "건 차이가 있습니다.");
            isChanged = true;
            changedList = localDataList;

            //console.log('변경된 리스트 길이',changedList.length);
        }
    }
    
    //console.log('변경된 리스트 내역',changedList);
    

    //console.log(JSON.parse(webDataList));

    
    //웹데이터와 변경된 데이터내용중 세부데이터 비교 후 수정
    // 동적데이터 >>> 공모가,공모금액,상장일,경쟁률
    webDataList.forEach((row,idx) => {


        //console.log('row',row);
        //console.log('row',idx);
        if (changedList[idx].price != row.price) {         

            changedList[idx].price = row.price;
            console.log("(알림)", row.name.desc + " 종목의 " + row.price.desc + "이(가) 업데이트 되었습니다.");
            isChanged = true;
        }

        if (changedList[idx].priceAllTogether != row.priceAllTogether) {
            changedList[idx].priceAllTogether = row.priceAllTogether;
            console.log("(알림)", row.name.desc + " 종목의 " + row.priceAllTogether.desc + "이(가) 업데이트 되었습니다.");
            isChanged = true;
        }

        if (changedList[idx].openDate != row.openDate) {
            changedList[idx].openDate = row.openDate;
            console.log("(알림)", row.name.desc + " 종목의 " + row.openDate.desc + "이(가) 업데이트 되었습니다.");
            isChanged = true;
        }

        if (changedList[idx].coRate != row.coRate) {
            changedList[idx].coRate = row.coRate;
            console.log("(알림)", row.name.desc + " 종목의 " + row.coRate.desc + "이(가) 업데이트 되었습니다.");
            isChanged = true;
        }

    });

    if(isChanged){
        console.log('데이터가 변경되었음을알립니다.');
        console.log('수정 저장합니다.');
    }
   
   makeJsonToFile(directory, fileName, changedList);

}


module.exports = {
    writeJson: function (directory, fileName, jsonObj) {
        makeJsonToFile(directory, fileName, jsonObj);
    },
    readJson: function (directory, fileName) {
        getJsonFromFile(directory, fileName);
    },
    updateJson: function (directory, fileName, webDataList) {
        localUpdate(directory, fileName, webDataList);
    }


}

