$(function(){
    // 延迟加载
    if($('.pic-lazy').get(0)){
        $("img.lazy").lazyload({
            placeholder : "images/gray.gif", //用图片提前占位
                // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
            effect: "fadeIn", // 载入使用何种效果
                // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
            threshold: 200, // 提前开始加载
                // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
            failurelimit : 10 // 图片排序混乱时
                // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
        });
    }

    // 轮播和导航
    if($('.dfth-index').get(0)){
        $('.slides-banner').slidesjs({
            width: 984,
            height: 385,
            play: {
                auto: true,
                interval: 5000,
                swap: true
            },
            callback: {
                loaded: function(number) {
                    $('.slides-banner').find('.slidesjs-navigation').text('');
                    $('.slides-banner').find('.slidesjs-previous').append(
                        '<div class="arrow-bj"></div>'+
                        '<div class="slides-arrow sa1"></div>'
                    );
                    $('.slides-banner').find('.slidesjs-next').append(
                        '<div class="arrow-bj"></div>'+
                        '<div class="slides-arrow sa2"></div>'
                    );
                },
                start: function(number) {
                    $('.slidesjs-slide').eq(number-1).find('img').lazyload({effect: "fadeIn"});
                },
                compvare: function(number) {
                }
            }
        });

        $('.slides-pro').slidesjs({
            width: 990,
            height: 430,
            play: {
                auto: true,
                interval: 40000,
                swap: true
            },
            callback: {
                loaded: function(number) {
                    $('.slides-pro').find('.slidesjs-navigation').text('');
                    $('.slides-pro').find('.slidesjs-previous').append('<img class="slides-arrow vm" src="images/arrow-left1.png" alt="">');
                    $('.slides-pro').find('.slidesjs-next').append('<img class="slides-arrow vm" src="images/arrow-right3.png" alt="">');
                },
                start: function(number) {
                    $('.slides-pro').find('.slidesjs-slide').eq(number-1).find('img').lazyload({effect: "fadeIn"});
                },
                compvare: function(number) {
                }
            }
        });

        $('.slidesjs-pagination-item').on('click',function(){
            $(".slidesjs-slide").find('img').lazyload({effect: "fadeIn"});
        });
    }

    $('.back').on('click',function(){
        $('body,html').animate({scrollTop:0},1000);
    });

    // 表单动效
    if($('.listen-con').get(0)){
        $('.listen-con').addClass('listen-on');
    }

    if($('.dfth-index').get(0)){
        $(window).scroll( function() {
            var bannerTop = $('.banner').height();
            var w = $(window).scrollTop();
            if (w >= bannerTop) {
                    $(".back").addClass('back-on');
                } else {
                    $(".back").removeClass('back-on');
                }
        }).trigger("scroll");
    }
    
    webTab(); 
    commonTop();
    commonBottom();
    timeCatch();
    listenWakeup();
    indexAm();
    scrollAm();
    newsPage();
    popClose();
    lessonPop();
    photoPro();
    enviroment();
    commonNav();
    proPhoto();
    swiperArrow();
    videoPop();
    
});
//校区环境轮播图
function enviroment(){
    if($('.swiper-enviro').get(0)){
        var swiperEnviro = new Swiper('.swiper-enviro',{
            pagination: '.pagination',
            paginationClickable: true,
            slidesPerView: 5,
            loop: true
        });
        $('.arrow3').on('click', function(e){
            e.preventDefault();
            swiperEnviro.swipePrev();
        });
        $('.arrow4').on('click', function(e){
            e.preventDefault();
            swiperEnviro.swipeNext();
        });
    }
}

// 美术教育照片轮播图
function photoPro(){
    if($('.swiper-photo').get(0)){
        $(".swiper-photo").each(function(x,y){
            var sw =$(y).swiper({
                paginationClickable: true,
                slidesPerView: 3,
                loop: true
            });
            $('.arrow1').on('click', function(e){
                e.preventDefault();
                sw.swipePrev();
            });
            $('.arrow2').on('click', function(e){
                e.preventDefault();
                sw.swipeNext();
            });
        });
    }
}

