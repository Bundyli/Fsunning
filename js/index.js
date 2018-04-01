/**
 * Created by Administrator on 2018/2/28.
 */

$(function(){
//    入口函数
    /*
    * 轮播图
    * 1.无缝轮播
    * 2.点对应改变
    * 3.手势切换
    *
    * */
//    获取需要操作的元素
    var $banner = $('.sn_banner');
    var width = $banner.width();
    //console.log(width+'$$$');
    //引入zepto扩展的选择器 selector
    var $image =$banner.find('ul:first');
    var $point = $banner.find('ul:eq(1)');
    var $points = $point.find('li');

//  1.无缝轮播
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        //console.log(index);
    //    动画动起来
    //    animate(需要动画的属性对象形式  动画执行的时间 动画执行的速度 动画执行完成回调 ) 引入fx.js
       /* $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
        // 无缝滚动   判断索引
            if(index >= 9){
                index=1;
            //    瞬间回到原来的位置
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0) {
                index =8;
                $image.css({'transform':'translateX('+(-index*width)+'px)'});

            }

        //    2.点对应改变
            $points.removeClass('now').eq(index-1).addClass('now');

        });*/

        animateFuc();
    },5000);


//动画方法
 var animateFuc = function(){
     $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
         // 无缝滚动   判断索引
         if(index >= 9){
             index=1;
             //    瞬间回到原来的位置
             $image.css({'transform':'translateX('+(-index*width)+'px)'});
         }else if(index <= 0) {
             index =8;
             $image.css({'transform':'translateX('+(-index*width)+'px)'});
         }
         $points.removeClass('now').eq(index-1).addClass('now');
     });
 }


    //  3.手势切换
//    上一张 右滑动
    $image.on('swipeRight',function(){
        index --;
    //    动画的切换
        console.log(index+'$$');
        animateFuc();
    });

//    下一张  左滑动
    $image.on('swipeLeft',function(){
        index ++;
        animateFuc();
    });

});