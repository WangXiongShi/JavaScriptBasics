function addWheelEvent(el,callBack){
    el.onmousewheel = wheelFn;
    el.addEventListener('DOMMouseScroll',wheelFn);
    function wheelFn(e){
        var bol = true;
        var ev = window.event || e;
        if(ev.wheelDelta){
            bol = ev.wheelDelta > 0;
        }else{
            bol = ev.detail < 0;
        }
        callBack(bol);
    }
}