// 创艺产品轮播图
function proPhoto(){
    if($('.slides-pro').get(0)){
        $('.slides-pro').slidesjs({
            width: 926,
            height: 386,
            play: {
                auto: true,
                interval: 40000,
                swap: true
            },
            callback: {
                loaded: function(number) {
                    $('.slides-pro').find('.slidesjs-navigation').text('');
                    $('.slidesjs-pagination-item').children('a').text('');
                    $('.slides-pro').find('.slidesjs-previous').append(
                        '<div class="arrow-left swiper-arrow swiper-left">'+
                            '<img class="vm arrow-left" src="images/arrow-left4.png" alt="">'+
                        '</div>' 
                    );
                    $('.slides-pro').find('.slidesjs-next').append(
                        '<div class="arrow-right swiper-arrow swiper-right">'+
                            '<img class="vm arrow-right" src="images/arrow-right6.png" alt="">'+
                        '</div>' 
                    );
                },
                start: function(number) {
                    $('.slidesjs-slide').eq(number-1).find('img').lazyload({effect: "fadeIn"});
                },
                compvare: function(number) {
                }
            }
        });
    }
}

// swiper箭头交互
function swiperArrow(){
    $('.swiper-left').on('mouseenter',function(){
        $(this).children('img').attr('src','images/arrow-left2.png');
    });
    $('.swiper-left').on('mouseleave',function(){
        $(this).children('img').attr('src','images/arrow-left4.png');
    });
    $('.swiper-right').on('mouseenter',function(){
        $(this).children('img').attr('src','images/arrow-right4.png');
    });
    $('.swiper-right').on('mouseleave',function(){
        $(this).children('img').attr('src','images/arrow-right6.png');
    });
}

// 全局遮罩层显示
function maskon(){
    $('body').append(
        '<div class="common-mask"></div>'
    );
    setTimeout(function() {
        $('.common-mask').addClass('mask-on');
    }, 200);
}

// 全局遮罩层消失
function maskoff(){
    $('.common-mask').removeClass('mask-on');
    $('.common-mask').remove();
}

// 弹窗关闭
function popClose(){
    $('.pop-close').on('click',function(){
        $('.pop-group').find('.pop-inner').addClass('hide');
        maskoff();
    });
}

// 美术教育弹窗
function lessonPop(){
    $('.lc1').find('.lesson-list').on('click',function(){
        var o = $(this);
        var oindex = o.index();
        $('.pg1').children('.pop-inner').eq(oindex).removeClass('hide');
        $('.pg1').children('.pop-inner').find('img').lazyload({effect: "fadeIn"});
        maskon();
    });

    $('.lc2').find('.lesson-list').on('click',function(){
        var o = $(this);
        var oindex = o.index();
        $('.pg2').children('.pop-inner').eq(oindex).removeClass('hide');
        $('.pg2').children('.pop-inner').find('img').lazyload({effect: "fadeIn"});
        maskon();
    });
}

// 全局tab切换
function webTab(){
    $('.hd-list').on('click',function(){
        var o = $(this);
        var oindex = o.index();
        var os = o.siblings();
        os.removeClass('on');
        o.addClass('on');
        var item1 = o.parent().parent().find('.item').eq(oindex);
        var item2 = item1.siblings();
        item2.addClass('hide');
        item1.removeClass('hide');
        setTimeout(function() {
            $('.item').eq(oindex).find("img.lazy").lazyload({
                effect: "fadeIn" 
            });
        }, 1);

        if($('.dfth-index').get(0)){
            setTimeout(function() {
                $('.main-lesson').find('h3').addClass('h3-on');
                $('.main-lesson').find('.p1').addClass('p1-on');
                $('.main-lesson').find('.des-btn').addClass('des-btn-in');
                $('.lesson-box').find('.main-pic').addClass('main-pic-on');
                $('.lesson-list').find('.other-pic').addClass('other-pic-on');
                $('.lesson-list').find('.lesson-title').addClass('lesson-title-on');
                $('.lesson-list').find('.lesson-des').addClass('lesson-des-on');
                $('.lesson-list').find('.lesson-btn').addClass('lesson-btn-on');
                item1.find('img').lazyload({effect: "fadeIn"});
            }, 1);
        }
    });
}

// 全局头部
function commonTop(){
    if($('.common-top').get(0)){
        $('.common-top').append(
            '<div class="menu-box clearfix">'+
                '<a href="" class="logo block fl"><img class="vm g10" src="images/logo.png" alt=""></a>'+
                '<ul class="menu-con clearfix">'+
                    '<li class="menu-list fl"><a href="">首页</a></li>'+
                    '<li class="menu-list fl"><a href="">美术教育</a></li>'+
                    '<li class="menu-list fl"><a href="">授权合作</a></li>'+
                    '<li class="menu-list fl"><a href="">创艺产品</a></li>'+
                    '<li class="menu-list fl"><a href="">在线画廊</a></li>'+
                    '<li class="menu-list fl"><a href="">品牌故事</a></li>'+
                    '<li class="menu-list fl"><a href="">加入我们</a></li>'+
                    '<li class="menu-list fl"><a href="">校区查询</a></li>'+
                    '<li class="menu-list fl"><a href="">学员中心</a></li>'+
                '</ul>'+
            '</div>'
        );
    }
}

