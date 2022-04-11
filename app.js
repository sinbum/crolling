const {parsing} = require('./src/CrollIpo');
const {writeJson,readJson,updateJson} = require('./src/FileManager');


const directory = "database/ipo"
const fileName = "4월"


//이쪽에서 순서때문에 막힘.
parsing()
    .then((WebDatalist)=>{     
        //JSON.stringify(WebDatalist);
        //writeJson(directory,fileName,JSON.stringify(list))    
        const localDataList = readJson(directory,fileName);
        return localDataList;
        //updateJson(directory,fileName,localDataList,JSON.stringify(WebDatalist));
        
    })
    .then(localDataList=>{
        console.log('lcoalDataList',localDataList);        
    })
    .catch(e=>{return console.log("에러발생",e)})
