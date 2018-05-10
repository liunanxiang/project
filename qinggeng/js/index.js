$(function(){
	//导航列表页面跳转加active
	$(".menu-list").find("li").on("touchend",function(e){
		$(this).assClass('active').sibling().removeClass("active")
		e.preventDefault();
		
		
	})
//头部导航切换
	$(".menu").on('touchstart', function (e) {
		e.preventDefault();
     $(".menu-list").slideToggle(300);
 });

//底部导航按钮切换
$("#footer ul li").on('touchstart',function(e){
	e.preventDefault();
	var index=$(this).index()
	$(".content").eq(index).addClass("db").siblings().removeClass("db");

	
})
//点击电话页面返回按钮的直接跳到首页
$(".return-left").on("touchstart",function(e){
	e.preventDefault();
	$(".content").first().addClass("db").siblings().removeClass("db");
	$(".mask").css({"height":"0",
		"opacity":0
		})
})

//解决移动端a标签误触事件
})
   var a=document.getElementsByTagName("a");
        for(var i=0;i<a.length;i++){
            a[i].addEventListener("touchmove",function(){
                this.isMove=true;        
            });
            a[i].addEventListener("touchend",function(){
                if(!this.isMove){
                    window.location.href=this.href;
                }else{
                    return false;
                }
                this.isMove=false;
            })
        } 
        
        //判断横屏还是竖屏
function orient() { 
if (window.orientation == 90 || window.orientation == -90) { 
//ipad、iphone竖屏；Andriod横屏 
$("body").attr("class", "landscape"); 

orientation = 'landscape'; 

return false; 
var style=document.createdElemet("style")
} 
else if (window.orientation == 0 || window.orientation == 180) { 
//ipad、iphone横屏；Andriod竖屏 
$("body").attr("class", "portrait"); 
orientation = 'portrait'; 
return false; 
} 
} 
//页面加载时调用 
$(function(){ 
orient(); 
}); 
//用户变化屏幕方向时调用 
$(window).bind( 'orientationchange', function(e){ 
orient(); 
});
//动态引入css
function loadStyle(url){
	alert(1)
var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}