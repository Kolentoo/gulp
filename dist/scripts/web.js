function enviroment(){if($(".swiper-enviro").get(0)){var e=new Swiper(".swiper-enviro",{pagination:".pagination",paginationClickable:!0,slidesPerView:5,loop:!0});$(".arrow3").on("click",function(n){n.preventDefault(),e.swipePrev()}),$(".arrow4").on("click",function(n){n.preventDefault(),e.swipeNext()})}}function photoPro(){$(".swiper-photo").get(0)&&$(".swiper-photo").each(function(e,n){var i=$(n).swiper({paginationClickable:!0,slidesPerView:3,loop:!0});$(".arrow1").on("click",function(e){e.preventDefault(),i.swipePrev()}),$(".arrow2").on("click",function(e){e.preventDefault(),i.swipeNext()})})}function proPhoto(){$(".slides-pro").get(0)&&$(".slides-pro").slidesjs({width:926,height:386,play:{auto:!0,interval:4e4,swap:!0},callback:{loaded:function(e){$(".slides-pro").find(".slidesjs-navigation").text(""),$(".slidesjs-pagination-item").children("a").text(""),$(".slides-pro").find(".slidesjs-previous").append('<div class="arrow-left swiper-arrow swiper-left"><img class="vm arrow-left" src="images/arrow-left4.png" alt=""></div>'),$(".slides-pro").find(".slidesjs-next").append('<div class="arrow-right swiper-arrow swiper-right"><img class="vm arrow-right" src="images/arrow-right6.png" alt=""></div>')},start:function(e){$(".slidesjs-slide").eq(e-1).find("img").lazyload({effect:"fadeIn"})},compvare:function(e){}}})}function swiperArrow(){$(".swiper-left").on("mouseenter",function(){$(this).children("img").attr("src","images/arrow-left2.png")}),$(".swiper-left").on("mouseleave",function(){$(this).children("img").attr("src","images/arrow-left4.png")}),$(".swiper-right").on("mouseenter",function(){$(this).children("img").attr("src","images/arrow-right4.png")}),$(".swiper-right").on("mouseleave",function(){$(this).children("img").attr("src","images/arrow-right6.png")})}function maskon(){$("body").append('<div class="common-mask"></div>'),setTimeout(function(){$(".common-mask").addClass("mask-on")},200)}function maskoff(){$(".common-mask").removeClass("mask-on"),$(".common-mask").remove()}function popClose(){$(".pop-close").on("click",function(){$(".pop-group").find(".pop-inner").addClass("hide"),maskoff()})}function lessonPop(){$(".lc1").find(".lesson-list").on("click",function(){var e=$(this).index();$(".pg1").children(".pop-inner").eq(e).removeClass("hide"),$(".pg1").children(".pop-inner").find("img").lazyload({effect:"fadeIn"}),maskon()}),$(".lc2").find(".lesson-list").on("click",function(){var e=$(this).index();$(".pg2").children(".pop-inner").eq(e).removeClass("hide"),$(".pg2").children(".pop-inner").find("img").lazyload({effect:"fadeIn"}),maskon()})}function webTab(){$(".hd-list").on("click",function(){var e=$(this),n=e.index();e.siblings().removeClass("on"),e.addClass("on");var i=e.parent().parent().find(".item").eq(n);i.siblings().addClass("hide"),i.removeClass("hide"),setTimeout(function(){$(".item").eq(n).find("img.lazy").lazyload({effect:"fadeIn"})},1),$(".dfth-index").get(0)&&setTimeout(function(){$(".main-lesson").find("h3").addClass("h3-on"),$(".main-lesson").find(".p1").addClass("p1-on"),$(".main-lesson").find(".des-btn").addClass("des-btn-in"),$(".lesson-box").find(".main-pic").addClass("main-pic-on"),$(".lesson-list").find(".other-pic").addClass("other-pic-on"),$(".lesson-list").find(".lesson-title").addClass("lesson-title-on"),$(".lesson-list").find(".lesson-des").addClass("lesson-des-on"),$(".lesson-list").find(".lesson-btn").addClass("lesson-btn-on"),i.find("img").lazyload({effect:"fadeIn"})},1)})}function commonTop(){$(".common-top").get(0)&&$(".common-top").append('<div class="menu-box clearfix"><a href="" class="logo block fl"><img class="vm g10" src="images/logo.png" alt=""></a><ul class="menu-con clearfix"><li class="menu-list fl"><a href="">首页</a></li><li class="menu-list fl"><a href="">美术教育</a></li><li class="menu-list fl"><a href="">授权合作</a></li><li class="menu-list fl"><a href="">创艺产品</a></li><li class="menu-list fl"><a href="">在线画廊</a></li><li class="menu-list fl"><a href="">品牌故事</a></li><li class="menu-list fl"><a href="">加入我们</a></li><li class="menu-list fl"><a href="">校区查询</a></li><li class="menu-list fl"><a href="">学员中心</a></li></ul></div>')}function commonBottom(){$(".bottom").get(0)&&($(".bottom").append('<div class="bottom-inner"><div class="bottom-con clearfix"><div class="bottom-menu clearfix fl"><ul class="menu-con fl"><li class="menu-list first"><a href="">美术教育</a></li><li class="menu-list"><a href="">课程体系</a></li><li class="menu-list"><a href="">熊猫到家</a></li><li class="menu-list"><a href="">校区环境</a></li><li class="menu-list"><a href="">师资查询</a></li></ul><ul class="menu-con fl"><li class="menu-list first"><a href="">创艺产品</a></li><li class="menu-list"><a href="">涂鸦涂本</a></li><li class="menu-list"><a href="">画笔画材</a></li><li class="menu-list"><a href="">超级粘土</a></li><li class="menu-list"><a href="">创艺宝盒</a></li><li class="menu-list"><a href="">DIY手工</a></li></ul><ul class="menu-con fl"><li class="menu-list first"><a href="">公司</a></li><li class="menu-list"><a href="">校区查询</a></li><li class="menu-list"><a href="">品牌故事</a></li><li class="menu-list"><a href="">加入我们</a></li><li class="menu-list"><a href="">新闻动态</a></li></ul></div><div class="company-detail fr clearfix"><p class="phone">400-895-6006</p><p class="address">徐汇区 吴兴路 281号紫江大厦 3楼（总部）</p></div></div></div><div class="bottom-other clearfix"><p class="p1 fl">办学许可证：教民3101037020118号 沪ICP备08111589号<em>版权所有 上海凌尓艺文化传播有限公司</em></p><div class="share fr"><a class="wechat-box"><img class="share-icon vm" src="images/wechat.png" alt=""><img class="share-icon2 vm hide" src="images/wechatcode.png" alt=""></a><i>|</i><a href="https://weibo.com/512398902?sudaref=www.baidu.com&display=0&retcode=6102&sudaref=passport.weibo.com"><img class="share-icon vm weibo-icon" src="images/weibo.png" alt=""></a></div></div>'),$(".wechat-box").on("mouseenter",function(){$(".wechat-box").find(".share-icon").attr("src","images/wechat2.png"),$(".share-icon2").removeClass("hide")}),$(".wechat-box").on("mouseleave",function(){$(".wechat-box").find(".share-icon").attr("src","images/wechat.png"),$(".share-icon2").addClass("hide")}),$(".weibo-icon").on("mouseenter",function(){$(".weibo-icon").attr("src","images/weibo2.png")}),$(".weibo-icon").on("mouseleave",function(){$(".weibo-icon").attr("src","images/weibo.png")}))}function commonNav(){$(".nav-body").get(0)&&($(".nav-body").append('<div class="navigation common"><div class="menu-box clearfix"><a href="" class="logo block fl"><img class="vm g10" src="images/logo.png" alt=""></a><ul class="menu-con clearfix"><li class="menu-list fl"><a href="">首页</a></li><li class="menu-list fl"><a href="">美术教育</a></li><li class="menu-list fl"><a href="">授权合作</a></li><li class="menu-list fl"><a href="">创艺产品</a></li><li class="menu-list fl"><a href="">在线画廊</a></li><li class="menu-list fl"><a href="">品牌故事</a></li><li class="menu-list fl"><a href="">加入我们</a></li><li class="menu-list fl"><a href="">校区查询</a></li><li class="menu-list fl"><a href="">学员中心</a></li></ul></div></div>'),$(window).scroll(function(){$(window).scrollTop()>=150?$(".navigation").addClass("nav-on navigation-on"):$(".navigation").removeClass("nav-on navigation-on")}).trigger("scroll"))}function indexAm(){var e=$(".dfth-index");setTimeout(function(){e.find(".banner").find(".des-btn").addClass("des-btn-on")},500),setTimeout(function(){e.find(".slides-des").find(".p1").addClass("p1-on")},700),setTimeout(function(){e.find(".slides-des").find("h2").addClass("h2-on")},950),setTimeout(function(){e.find(".author").addClass("author-on")},1150)}function scrollAm(){$(".dfth-index").get(0)&&($(window).scroll(function(){var e=$(window).scrollTop(),n=($(".banner").height(),$(".lesson-box").offset().top),i=$(".gallery-box").offset().top,s=$(".pro-box").offset().top,o=$(".cooperate-box").find(".coop-pic").offset().top,a=$(".aboutus-box").offset().top,t=$(".news-box ").offset().top;e>=150?$(".navigation").addClass("nav-on navigation-on"):$(".navigation").removeClass("nav-on navigation-on"),e>=n-250&&lessonAm(),e>=i-150&&(setTimeout(function(){$(".gallery-list").eq(0).find(".gallery-pic").addClass("gallery-on")},200),setTimeout(function(){$(".gallery-list").eq(1).find(".gallery-pic").addClass("gallery-on")},500),setTimeout(function(){$(".gallery-list").eq(2).find(".gallery-pic").addClass("gallery-on")},600),setTimeout(function(){$(".gallery-list").eq(3).find(".gallery-pic").addClass("gallery-on")},700),setTimeout(function(){$(".gallery-list").eq(4).find(".gallery-pic").addClass("gallery-on")},800),setTimeout(function(){$(".gallery-list").eq(5).find(".gallery-pic").addClass("gallery-on")},900),setTimeout(function(){$(".gallery-list").eq(6).find(".gallery-pic").addClass("gallery-on")},1e3),setTimeout(function(){$(".gallery-list").eq(7).find(".gallery-pic").addClass("gallery-on")},1100),setTimeout(function(){$(".gallery-list").eq(8).find(".gallery-pic").addClass("gallery-on")},1200),setTimeout(function(){$(".gallery-list").eq(9).find(".gallery-pic").addClass("gallery-on")},1300),setTimeout(function(){$(".entry-pic").addClass("entry-pic-on")},1500),setTimeout(function(){$(".entry-btn").addClass("entry-btn-on")},1700)),e>=s-200&&setTimeout(function(){$(".pro-list").addClass("pro-on")},500),e>=o-300&&(setTimeout(function(){$(".coop").addClass("coop-on")},500),$(".coop-mask").get(0)||setTimeout(function(){$(".coop-pic").append('<div class="coop-mask"></div>')},650),setTimeout(function(){$(".coop-mask").addClass("mask-on")},850),setTimeout(function(){$(".coop-title").addClass("title-on")},950),setTimeout(function(){$(".coop-txt").find("dd").addClass("dd-on")},1150),setTimeout(function(){$(".entry-btn").addClass("btn-on")},1350)),e>=a-250&&(setTimeout(function(){$(".about-pic").children("img").addClass("img-on")},500),setTimeout(function(){$(".introduce").addClass("introduce-on")},700),setTimeout(function(){$(".introduce").find(".intro-title").addClass("title-on")},900),setTimeout(function(){$(".introduce").find(".p1").addClass("p1-on")},1100),setTimeout(function(){$(".introduce").find(".des-btn").addClass("btn-on")},1300)),e>=t-350&&(setTimeout(function(){$(".main-news").addClass("main-news-on")},500),setTimeout(function(){$(".news-list").eq(0).addClass("news-list-on")},700),setTimeout(function(){$(".news-list").eq(1).addClass("news-list-on")},900),setTimeout(function(){$(".news-list").eq(2).addClass("news-list-on")},1100))}).trigger("scroll"),$(".entry-btn").on("mouseenter",function(){$(".gallery-entry").find(".pic-box").children("img").addClass("img-on")}),$(".entry-btn").on("mouseleave",function(){$(".gallery-entry").find(".pic-box").children("img").removeClass("img-on")}))}function lessonAm(){setTimeout(function(){$(".main-lesson").find("h3").addClass("h3-on")},200),setTimeout(function(){$(".main-lesson").find(".p1").addClass("p1-on")},400),setTimeout(function(){$(".main-lesson").find(".des-btn").addClass("des-btn-in")},600),setTimeout(function(){$(".lesson-box").find(".main-pic").addClass("main-pic-on")},800),setTimeout(function(){$(".lesson-list").eq(0).find(".other-pic").addClass("other-pic-on")},300),setTimeout(function(){$(".lesson-list").eq(0).find(".lesson-title").addClass("lesson-title-on")},500),setTimeout(function(){$(".lesson-list").eq(0).find(".lesson-des").addClass("lesson-des-on")},700),setTimeout(function(){$(".lesson-list").eq(0).find(".lesson-btn").addClass("lesson-btn-on")},900),setTimeout(function(){$(".lesson-list").eq(1).find(".other-pic").addClass("other-pic-on")},400),setTimeout(function(){$(".lesson-list").eq(1).find(".lesson-title").addClass("lesson-title-on")},600),setTimeout(function(){$(".lesson-list").eq(1).find(".lesson-des").addClass("lesson-des-on")},800),setTimeout(function(){$(".lesson-list").eq(1).find(".lesson-btn").addClass("lesson-btn-on")},1e3),setTimeout(function(){$(".lesson-list").eq(2).find(".other-pic").addClass("other-pic-on")},500),setTimeout(function(){$(".lesson-list").eq(2).find(".lesson-title").addClass("lesson-title-on")},700),setTimeout(function(){$(".lesson-list").eq(2).find(".lesson-des").addClass("lesson-des-on")},900),setTimeout(function(){$(".lesson-list").eq(2).find(".lesson-btn").addClass("lesson-btn-on")},1100)}function phoneCheck(e){return $(e).val()?/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($(e).val())?($(e).parents(".infor-item").removeClass("infor-wrong"),!0):($(e).parents(".infor-item").addClass("infor-wrong"),$(e).parents(".infor-item").find(".hint").find(".p1").text("手机号格式错误"),$(".refer").removeClass("refer-on"),!1):($(e).parents(".infor-item").addClass("infor-wrong"),$(e).parents(".infor-item").find(".hint").find(".p1").text("手机号不能为空"),$(".refer").removeClass("refer-on"),!1)}function nameCheck(e){return $(e).val()?/^[\u4e00-\u9fa5A-Za-z]*$/.test($(e).val())?($(e).parent(".infor-item").removeClass("infor-wrong"),!0):($(e).parent(".infor-item").addClass("infor-wrong"),$(e).parent(".infor-item").find(".hint").find(".p1").text("姓名格式错误"),!1):($(e).parent(".infor-item").addClass("infor-wrong"),$(e).parent(".infor-item").find(".hint").find(".p1").text("姓名不能为空"),!1)}function timeCatch(){var e=$(".code-btn"),n=e.find(".p1"),i=e.find(".p2");n.on("click",function(){var e=$(".uphone");e.val();if(phoneCheck(e),0==phoneCheck(e))return!1;if(1==phoneCheck(e)){n.addClass("hide"),i.removeClass("hide"),i.find("i").text("60");var s=i.find("i").text(),o=parseInt(s),a=setInterval(function(){0==o&&(clearInterval(a),n.removeClass("hide"),i.addClass("hide")),i.find("i").text(o--)},1e3)}})}function listenTest(){var e=$(".uname"),n=$(".uphone"),i=$(".ucode"),s=$(".uplace");if(!e.val())return $(".refer").removeClass("refer-on"),e.parent(".infor-item").addClass("infor-wrong"),e.parent(".infor-item").find(".hint").find(".p1").text("姓名不能为空"),!1;if(0==nameCheck(e))return $(".refer").removeClass("refer-on"),e.parent(".infor-item").addClass("infor-wrong"),e.parent(".infor-item").find(".hint").find(".p1").text("姓名格式错误"),!1;if(1==nameCheck(e)){if(!n.val())return $(".refer").removeClass("refer-on"),n.parent(".infor-item").addClass("infor-wrong"),n.parent(".infor-item").find(".hint").find(".p1").text("手机号不能为空"),!1;if(0==phoneCheck(n))return $(".refer").removeClass("refer-on"),n.parent(".infor-item").addClass("infor-wrong"),n.parent(".infor-item").find(".hint").find(".p1").text("手机号格式错误"),!1;if(1==phoneCheck(n))return i.val()?"上课区域 省/市"==$(".province option:selected").text()||"上课区域 市/区"==$(".city option:selected").text()?(s.parent(".infor-item").find(".hint").find(".p1").text("上课区域不能为空"),$(".refer").removeClass("refer-on"),s.parents(".infor-item").addClass("infor-wrong"),!1):($(".refer").addClass("refer-on"),s.parent(".infor-item").removeClass("infor-wrong"),!0):($(".refer").removeClass("refer-on"),i.parent(".infor-item").addClass("infor-wrong"),i.parent(".infor-item").find(".hint").find(".p1").text("验证码不能为空"),!1)}}function listenWakeup(){var e=$(".listen-box").find("input"),n=$(".listen-box").find("select");e.on("input propertychange",function(){listenTest()}),n.on("change",function(){listenTest()})}function newsPage(){$(".dfth-news").get(0)&&$(".tcdPageCode").createPage({pageCount:5,current:1,backFn:function(e){console.log(e)}})}function videoPop(){$(".video-box").on("click",function(){var e=$(this).parents(".item").index(),n=$(".video-pop").children("li").eq(e);n.siblings().addClass("hide"),n.removeClass("hide"),$(".video-pop").removeClass("hide"),maskon()}),$(".pop-close").on("click",function(){$(this).parent("li").addClass("hide"),$(".video-pop").addClass("hide"),maskoff()})}$(function(){$(".pic-lazy").get(0)&&$("img.lazy").lazyload({placeholder:"images/gray.gif",effect:"fadeIn",threshold:200,failurelimit:10}),$(".dfth-index").get(0)&&($(".slides-banner").slidesjs({width:984,height:385,play:{auto:!0,interval:5e3,swap:!0},callback:{loaded:function(e){$(".slides-banner").find(".slidesjs-navigation").text(""),$(".slides-banner").find(".slidesjs-previous").append('<div class="arrow-bj"></div><div class="slides-arrow sa1"></div>'),$(".slides-banner").find(".slidesjs-next").append('<div class="arrow-bj"></div><div class="slides-arrow sa2"></div>')},start:function(e){$(".slidesjs-slide").eq(e-1).find("img").lazyload({effect:"fadeIn"})},compvare:function(e){}}}),$(".slides-pro").slidesjs({width:990,height:430,play:{auto:!0,interval:4e4,swap:!0},callback:{loaded:function(e){$(".slides-pro").find(".slidesjs-navigation").text(""),$(".slides-pro").find(".slidesjs-previous").append('<img class="slides-arrow vm" src="images/arrow-left1.png" alt="">'),$(".slides-pro").find(".slidesjs-next").append('<img class="slides-arrow vm" src="images/arrow-right3.png" alt="">')},start:function(e){$(".slides-pro").find(".slidesjs-slide").eq(e-1).find("img").lazyload({effect:"fadeIn"})},compvare:function(e){}}}),$(".slidesjs-pagination-item").on("click",function(){$(".slidesjs-slide").find("img").lazyload({effect:"fadeIn"})})),$(".back").on("click",function(){$("body,html").animate({scrollTop:0},1e3)}),$(".listen-con").get(0)&&$(".listen-con").addClass("listen-on"),$(".dfth-index").get(0)&&$(window).scroll(function(){var e=$(".banner").height();$(window).scrollTop()>=e?$(".back").addClass("back-on"):$(".back").removeClass("back-on")}).trigger("scroll"),webTab(),commonTop(),commonBottom(),timeCatch(),listenWakeup(),indexAm(),scrollAm(),newsPage(),popClose(),lessonPop(),photoPro(),enviroment(),commonNav(),proPhoto(),swiperArrow(),videoPop()});