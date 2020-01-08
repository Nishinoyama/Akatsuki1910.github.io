/*jshint esversion: 8 */
const fs = require('fs');
let path = process.cwd();
path=path+"\\buturi";
const filenames = fs.readdirSync(path);

let result = [];

var p=0;
for(var i=0;i<659;i++){
    var flg=false;
    var file = ('000'+(i+1)).slice( -3 );
    if(filenames[p].indexOf(file) != -1){
        flg=true;
        p++;
    }
    var add={"file":file+".pdf","flg":flg};
    result.push(add);
}
//var obj = JSON.stringify(result);
//console.log(obj);
fs.writeFileSync('./file.json', JSON.stringify(result));
//const jsonObject = JSON.parse(fs.readFileSync('./file.json', 'utf8'));
//console.log(jsonObject[0]);