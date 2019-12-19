// 使用例子如下:
// jsonpFn({
//     url:'http://www.gitnano.com/shuju/jsonp.php',
//     data:{
//         name:'111',
//         age:123
//     },
//     jsonp:'cb',
//     successFn:function(data){
//         console.log(data);
//     }
// });

function jsonpFn(obj){
    var params = '';
    var el = document.createElement('script');
    el.type = 'text/javascript';
    if(obj.jsonp){
        obj.jsonp = '?' + obj.jsonp + '=' + 'fn';
        params = '&' + toStr(obj.data);
    }else{
        obj.jsonp = '';
        params = '?' + toStr(obj.data);
    }

    el.src = obj.url + obj.jsonp + params;
    // 获取head
    var head = document.querySelector('head');
    head.appendChild(el);
    head.removeChild(head.lastElementChild);
    window.fn = function(data){
        obj.successFn(data);
    }
}



function toStr(data){
    var arr = [];
    for (var key in data){
        var a = key + "=" + data[key];
        arr.push(a);
    }
    var str = arr.join("&");
    return str;
}