// 全局底部
function commonBottom(){
    if($('.bottom').get(0)){
        $('.bottom').append(
            '<div class="bottom-inner">'+
                '<div class="bottom-con clearfix">'+
                    '<div class="bottom-menu clearfix fl">'+
                        '<ul class="menu-con fl">'+
                            '<li class="menu-list first"><a href="">美术教育</a></li>'+
                            '<li class="menu-list"><a href="">课程体系</a></li>'+
                            '<li class="menu-list"><a href="">熊猫到家</a></li>'+
                            '<li class="menu-list"><a href="">校区环境</a></li>'+
                            '<li class="menu-list"><a href="">师资查询</a></li>'+
                        '</ul>'+
                        '<ul class="menu-con fl">'+
                            '<li class="menu-list first"><a href="">创艺产品</a></li>'+
                            '<li class="menu-list"><a href="">涂鸦涂本</a></li>'+
                            '<li class="menu-list"><a href="">画笔画材</a></li>'+
                            '<li class="menu-list"><a href="">超级粘土</a></li>'+
                            '<li class="menu-list"><a href="">创艺宝盒</a></li>'+
                            '<li class="menu-list"><a href="">DIY手工</a></li>'+
                        '</ul>'+
                        '<ul class="menu-con fl">'+
                            '<li class="menu-list first"><a href="">公司</a></li>'+
                            '<li class="menu-list"><a href="">校区查询</a></li>'+
                            '<li class="menu-list"><a href="">品牌故事</a></li>'+
                            '<li class="menu-list"><a href="">加入我们</a></li>'+
                            '<li class="menu-list"><a href="">新闻动态</a></li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="company-detail fr clearfix">'+
                        '<p class="phone">400-895-6006</p>'+
                        '<p class="address">徐汇区 吴兴路 281号紫江大厦 3楼（总部）</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="bottom-other clearfix">'+
                '<p class="p1 fl">办学许可证：教民3101037020118号 沪ICP备08111589号<em>版权所有 上海凌尓艺文化传播有限公司</em></p>'+
                '<div class="share fr">'+
                    '<a class="wechat-box">'+
                        '<img class="share-icon vm" src="images/wechat.png" alt="">'+
                        '<img class="share-icon2 vm hide" src="images/wechatcode.png" alt="">'+
                    '</a>'+
                    '<i>|</i>'+
                    '<a href="https://weibo.com/512398902?sudaref=www.baidu.com&display=0&retcode=6102&sudaref=passport.weibo.com"><img class="share-icon vm weibo-icon" src="images/weibo.png" alt=""></a>'+
                '</div>'+
            '</div>'
        );

        $('.wechat-box').on('mouseenter',function(){
            $('.wechat-box').find('.share-icon').attr('src','images/wechat2.png');
            $('.share-icon2').removeClass('hide');
        });
        $('.wechat-box').on('mouseleave',function(){
            $('.wechat-box').find('.share-icon').attr('src','images/wechat.png');
            $('.share-icon2').addClass('hide');
        });

        $('.weibo-icon').on('mouseenter',function(){
            $('.weibo-icon').attr('src','images/weibo2.png');
        });
        $('.weibo-icon').on('mouseleave',function(){
            $('.weibo-icon').attr('src','images/weibo.png');
        });
    }
}

// 全局置顶导航
function commonNav(){
    if($('.nav-body').get(0)){
        $('.nav-body').append(
            '<div class="navigation common">'+
                '<div class="menu-box clearfix">'+
                    '<a href="" class="logo block fl"><img class="vm g10" src="images/logo.png" alt=""></a>'+
                    '<ul class="menu-con clearfix">'+
                        '<li class="menu-list fl"><a href="">首页</a></li>'+
                        '<li class="menu-list fl"><a href="">美术教育</a></li>'+
                        '<li class="menu-list fl"><a href="">授权合作</a></li>'+
                        '<li class="menu-list fl"><a href="">创艺产品</a></li>'+
                        '<li class="menu-list fl"><a href="">在线画廊</a></li>'+
                        '<li class="menu-list fl"><a href="">品牌故事</a></li>'+
                        '<li class="menu-list fl"><a href="">加入我们</a></li>'+
                        '<li class="menu-list fl"><a href="">校区查询</a></li>'+
                        '<li class="menu-list fl"><a href="">学员中心</a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>'
        );

        $(window).scroll( function() {
            var w = $(window).scrollTop();
            if (w >= 150) {
                    $(".navigation").addClass('nav-on navigation-on');
                } else {
                    $(".navigation").removeClass('nav-on navigation-on');
                }
        }).trigger("scroll");
    }
}

