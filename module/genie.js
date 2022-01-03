const httpRequest = require('../publicJs/httpRequest');
const common = require('../publicJs/commonJS');
const sliceFunc = require('../publicJs/commonJS');
const Music = require('../models/music');

// const httpRequest = new http();


class genie{

    constructor(){

    }
    
    host = "https://www.genie.co.kr"
    header = {}
    cookie = ""
    postData = ""

    login = async function(id, pw){
        //git

        if(!await httpRequest.prototype.get(this.host)){
            console.log("Get Transfer Error!")
            console.error();
        }
        var result = httpRequest.result;

        this.cookie = await httpRequest.prototype.getCookie();
        var path = this.host+"/auth/signIn"
        this.header['Connection']='keep-alive'
        this.header['Cache-Control']='max-age=0'
        this.header['sec-ch-ua']='" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"'
        this.header['sec-ch-ua-mobile']='?0'
        this.header['sec-ch-ua-platform']='"Windows"'
        this.header['Upgrade-Insecure-Requests']='1'
        this.header['Origin']='https://www.genie.co.kr'
        this.header['Content-Type']='application/x-www-form-urlencoded'
        this.header['User-Agent']='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        this.header['Accept']='text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        this.header['Sec-Fetch-Site']='same-origin'
        this.header['Sec-Fetch-Mode']='navigate'
        this.header['Sec-Fetch-User']='?1'
        this.header['Sec-Fetch-Dest']='iframe'
        this.header['Referer']='https://www.genie.co.kr/member/popLogin?page_rfr=https%3A//www.genie.co.kr/'
        this.header['Accept-Encoding']='gzip, deflate, br'
        this.header['Accept-Language']='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'

        this.postData = "login_suxd=&login_suxn=&login_suxt=&chk=&login_http=https&uxd="+encodeURIComponent(id)+"&uxx="+encodeURIComponent(pw)+"&ucc=&uxglk=0&f_JoinType=&mh=&lk_rfr=" 
        
        console.log("jjwoo616!: "+encodeURIComponent(pw));
        // var result = await httpRequest.get("https://www.naver.com");
        if(!await httpRequest.prototype.post(path,this.postData,JSON.stringify(this.header))){
            console.log("Post Transfer Error");
            console.error();
        }

        var result =  httpRequest.result;
        



        this.cookie += await httpRequest.prototype.getCookie();
        path = this.host+"/gateway/loginHttpSubmit"
        this.header = {}
        this.header['Host']='www.genie.co.kr'
        this.header['Connection']='keep-alive'
        this.header['Cache-Control']='max-age=0'
        this.header['sec-ch-ua']='" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"'
        this.header['sec-ch-ua-mobile']='?0'
        this.header['sec-ch-ua-platform']='"Windows"'
        this.header['Upgrade-Insecure-Requests']='1'
        this.header['Origin']='https://www.genie.co.kr'
        this.header['Content-Type']='application/x-www-form-urlencoded'
        this.header['User-Agent']='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        this.header['Accept']='text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        this.header['Sec-Fetch-Site']='same-origin'
        this.header['Sec-Fetch-Mode']='navigate'
        this.header['Sec-Fetch-Dest']='iframe'
        this.header['Referer']='https://www.genie.co.kr/auth/signIn'
        this.header['Accept-Encoding']='gzip, deflate, br'
        this.header['Accept-Language']='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
        this.header['Cookie']= this.cookie;

        // var strRtn = sliceFunc(result, '<input type="hidden" name="strRtn" value="' ,'"/>');
        // var strMsg = sliceFunc(result, '<input type="hidden" name="strMsg" value="' ,'"/>');
        // var page_uxd = sliceFunc(result, '<input type="hidden" name="page_uxd" value="' ,'"/>');
        // var iErrCode = sliceFunc(result, '<input type="hidden" name="iErrCode" value="' ,'"/>');
        // var sLoenState = sliceFunc(result, '<input type="hidden" name="sLoenState" value="' ,'"/>');
        // var IsPwdChgMsg = sliceFunc(result, '<input type="hidden" name="IsPwdChgMsg" value="' ,'"/>');
        // var strChkForwardURL = sliceFunc(result, '<input type="hidden" name="strRtn" strChkForwardURL="' ,'"/>');
        // var sMHYN = sliceFunc(result, '<input type="hidden" name="sMHYN" value="' ,'"/>');
        // var login_suxd = sliceFunc(result, '<input type="hidden" name="login_suxd" value="' ,'"/>');
        // var login_suxn = sliceFunc(result, '<input type="hidden" name="login_suxn" value="' ,'"/>');
        // var login_suxt = sliceFunc(result, '<input type="hidden" name="login_suxt" value="' ,'"/>');

        this.postData='strRtn='+"A00001"
        this.postData+='&strMsg='+encodeURIComponent("성공");
        this.postData+='&page_uxd='+id
        this.postData+='&iErrCode='
        this.postData+='&sLoenState='
        this.postData+='&IsPwdChgMsg=1'
        this.postData+='&strChkForwardURL='
        this.postData+='&sMHYN='
        this.postData+='&login_suxd='
        this.postData+='&login_suxn='
        this.postData+='&login_suxt='
        
        if(!await httpRequest.prototype.post(path,this.postData,JSON.stringify(this.header))){
            console.log("Post Transer Error");
            console.error();
        }
        var result =  httpRequest.result;

        this.header = {}
        this.header['Connection']='keep-alive'
        this.header['Cache-Control']='max-age=0'
        this.header['sec-ch-ua']='" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"'
        this.header['sec-ch-ua-mobile']='?0'
        this.header['sec-ch-ua-platform']='"Windows"'
        this.header['Upgrade-Insecure-Requests']='1'
        this.header['Origin']='https://www.genie.co.kr'
        this.header['Content-Type']='application/x-www-form-urlencoded'
        this.header['User-Agent']='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        this.header['Accept']='text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        this.header['Sec-Fetch-Site']='same-origin'
        this.header['Sec-Fetch-Mode']='navigate'
        this.header['Sec-Fetch-User']='?1'
        this.header['Sec-Fetch-Dest']='document'
        this.header['Referer']='https://www.genie.co.kr/member/popLogin?page_rfr=https%3A//www.genie.co.kr/'
        this.header['Accept-Encoding']='gzip, deflate, br'
        this.header['Accept-Language']='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
        this.header['Cookie'] = this.cookie;
       

        this.postData='cd=A00001'
        this.postData+='&msg='+encodeURIComponent("성공");
        this.postData+='&chgmsg=1'
        this.postData+='&forward='
        this.postData+='&sLoenSt='
        this.postData+='&page_rfr=https://www.genie.co.kr/'
        this.postData+='&page_uxd=pw'
        this.postData+='&page_mh='
        this.postData+='&page_suxd='
        this.postData+='&page_suxn='
        this.postData+='&page_suxt='

        path = this.host +"/member/popLoginSuccess";

        if(!await httpRequest.prototype.post(path,this.postData,JSON.stringify(this.header))){
            console.log("Post Transfer Error");
            console.error();
        }
        result =  httpRequest.result;
        console.log("this.cookie: "+this.cookie);
        console.log("오이?");
        this.header = {}
        this.header['Connection']='keep-alive'
        this.header['Cache-Control']='max-age=0'
        this.header['sec-ch-ua']='" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"'
        this.header['sec-ch-ua-mobile']='?0'
        this.header['sec-ch-ua-platform']='"Windows"'
        this.header['Upgrade-Insecure-Requests']='1'
        this.header['User-Agent']='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        this.header['Accept']='text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        this.header['Sec-Fetch-Site']='same-origin'
        this.header['Sec-Fetch-Mode']='navigate'
        this.header['Sec-Fetch-Dest']='document'
        this.header['Referer']='https://www.genie.co.kr/'
        this.header['Accept-Encoding']='gzip, deflate, br'
        this.header['Accept-Language']='ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
        this.header['Cookie'] = this.cookie;

        console.log("host");
        if(!await httpRequest.prototype.get(this.host+"/",JSON.stringify(this.header))){
            console.log("Get Transfer Error");
            console.error();
        }
        result =  await httpRequest.prototype.getResult();
        console.log(httpRequest.result)
        

        if(result.indexOf("정진우")>-1){
            console.log("정상 로그인")
        }else{
            console.log("로그인 실패")
        }

        return 1;
    }


