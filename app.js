const { parsing } = require('./src/CrollIpo');
const { writeJson, readJson, updateJson } = require('./src/FileManager');


const directory = "database/ipo"
const fileName = "4월"



parsing()
    .then((WebDatalist) => {
        //writeJson(directory,fileName,WebDatalist)    
        //readJson(directory,fileName);
        updateJson(directory, fileName, WebDatalist);

        return
    })
    .catch(e => { 
        return console.log("app.js 에서 parsing() 중 에러발생", e) 
    })
