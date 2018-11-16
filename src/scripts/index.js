$(function(){
    bannerSwiper();
    sizecheck();

    window.onresize=function(){  
        sizecheck();
   }  

});


function bannerSwiper(){
    // swiper1
    var mySwiper1 = new Swiper('.container1',{
        pagination: '.pag1',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })

    // swiper2
    var mySwiper2 = new Swiper('.container2',{
        pagination: '.pag2',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })

    $('.icon-prev').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipePrev()
    })

    $('.icon-next').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipeNext()
    })

    $('.newhouse').find('.tab-list').on('click',function(){
        var o = $(this);
        var os = o.siblings();
        os.removeClass('tab-on');
        o.addClass('tab-on');
        var oindex = o.index();
        if(oindex>0){
            var newindex = oindex/2
        }else{
            var newindex = 0
        }
        mySwiper2.swipeTo(newindex, 500, false);
    });
}

function sizecheck(){
    var winWidth = window.innerWidth;
    if(winWidth<1460){
        $('.changesize').addClass('small');
    }else{
        $('.changesize').removeClass('small');
    }
}