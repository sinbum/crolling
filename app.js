const {parsing} = require('./src/CrollIpoCopy');
const {printOut} = require('./src/FileManager');


parsing()
.then((list)=>{                
    console.log(list);
    return;
})
.catch(e=>{return console.log("에러발생",e)})


