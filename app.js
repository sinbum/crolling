const { parsing } = require('./src/scrap/CrollIpo');
const { writeJson, readJson, updateJson } = require('./src/control/FileManager');


const directory = "database/ipo"
const fileName = "4월"




const playWhile = setInterval(function(){   

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


},5000);

