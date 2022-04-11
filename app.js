const {parsing} = require('./src/CrollIpo');
const {writeJson} = require('./src/FileManager');


const directory = "database/ipo"
const fileName = "4월"



parsing()
.then((list)=>{ 
    
    JSON.stringify(list);
    writeJson(directory,fileName,JSON.stringify(list))
    
    list.forEach((row)=>{
        console.log(row);
        //writeJson(directory,fileName,row)
    })
    return;
})
.catch(e=>{return console.log("에러발생",e)})

