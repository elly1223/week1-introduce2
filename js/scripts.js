(function ($) {
    "use strict"; // 엄격한 사용 시작

    // anime.js를 사용한 부드러운 스크롤
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // 맨 위로 스크롤 버튼이 나타나게 하기
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // 스크롤 트리거 링크를 클릭하면 반응 형 메뉴 닫기
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // scrollspy를 활성화하여 스크롤의 네비게이션바 항목에 활성 클래스를 추가한다.
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // 네비게이션바 자동접기
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // 페이지가 맨 위에 있지 않으면 접기
    navbarCollapse();
    // 페이지가 스크롤 될 때 내비게이션 바를 접기
    $(window).scroll(navbarCollapse);

})(jQuery); // 엄격한 사용 끝
