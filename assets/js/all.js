"use strict";

var swiper_1 = new Swiper(".mySwiper", {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  }
}); //首頁評論

var swiper_2 = new Swiper(".mySwiper-comment", {
  slidesPerView: 1,
  spaceBetween: 0,
  //slidesPerGroup: 1,
  grid: {
    rows: 2,
    fill: 'row'
  },
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".fa-arrow-left",
    prevEl: ".fa-arrow-right"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 15
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: false
    }
  }
}); //Reservation 課程階級

var swiper_3 = new Swiper(".mySwiper-classlevel", {
  slidesPerView: 1,
  spaceBetween: 0,
  //slidesPerGroup: 1,
  grid: {
    rows: 3,
    fill: 'row'
  },
  loop: false,
  loopFillGroupWithBlank: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 15
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false
    }
  }
}); //Surroundings 課程推薦

var swiper_4 = new Swiper(".mySwiper-recommend", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  grid: {
    rows: 1,
    fill: 'row'
  },
  loop: false,
  //loopFillGroupWithBlank: false,
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
});
$(document).ready(function () {
  //課程選擇邊框+區塊d-none/block pc版因toggle關係先將其餘兩個disabled
  $('.jq-test').on('click', function (event) {
    event.preventDefault();
    $(this).parent().parent().parent().parent().toggleClass('border-4');
    $(this).parent().parent().parent().parent().siblings().removeClass('border-4').toggleClass('d-none d-lg-block');
    $(this).parent().parent().parent().parent().siblings().find('a').toggleClass('disabled');
  }); //collapse pc的箭頭位置

  $('.jq-btn-course-2').on('click', function (event) {
    $('.fa-caret-down').parent().parent().toggleClass('d-lg-block offset-lg-4');
  });
  $('.jq-btn-course-3').on('click', function (event) {
    $('.fa-caret-down').parent().parent().toggleClass('d-lg-block offset-lg-8');
  }); //課程階級點擊+白邊框+打勾變色

  $('.swiper-wrapper-classlevel>li').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('border border-white border-4');
    $(this).siblings().removeClass('border border-white border-4');
    $(this).find('.jq-fa-check-circle').toggleClass('opacity-100');
    $(this).siblings().find('.jq-fa-check-circle').removeClass('opacity-100');
  }); //課程選擇文字區塊

  $('.jq-btn-course-1').on('click', function (event) {
    $('.jq-course-name>h3').text('首次體驗課程-');
    $('.jq-course-level-1').on('click', function () {
      $('.jq-level1').toggleClass('jq-level-active');
    });
    $('.jq-course-level-2').on('click', function () {
      $('.jq-level2').toggleClass('jq-level-active');
    });
    $('.jq-course-level-3').on('click', function () {
      $('.jq-level3').toggleClass('jq-level-active');
    });
  });
  $('.jq-btn-course-2').on('click', function (event) {
    $('.jq-course-name>h3').text('短期體驗課程-');
    $('.jq-course-level-1').on('click', function () {
      $('.jq-level1').toggleClass('jq-level-active');
    });
    $('.jq-course-level-2').on('click', function () {
      $('.jq-level2').toggleClass('jq-level-active');
    });
    $('.jq-course-level-3').on('click', function () {
      $('.jq-level3').toggleClass('jq-level-active');
    });
  });
  $('.jq-btn-course-3').on('click', function (event) {
    $('.jq-course-name>h3').html('長期體驗課程-');
    $('.jq-course-level-1').on('click', function () {
      $('.jq-level1').toggleClass('jq-level-active');
    });
    $('.jq-course-level-2').on('click', function () {
      $('.jq-level2').toggleClass('jq-level-active');
    });
    $('.jq-course-level-3').on('click', function () {
      $('.jq-level3').toggleClass('jq-level-active');
    });
  });
});
//# sourceMappingURL=all.js.map
