//初始化iscroll
var myScroll=null;
function loaded(){
    myScroll = new IScroll('.wrapper',{
        mouseWheel:true,
        
                // bounce:false
    });
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
	passive: false
    } : false);
    }
//content包裹层高度
//var content =document.getElementsByClassName("content")[0]
//var contentH =content.offsetHeight;
//console.log(contentH)
//	content.style.height=contentH+50+"px";
//	console.log(content.style.height)