    getRealChartGenie = async function(){
        console.log("this.cookie: "+this.cookie)
        this.header = {};
        this.header['Host'] = 'www.genie.co.kr'
        this.header['Connection'] = 'keep-alive'
        this.header['sec-ch-ua'] = '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"'
        this.header['sec-ch-ua-mobile'] = '?0'
        this.header['sec-ch-ua-platform'] = '"Windows"'
        this.header['Upgrade-Insecure-Requests'] = '1'
        this.header['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
        this.header['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        this.header['Sec-Fetch-Site'] = 'same-origin'
        this.header['Sec-Fetch-Mode'] = 'navigate'
        this.header['Sec-Fetch-User'] = '?1'
        this.header['Sec-Fetch-Dest'] = 'document'
        this.header['Referer'] = 'https://www.genie.co.kr/'
        this.header['Accept-Encoding'] = 'gzip, deflate, br'
        this.header['Accept-Language'] = 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6'
        this.header['Cookie'] = this.cookie
        this.header = JSON.stringify(this.header);
        if(!await httpRequest.prototype.get(this.host+"/chart/top200",this.header)){
            console.log("Get Transfer Error");
            console.error();
        }
        var result = await httpRequest.prototype.getResult();
        var chartarr = genieParsing(result);

    }

}

function genieParsing(data){
    var chartArr = []
    var findText = '<tr class="list" songid="'
    var count = 0;
    
    while(data.indexOf(findText)>-1){
        var songInfo = sliceFunc(data,'class="title ellipsis" title="재생" onclick="', "</tr>");
        var songName = songInfo.substring(songInfo.indexOf('>')+1,songInfo.indexOf('</a>')).trim(); 
       
        data = data.substring(data.indexOf(findText)+findText.length, data.length);
        if(count != 0){
            console.log(count +". "+songName);
            
        }
        count++;
        
    }
    // console.log(data);

}
module.exports = genie;