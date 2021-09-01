var swiper_1 = new Swiper(".mySwiper", {
  autoplay:{
      delay:6000,
      disableOnInteraction:false,
  },
  });
//首頁評論
var swiper_2 = new Swiper(".mySwiper-comment", {
  slidesPerView: 1,
  spaceBetween: 0,
  //slidesPerGroup: 1,
  grid: {
    rows: 3,
    fill: 'row' 
  },
  loop: false,
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
      loop: false,
    }
  }
});
//Reservation 課程階級
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
      loop: false,
    }
  }
});
//Surroundings 課程推薦
var swiper_4 = new Swiper(".mySwiper-recommend", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
   autoplay:{
      delay:6000,
      disableOnInteraction:false,
  },
  grid: {
    rows: 1,
    fill: 'row'
  },
  loop: false,
  //loopFillGroupWithBlank: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});
//Course 師資
var swiper_5 = new Swiper(".mySwiper-teacher", {
  grid: {
    rows: 4,
    fill: 'row'
  },
  
  slidesPerView: 1,
  breakpoints: {
    
    768: {
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
      },
    loop: false,
    spaceBetween: 30,
    slidesPerView: 2,
    grid: {
        rows: 1,
        fill: 'row'
      },
    },
  }
});
//AOS
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: false, // class applied after initialization
  animatedClassName: 'animate__animated', // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 80, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



$(document).ready(function () {
  //課程選擇邊框+區塊d-none/block pc版因toggle關係先將其餘兩個disabled
  $('.jq-test').on('click',function(event){
    event.preventDefault();
    $(this).parent().parent().parent().parent().toggleClass('border-4');
    $(this).parent().parent().parent().parent().siblings().removeClass('border-4').toggleClass('d-none d-lg-block');
    $(this).parent().parent().parent().parent().siblings().find('a').toggleClass('disabled');

  });
  //collapse pc的箭頭位置
  $('.jq-btn-course-2').on('click',function(event){
    $('.fa-caret-down').parent().parent().toggleClass('d-lg-block offset-lg-4');
    
  });
  $('.jq-btn-course-3').on('click',function(event){
    $('.fa-caret-down').parent().parent().toggleClass('d-lg-block offset-lg-8');

  });
  
  //課程階級點擊+白邊框+打勾變色
  $('.swiper-wrapper-classlevel>li').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('border border-white border-4');
    $(this).siblings().removeClass('border border-white border-4');
    
    $(this).find('.jq-fa-check-circle').toggleClass('opacity-100');
    $(this).siblings().find('.jq-fa-check-circle').removeClass('opacity-100')
  })
  //課程選擇文字區塊
  $('.jq-btn-course-1').on('click',function(event){
    $('.jq-course-name>h3').text('首次體驗課程-');
    $('.jq-course-level-1').on('click',function(){
      $('.jq-level1').toggleClass('jq-level-active');
    });
    $('.jq-course-level-2').on('click',function(){
      $('.jq-level2').toggleClass('jq-level-active');
    });
    $('.jq-course-level-3').on('click',function(){
      $('.jq-level3').toggleClass('jq-level-active');
    });

  });
  $('.jq-btn-course-2').on('click',function(event){
    $('.jq-course-name>h3').text('短期體驗課程-');
    $('.jq-course-level-1').on('click',function(){
      $('.jq-level1').toggleClass('jq-level-active');
    });
    $('.jq-course-level-2').on('click',function(){
      $('.jq-level2').toggleClass('jq-level-active');
    });
    $('.jq-course-level-3').on('click',function(){
      $('.jq-level3').toggleClass('jq-level-active');
    });
  });
  $('.jq-btn-course-3').on('click',function(event){
    $('.jq-course-name>h3').html('長期體驗課程-');
    $('.jq-course-level-1').on('click',function(){
      $('.jq-level1').toggleClass('jq-level-active');
    });
    $('.jq-course-level-2').on('click',function(){
      $('.jq-level2').toggleClass('jq-level-active');
    });
    $('.jq-course-level-3').on('click',function(){
      $('.jq-level3').toggleClass('jq-level-active');
    });
  });
  //top頁面滑動置頂效果
  $('.jq-btn-backtotop').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: 0 }, 1000);

  }).hover(function(){
      $(this).attr('title','top');
  });


  
});
