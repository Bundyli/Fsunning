/**
 * Created by Administrator on 2018/2/28.
 */

$(function(){
//    ��ں���
    /*
    * �ֲ�ͼ
    * 1.�޷��ֲ�
    * 2.���Ӧ�ı�
    * 3.�����л�
    *
    * */
//    ��ȡ��Ҫ������Ԫ��
    var $banner = $('.sn_banner');
    var width = $banner.width();
    //console.log(width+'$$$');
    //����zepto��չ��ѡ���� selector
    var $image =$banner.find('ul:first');
    var $point = $banner.find('ul:eq(1)');
    var $points = $point.find('li');

//  1.�޷��ֲ�
    var index = 1;
    var timer = setInterval(function(){
        index ++;
        //console.log(index);
    //    ����������
    //    animate(��Ҫ���������Զ�����ʽ  ����ִ�е�ʱ�� ����ִ�е��ٶ� ����ִ����ɻص� ) ����fx.js
       /* $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
        // �޷����   �ж�����
            if(index >= 9){
                index=1;
            //    ˲��ص�ԭ����λ��
                $image.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0) {
                index =8;
                $image.css({'transform':'translateX('+(-index*width)+'px)'});

            }

        //    2.���Ӧ�ı�
            $points.removeClass('now').eq(index-1).addClass('now');

        });*/

        animateFuc();
    },5000);


//��������
 var animateFuc = function(){
     $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
         // �޷����   �ж�����
         if(index >= 9){
             index=1;
             //    ˲��ص�ԭ����λ��
             $image.css({'transform':'translateX('+(-index*width)+'px)'});
         }else if(index <= 0) {
             index =8;
             $image.css({'transform':'translateX('+(-index*width)+'px)'});
         }
         $points.removeClass('now').eq(index-1).addClass('now');
     });
 }


    //  3.�����л�
//    ��һ�� �һ���
    $image.on('swipeRight',function(){
        index --;
    //    �������л�
        console.log(index+'$$');
        animateFuc();
    });

//    ��һ��  �󻬶�
    $image.on('swipeLeft',function(){
        index ++;
        animateFuc();
    });

});