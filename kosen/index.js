/*jshint esversion: 8 */
//659
var jsonObject;
$.ajaxSetup({async: false});
$.getJSON("./file.json",(data)=>{
    jsonObject=data;
    for(var i=0;i<659;i++){
        var file = ('000'+(i+1)).slice( -3 );
        //var url = ""+location.href+"buturi/"+file+".pdf";
        //url=url.replace("index.html","");
        //var flg=UrlExists(url);
        url=""+location.href+"buturi/"+jsonObject[i].file;
        if(jsonObject[i].flg){
            $('#body').append('<a href="'+url+'">'+file+'</a><br>');
        }else{
            $('#body').append('<a href="#" class="none"><s>'+file+'</s></a><br>');
        }
        $('.none').css({"pointer-events": "none","cursor": "default","text-decoration": "none","color": "#000000"});
    }
});
$.ajaxSetup({async: true});
function UrlExists(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}