html5 fullscreen api
使用新的全屏 API，可以将用户的注意力导向特定元素，同时隐藏背景或转移对其他应用的注意力。因为 W3C全屏 规范还未达到最终版本，所以大多数浏览器供应商都使用唯一标识符为 API 添加前缀。在本例中，Microsoft 使用ms。最好是有单个函数可以请求所有前缀的全屏模式，类似于此处显示的大部分示例。若要获取更佳性能，请将 W3C API 名称放在第一，其后跟随设置前缀的版本。

先来几个或详细解释的地址吧：

http://www.zhangxinxu.com/wordpress/2012/10/html5-full-screen-api-firefox-chrome-difference/

http://www.wufangbo.com/html5-quanping/

http://heeroluo.net/article/detail/97

再来个微软开发者中心的地址：

https://msdn.microsoft.com/zh-cn/library/ie/dn265028(v=vs.85).aspx

=====
进入，退出全屏或是否全屏事件：
// Webkit (works in Safari5.1 and Chrome 15)
  element.webkitRequestFullScreen();
  document.webkitCancelFullScreen();
  测试环境chrome39支持document.webkitExitFullscreen()
  document.webkitIsFullScreen
  // Firefox 10+
  element.mozRequestFullScreen();
  document.mozCancelFullScreen();
  document.mozFullScreen
  //ie11
  element.msRequestFullscreen();
  document.msExitFullscreen();
  // W3C 提议
  element.requestFullscreen();
  document.exitFullscreen();
  document.fullscreen
