// 把对象转换为字符串的方法
function toStr(data){
    var arr = [];
    for(var key in data){
        arr.push(key + "=" + data[key]);
    }
    return arr.join("&");
}

function ajaxFn(obj){
    var type = obj.type || "get";
    var url = obj.url || "";
    var data = obj.data;
    // 创建一个请求对象
    var ajax = window.XMLHttpRequest ? new XMLHttpRequest() :  new ActiveXObject("Microsoft.XMLHTTP");
    //
    if(type.toLowerCase() == "get"){
        var dateTamp = new Date();
        //你是如何解决ajax缓存的问题？
        // 1:会在get请求的url中设置参数，参数值为随机数
        // 2:会在get请求的url中设置参数，参数值为时间戳
        // 3:ajax.setRequestHeader("Cache-Control","no-cache")

        // ajax核心对象是谁?
        // XMLHttpRequest()

        // ajax的异步问题

        // ajax同源策略
        // 同源:相同的协议、相同的域名、相同的端口号
        // 只要协议、域名、ip地址、端口号有一个发生改变则不是同源，会出现跨域问题。

        // ajax跨域解决方案
        // 1:后台开启跨域权限
        // 2:前段使用一些手段-> jsonp

        // jsonp->是一个实现跨域的技术,跟ajax没有关系
        // 1:利用script标签可以访问外部数据的特性。
        // 2:需要跟后台配合使用,后台需要提供一个参数给前端
        // 3:前端需要把后台给的参数，拼接到地址的后面

        // jsonp解决跨域的原理是什么？


        ajax.open(type,url + "?" + toStr(data) + "_="+ dateTamp.getTime(),true);
        ajax.send();
    }else if(type.toLowerCase() == "post"){
        ajax.open(type,url,true);
        // POST请求必须设置请求头
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(toStr(data));
    }

    // 检测状态
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status >= 200 && ajax.status <= 206 || ajax.status == 304){
                // 代表成功
                // ajax.responseText;
                obj.successFn(ajax.responseText);

            }else{
                // 代表失败
                obj.errorFn(ajax.status);
            }
        }
    }
}
