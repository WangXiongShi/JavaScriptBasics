function ajaxFn(obj){
    // 创建xhr请求对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    // 请求方式,默认GET请求
    var type = obj.type || 'GET';
    // open
    if(type.toUpperCase() == 'GET'){
        var time = new Date();
        // ajax解决不缓存的问题,在地址栏中拼接参数,值为一个时间

        xhr.open(type,obj.url + '?' + 'timestamp=' + time.getTime() + toStrFn(obj.data),true);
        xhr.send();

    }else if(type.toUpperCase() == 'POST'){
        xhr.open(type,obj.url,true);
        // 设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(toStrFn(obj.data));
    }

    // 检测状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status <= 207){
                // JSON.parse(xhr.responseText);
                obj.successFn(JSON.parse(xhr.responseText));
            }else{
                // console.log('失败');
                obj.errorFn(xhr.status);
            }
        }
    }
}
function toStrFn(data){
    var arr = [];
    for(var key in data){
        arr.push(key + "=" + data[key]);
    }
    return arr.join("&");
}