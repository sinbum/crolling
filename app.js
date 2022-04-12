const {parsing} = require('./src/CrollIpo');
const {writeJson,readJson,updateJson} = require('./src/FileManager');


const directory = "database/ipo"
const fileName = "4월"


//이쪽에서 순서때문에 막힘.
parsing()
    .then((WebDatalist)=>{
        //JSON.stringify(WebDatalist);
        //console.log(WebDatalist); // 제이슨 포멧으로 돌려주는가?
        //writeJson(directory,fileName,WebDatalist)    
        
        readJson(directory,fileName);
            //console.log('lcoalDataList',WebDatalist);        
            //updateJson(directory,fileName,WebDatalist);

        return 
        
    })
    
    .catch(e=>{return console.log("app.js 에서 parsing() 중 에러발생",e)})