// 首页首屏动画
function indexAm(){
    var index = $('.dfth-index');
    setTimeout(function() {
        index.find('.banner').find('.des-btn').addClass('des-btn-on');
    }, 500);
    setTimeout(function() {
        index.find('.slides-des').find('.p1').addClass('p1-on');
    }, 700);
    setTimeout(function() {
        index.find('.slides-des').find('h2').addClass('h2-on');
    }, 950);
    setTimeout(function() {
        index.find('.author').addClass('author-on');
    }, 1150);
}

// 首页滚动动画
function scrollAm(){
    if($('.dfth-index').get(0)){
        $(window).scroll( function() {
            var w = $(window).scrollTop();
            var bannerTop = $('.banner').height();
            var lessonTop = $('.lesson-box').offset().top;
            var galleryTop = $('.gallery-box').offset().top;
            var proTop = $('.pro-box').offset().top;
            var cooperateTop = $('.cooperate-box').find('.coop-pic').offset().top;
            var aboutusTop = $('.aboutus-box').offset().top;
            var newTop = $('.news-box ').offset().top;
            if (w >= 150) {
                    $(".navigation").addClass('nav-on navigation-on');
                } else {
                    $(".navigation").removeClass('nav-on navigation-on');
                }
            if(w >= lessonTop-250){
                lessonAm();
            }
            if(w >= galleryTop-150){
                setTimeout(function() {
                    $('.gallery-list').eq(0).find('.gallery-pic').addClass('gallery-on');
                }, 200);
                setTimeout(function() {
                    $('.gallery-list').eq(1).find('.gallery-pic').addClass('gallery-on');
                }, 500);
                setTimeout(function() {
                    $('.gallery-list').eq(2).find('.gallery-pic').addClass('gallery-on');
                }, 600);
                setTimeout(function() {
                    $('.gallery-list').eq(3).find('.gallery-pic').addClass('gallery-on');
                }, 700);
                setTimeout(function() {
                    $('.gallery-list').eq(4).find('.gallery-pic').addClass('gallery-on');
                }, 800);
                setTimeout(function() {
                    $('.gallery-list').eq(5).find('.gallery-pic').addClass('gallery-on');
                }, 900);
                setTimeout(function() {
                    $('.gallery-list').eq(6).find('.gallery-pic').addClass('gallery-on');
                }, 1000);
                setTimeout(function() {
                    $('.gallery-list').eq(7).find('.gallery-pic').addClass('gallery-on');
                }, 1100);
                setTimeout(function() {
                    $('.gallery-list').eq(8).find('.gallery-pic').addClass('gallery-on');
                }, 1200);
                setTimeout(function() {
                    $('.gallery-list').eq(9).find('.gallery-pic').addClass('gallery-on');
                }, 1300);
                setTimeout(function() {
                    $('.entry-pic').addClass('entry-pic-on');
                }, 1500);
                setTimeout(function() {
                    $('.entry-btn').addClass('entry-btn-on');
                }, 1700);
                
            }
            if(w >= proTop-200){
                setTimeout(function() {
                    $('.pro-list').addClass('pro-on');
                }, 500);
            }
            if(w >= cooperateTop-300){
                setTimeout(function() {
                    $('.coop').addClass('coop-on');
                }, 500);
                if(!$('.coop-mask').get(0)){
                    setTimeout(function() {
                        $('.coop-pic').append('<div class="coop-mask"></div>');
                    }, 650);
                }
                setTimeout(function() {
                    $('.coop-mask').addClass('mask-on');
                }, 850);
                setTimeout(function() {
                    $('.coop-title').addClass('title-on');
                }, 950);
                setTimeout(function() {
                    $('.coop-txt').find('dd').addClass('dd-on');
                }, 1150);
                setTimeout(function() {
                    $('.entry-btn').addClass('btn-on');
                }, 1350);
            }
            if(w >= aboutusTop-250){
                setTimeout(function() {
                    $('.about-pic').children('img').addClass('img-on');
                }, 500);
                setTimeout(function() {
                    $('.introduce').addClass('introduce-on');
                }, 700);
                setTimeout(function() {
                    $('.introduce').find('.intro-title').addClass('title-on');
                }, 900);
                setTimeout(function() {
                    $('.introduce').find('.p1').addClass('p1-on');
                }, 1100);
                setTimeout(function() {
                    $('.introduce').find('.des-btn').addClass('btn-on');
                }, 1300);
            }
            if(w >= newTop-350){
                setTimeout(function() {
                    $('.main-news').addClass('main-news-on');
                }, 500);
                setTimeout(function() {
                    $('.news-list').eq(0).addClass('news-list-on');
                }, 700);
                setTimeout(function() {
                    $('.news-list').eq(1).addClass('news-list-on');
                }, 900);
                setTimeout(function() {
                    $('.news-list').eq(2).addClass('news-list-on');
                }, 1100);
            }
        }).trigger("scroll");

        $('.entry-btn').on('mouseenter',function(){
            $('.gallery-entry').find('.pic-box').children('img').addClass('img-on');
        });

        $('.entry-btn').on('mouseleave',function(){
            $('.gallery-entry').find('.pic-box').children('img').removeClass('img-on');
        });
    }
}

