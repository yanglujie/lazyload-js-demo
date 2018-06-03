// function isInSight(el) {
//     let bound = el.getBoundingClientRect();
//     let clientHeight = window.innerHeight;
//     return bound.top <= clientHeight + 100
// }
// // index用于优化，有些图片已经被加载，作了判断，所以不用每次循环所有图片
// let index = 0;
// 使用
function checkImgs() {
    let imgs = document.querySelectorAll('.photos');
    // console.log(imgs)
    imgs.forEach((item) => {io.observe(item)})
}

function loadImg(img) {
    // console.log('-------')
    console.log(img.src)
    let arr = img.src.split('/')
    if(arr[arr.length-1].indexOf('loading')!== -1) {
         let dataSrc = img.dataset.src
            img.src = dataSrc
    }
    // console.log(arr)
    // if(!img.src) {
       
    // }
}

const io = new IntersectionObserver((ioes) => {
    ioes.forEach((ioe) => {
        const el = ioe.target;
        const intersectionRatio = ioe.intersectionRatio
        if(intersectionRatio> 0 && intersectionRatio<=1) {
            loadImg(el)
        }
        el.onload = el.onerror = () => io.unobserve(el);// 如果图片已经加载完，就不必要在观察它是否进入视口
    });
});

// 节流函数
// let throttle = function(fn, delay, atleast) {
//     let timer = null;
//     let previous = null;
//     // 闭包，可以在函数内部使用timer,previous且不会设置为全局变量，造成污染。当滚动，或者不断缩放时，实际上调用的是节流函数内部返回的函数
//     // 为了避免在一直滚动时，此函数一次都不会调用的问题，我们做了判断
//     // 于是我们又要添加一个功能：当用户触发 resize 的时候应该 在某段时间 内至少触发一次，既然是在某段时间内，
//     //那么这个判断条件就可以取当前的时间毫秒数，每次函数调用把当前的时间和上一次调用时间相减，然后判断差值如果大于 某段时间 就直接触发，否则还是走 timeout 的延迟逻辑。
//     return function() {
//         let now = +new Date();
//         if (!previous) previous = now;
//         if (now - previous > atleast) {
//             console.log('大于500ms至少执行一次')
//             fn()
//             previous = now
//         } else {
//             clearTimeout(timer);
//             timer = setTimeout(function() {
//                 console.log('延迟200ms执行')
//                 fn();
//             }, delay);
//         }
//     }
// }