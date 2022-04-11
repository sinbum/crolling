const fs = require('fs');


//인자값으로 파일저장이름


//제이슨 파일 저장하기



//제이슨 파일 가져오기



//인자로 받은 객체 정보 와 저장되어있는 데이터 비교하기.




const makeDirectory = (dir) => {
    const directory = dir;    
    //보통 Directory가 없다면 새로 만들어야 한다면 아래와 같은 코드를 만들어 사용할 수 있다.       
    if(!fs.existsSync(directory)) fs.mkdirSync(directory);
}






//연습

const makeJsonToFile = (directory,fileName,jsonObj) => {
    let data,filePath;


    if(!directory){
        console.log("파일경로 입력 필요");
    }
    
    if(!fileName){
        console.log("파일이름 입력 필요");
    }

    if(!jsonObj){
        console.log("데이터정보 입력 필요");
    }

    

    filePath = directory +"/"+ fileName + ".txt";


    makeDirectory(directory);  
    
    console.log(jsonObj);

    fs.writeFileSync(filePath, JSON.stringify(jsonObj), function(err) {
        if (err) {
            console.log(err);
        }
    });
    
}




















module.exports = {
    writeJson : function(directory,fileName,jsonObj){
        makeJsonToFile(directory,fileName,jsonObj)
    }
}

