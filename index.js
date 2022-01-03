const http = require('./publicJs/httpRequest');
var express = require('express');
const app = express();

var httpRequest = new http();
var top100 = "";
// app.listen(3000,function(req, res){
//     console.log('Server Open');
// });


// app.get("/", function(req, res){

// });


// app.get("/melon", function(req, res){
//     console.log("melon scrapping init!");
//     const melon = require('./module/mellon');
    
// });




/*
 jest 라이브러리를 개발 의존성으로 설치 
 npm i -D jest
*/
/**
 * *** 사용 모듈 
 *      - axios
 *          통신모듈
 *      - express
 *          라우팅용
 *
 * *** 해야할 것들 
 *      1. test 코드 -> jest 환경은 맞춰둥
 *          jest 라이브러리를 개발 의존성으로 설치 
            npm i -D jest
 
 *      2. axios - httpRequest.get/.post return 형식 true/false
        
        3. 공인인증서 로그인
            nodejs pkcs7 모듈 제공
            touchKey 구현 어려울듯 

 * *** 전달사항
 * 
 *      class test{
 *       login = function(){}
 *      
 *      }
 *      
 *       위 아래 동일한듯 
 *       
 *      var test = function(){}
 *      test.prototype.login = function(){}
 *      
 *      module.exports = test;
 * 
 *      var test = function (){}
 *      module.exports = test // 함수 내보내기 
 * 
 *      var test = {}
 * 
 *      test.prototype.testFunction = function(){}
 * 
 *      module.exports = test // moduel exports 
 * 
 *      
 * 
 *
 * 
 *  
 */
async function init(){
    //
    const gen = require('./module/genie');
    const genie = new gen();
    var result = await genie.login("neb0030", "jjwoo616!");
    if(result ==1){
        console.log("[index] 로그인 진짜 성공!")
    }
    if(top100 == ""){
        var result = await genie.getRealChartGenie();
        console.log("top100: "+result)
    }

}

init();
