const urls="https://google.com:8000";
const {URL}=require("url");
const myurl=new URL(urls);
console.log(myurl.protocol);
console.log(myurl.hostname);
console.log(myurl.port);