// 首页课程板块动画
function lessonAm(){
    setTimeout(function() {
        $('.main-lesson').find('h3').addClass('h3-on');
    }, 200);
    setTimeout(function() {
        $('.main-lesson').find('.p1').addClass('p1-on');
    }, 400);
    setTimeout(function() {
        $('.main-lesson').find('.des-btn').addClass('des-btn-in');
    }, 600);
    setTimeout(function() {
        $('.lesson-box').find('.main-pic').addClass('main-pic-on');
    }, 800);
    setTimeout(function() {
        $('.lesson-list').eq(0).find('.other-pic').addClass('other-pic-on');
    }, 300);
    setTimeout(function() {
        $('.lesson-list').eq(0).find('.lesson-title').addClass('lesson-title-on');
    }, 500);
    setTimeout(function() {
        $('.lesson-list').eq(0).find('.lesson-des').addClass('lesson-des-on');
    }, 700);
    setTimeout(function() {
        $('.lesson-list').eq(0).find('.lesson-btn').addClass('lesson-btn-on');
    }, 900);
    setTimeout(function() {
        $('.lesson-list').eq(1).find('.other-pic').addClass('other-pic-on');
    }, 400);
    setTimeout(function() {
        $('.lesson-list').eq(1).find('.lesson-title').addClass('lesson-title-on');
    }, 600);
    setTimeout(function() {
        $('.lesson-list').eq(1).find('.lesson-des').addClass('lesson-des-on');
    }, 800);
    setTimeout(function() {
        $('.lesson-list').eq(1).find('.lesson-btn').addClass('lesson-btn-on');
    }, 1000);
    setTimeout(function() {
        $('.lesson-list').eq(2).find('.other-pic').addClass('other-pic-on');
    }, 500);
    setTimeout(function() {
        $('.lesson-list').eq(2).find('.lesson-title').addClass('lesson-title-on');
    }, 700);
    setTimeout(function() {
        $('.lesson-list').eq(2).find('.lesson-des').addClass('lesson-des-on');
    }, 900);
    setTimeout(function() {
        $('.lesson-list').eq(2).find('.lesson-btn').addClass('lesson-btn-on');
    }, 1100);
}

// 手机号验证
function phoneCheck(a) {
    var regPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; 
    if (!$(a).val()) {
        $(a).parents('.infor-item').addClass('infor-wrong');
        $(a).parents('.infor-item').find('.hint').find('.p1').text('手机号不能为空');
        $('.refer').removeClass('refer-on');
        return false;
    } else if (!regPhone.test($(a).val())) {
        $(a).parents('.infor-item').addClass('infor-wrong');
        $(a).parents('.infor-item').find('.hint').find('.p1').text('手机号格式错误');
        $('.refer').removeClass('refer-on');
        return false;
    } else {
        $(a).parents('.infor-item').removeClass('infor-wrong');
        return true;
    }
}

