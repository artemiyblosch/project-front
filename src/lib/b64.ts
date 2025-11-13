/* eslint-disable */
export const readSyncDataURL : any=function(file : any){
var url=URL.createObjectURL(file);//Create Object URL
var xhr=new XMLHttpRequest();
xhr.open("GET",url,false);//Synchronous XMLHttpRequest on Object URL
xhr.overrideMimeType("text/plain; charset=x-user-defined");//Override MIME Type to prevent UTF-8 related errors
xhr.send();
URL.revokeObjectURL(url);
var returnText="";
for (var i=0;i<xhr.responseText.length;i++){
returnText+=String.fromCharCode(xhr.responseText.charCodeAt(i)&0xff);};//remove higher byte
return "data:"+file.type+";base64,"+btoa(returnText);}