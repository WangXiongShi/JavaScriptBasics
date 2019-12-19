   //碰撞检测
 function crashFn(obj1,obj2){

    var obj1Left = obj1.offsetLeft;
    var obj1Right = obj1Left + obj1.offsetWidth;
    var obj1Top = obj1.offsetTop;
    var obj1Bottom = obj1Top + obj1.offsetHeight;

    var obj2Left = obj2.parentNode.offsetLeft;
    var obj2Right = obj2Left + obj2.offsetWidth;
    var obj2Top = obj2.offsetTop;
    var obj2Bottom = obj2Top + obj2.offsetHeight;
    // 1:obj1的右边 大于等于 obj2的左边
    // 2:obj1的下边 大于等于 obj2的上边
    // 3:obj1的左边 小于等于 obj2的右边
    // 4:obj1的上边 小于等于 obj2的下边
    if(obj1Right >= obj2Left && obj1Bottom >= obj2Top && obj1Left <= obj2Right && obj1Top <= obj2Bottom){
        // 已经发生碰撞
        return true;
    }else{
        // 没有碰撞
        return false;
    }
}