// 姓名验证
function nameCheck(b) {
    var regName = /^[\u4e00-\u9fa5A-Za-z]*$/;
    if ($(b).val()) {
        if (regName.test($(b).val())) {
            $(b).parent('.infor-item').removeClass('infor-wrong');
            return true;
        } else {
            $(b).parent('.infor-item').addClass('infor-wrong');
            $(b).parent('.infor-item').find('.hint').find('.p1').text('姓名格式错误');
            return false;
        }
    } else {
        $(b).parent('.infor-item').addClass('infor-wrong');
        $(b).parent('.infor-item').find('.hint').find('.p1').text('姓名不能为空');    
        return false;
    }
}

// 验证码倒计时
function timeCatch() {
    var cbtn = $('.code-btn');
    var btn1 = cbtn.find('.p1');
    var btn2 = cbtn.find('.p2');

    btn1.on('click', function() {
        var uphone = $('.uphone');
        var uphoneVal = uphone.val();
        phoneCheck(uphone);
        if (phoneCheck(uphone) == false) {
            return false;
        } else if (phoneCheck(uphone) == true) {
            btn1.addClass('hide');
            btn2.removeClass('hide');
            btn2.find('i').text('60');
            var i = btn2.find('i').text();
            var itext = parseInt(i);
            var timeNum = setInterval(function () {
                if (itext == 0) {
                    clearInterval(timeNum);
                    btn1.removeClass('hide');
                    btn2.addClass('hide');
                }
                btn2.find('i').text(itext--);
            }, 1000);
        }
    });
}

// 免费视听验证
function listenTest() {
    var uname = $('.uname');
    var uphone = $('.uphone');
    var ucode = $('.ucode');
    var uplace = $('.uplace');
    if (uname.val()) {
        if (nameCheck(uname) == false) {
            $('.refer').removeClass('refer-on');
            uname.parent('.infor-item').addClass('infor-wrong');
            uname.parent('.infor-item').find('.hint').find('.p1').text('姓名格式错误');
            return false;
        }else if(nameCheck(uname) == true){
            if(uphone.val()){
                if(phoneCheck(uphone) == false){
                    $('.refer').removeClass('refer-on');
                    uphone.parent('.infor-item').addClass('infor-wrong');
                    uphone.parent('.infor-item').find('.hint').find('.p1').text('手机号格式错误');
                    return false;
                }else if(phoneCheck(uphone) == true){
                    if(ucode.val()){
                        if($(".province option:selected").text()=='上课区域 省/市'||$(".city option:selected").text()=='上课区域 市/区'){
                            uplace.parent('.infor-item').find('.hint').find('.p1').text('上课区域不能为空');
                            $('.refer').removeClass('refer-on');
                            uplace.parents('.infor-item').addClass('infor-wrong');
                            return false;
                        }else{
                            $('.refer').addClass('refer-on');
                            uplace.parent('.infor-item').removeClass('infor-wrong');
                            return true;
                        }
                    }else{
                        $('.refer').removeClass('refer-on');
                        ucode.parent('.infor-item').addClass('infor-wrong');
                        ucode.parent('.infor-item').find('.hint').find('.p1').text('验证码不能为空');
                        return false;
                    }
                }
            }else{
                $('.refer').removeClass('refer-on');
                uphone.parent('.infor-item').addClass('infor-wrong');
                uphone.parent('.infor-item').find('.hint').find('.p1').text('手机号不能为空');
                return false;
            }
        }
    }else{
        $('.refer').removeClass('refer-on');
        uname.parent('.infor-item').addClass('infor-wrong');
        uname.parent('.infor-item').find('.hint').find('.p1').text('姓名不能为空');
        return false;
    }
}

// 视听申请唤醒
function listenWakeup() {
    var listenInput = $('.listen-box').find('input');
    var listenSelect = $('.listen-box').find('select');
    listenInput.on('input propertychange', function() {
        listenTest();
    });
    listenSelect.on('change',function(){
        listenTest();
    });
}

// 分页插件
function newsPage(){
    if($('.dfth-news').get(0)){
        $(".tcdPageCode").createPage({
            pageCount:5,
            current:1,
            backFn:function(p){
                console.log(p);
            }
        });
    }
}

// 视频弹窗
function videoPop(){
    $('.video-box').on('click',function(){
        var oindex = $(this).parents('.item').index();
        var vp = $('.video-pop').children('li').eq(oindex);
        var vps = vp.siblings();
        vps.addClass('hide');
        vp.removeClass('hide');
        $('.video-pop').removeClass('hide');
        maskon();
    });

    $('.pop-close').on('click',function(){
        $(this).parent('li').addClass('hide');
        $('.video-pop').addClass('hide');
        maskoff();
    });
}


