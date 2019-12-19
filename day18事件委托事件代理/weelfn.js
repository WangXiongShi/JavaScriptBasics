function addWheelEvent(el,callBack){
			// 非火狐:mousewheel
			el.onmousewheel = fn;
			// 火狐:DOMMouseScroll
			el.addEventListener('DOMMouseScroll',fn);

			function fn(e){
				var ev = window.event || e;
				// 通过事件对象里面的属性,来判断浏览器
				// 非火狐使用ev.wheelDelta
				// 火狐使用ev.detail
				// 定义一个布尔值用来判断方向 , true向上,false向下
				var bol = true;
				// 方法一:
				if(ev.wheelDelta){
					// 非火狐浏览器
					// ev.wheelDelta大于0向上,反之向下
					bol = ev.wheelDelta > 0;
					callBack(bol);
				}else{
					// 火狐浏览器
					// ev.detail大于0向下,反之向上
					bol = ev.detail < 0;
					callBack(bol);
				}

				// 方法二:
				// if(ev.wheelDelta){
				// 	// bol = ev.wheelDelta > 0;
				// 	// if(ev.wheelDelta > 0){
				// 	// 	bol = true;
				// 	// }else{
				// 	// 	bol = false;
				// 	// }
				// 	bol = ev.wheelDelta > 0 ? true:false;
				// }else{
				// 	bol = ev.detail < 0;
				// }
				// callBack(bol);

			}
		}