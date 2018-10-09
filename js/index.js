$(function() {
    var isMobile = $(window).width() < 768 ? true : false;
    console.log(isMobile);
    var mtouch = function() {
        // 移动端手势切换
        var startX = 0;
        var distanceX = 0;
        var isMove = false;
        // jquery中的touch事件 originalEvent代表原生事件
        $('.wjs_banner').on('touchstart',function(e) {
            startX = e.originalEvent.touches[0].clientX;
        }).on('touchmove',function(e) {
            var moveX = e.originalEvent.touches[0].clientX;
            distanceX = moveX - startX;
            isMove = true;
        }).on('touchend',function(e) {
            // 距离足够50px一定要滑动
            if(isMove && Math.abs(distanceX) > 50) {
                // 左滑手势
                if(distanceX < 0) {
                    $('.carousel').carousel('next');
                }  
                // 右滑手势
                else {
                    $('.carousel').carousel('prev');
                }
            }
        });
    }
    if(isMobile) {
        mtouch();
    }
    var initMobileTab = function() {
        var $navTabs = $('.wjs_product .nav-tabs');
        var width = 0;
        $navTabs.find('li').each(function(i, item) {
            var $currLi = $(this);
            var liWidth = $currLi.outerWidth(true);
            width += liWidth;
        })
        $navTabs.width(width);
    }
    initMobileTab();
    new IScroll($('.nav-tabs-parent')[0], {
        scrollX:true,
        scrollY:false,
        click:true
    })
})