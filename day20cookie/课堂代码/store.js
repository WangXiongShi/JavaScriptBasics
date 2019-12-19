function setCookie(name,val,day){
    var time = new Date();
    time.setDate(time.getDate() + day);

    document.cookie = name + '=' + val + ';expires=' + time;
}
function getCookie(key){
    var str = document.cookie;
    var arr = str.split('; ');
    for(var i = 0; i < arr.length; i++){
        var arr2 = arr[i].split('=');
        if(arr2[0] == key){
            return arr2[1];
        }
    }
}