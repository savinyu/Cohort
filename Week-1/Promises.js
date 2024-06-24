const loda = require('fs');

function readmyfile(){
    return new Promise(function(resolve){
        loda.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}
//callback function to call
function onDone(data){
    console.log(data);
}

readmyfile().then(onDone);