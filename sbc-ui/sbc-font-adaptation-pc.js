/** JS监听浏览器文字大小 PC端 -1.1.2 MIT License By 孙柄晨 Released on 2018年12月07日*/
$(window).resize(function () // 绑定到窗口的这个事件中
{
    var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
});