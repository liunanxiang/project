setRem()
function setRem(){
    //获取html
    var html=document.querySelector("html");
    //移动端获取屏幕宽度
    var width=html.getBoundingClientRect().width;
    html.style.fontSize=width/10+'px';

}
window.addEventListener("resize",setRem);
window.addEventListener("orientationchange",setRem);