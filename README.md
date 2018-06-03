# lazyload

1、其中图片未加载完全时会出现，加载中的图片
2、在index.js中使用了函数节流
在节流函数中，考虑到由于操作频繁，setTimeout中的函数可能一次都不会执行，所以考虑了设置一个"至少执行一次的时间 atleast" 
3、IntersectionObserver可以自动观察元素是否在视口内。具体使用参见 阮一峰：http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
此方法有浏览器兼容问题
#demo

### 两种方法

1、`index.js`文件中是用`getBoundingClientRect()`方法的

2、`index2.js`文件中是用`IntersectionObserver()`方法的