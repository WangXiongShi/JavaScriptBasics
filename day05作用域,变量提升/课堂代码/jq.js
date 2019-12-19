function getId(a){
    return document.getElementById(a);
}

function $(a){
    if(a.indexOf('#') != 'undefined'){
        return document.querySelector(a);
    }else if(a.indexOf('.') != 'undefined'){
        return document.querySelectorAll(a);
    }

}
HTMLElement.prototype.css = function(){
    if(arguments.length > 1){
        this.style[arguments[0]] = arguments[1];
    return this;
    }else{
        var obj = arguments[0];
        for(var key in obj){
            this.style[key] = obj[key];
        }
        return this;
    }

}