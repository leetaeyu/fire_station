$(function(){
  // banner
  var bannerSwiper = new Swiper(".banner_swiper", {
      spaceBetween:0,
      speed:800,
      centeredSlides: true,
      infinite:true,
      loop:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  // news
  var newsSwiper = new Swiper(".news_swiper", {
    slidesPerView: 1,
    spaceBetween:40,
    speed:800,
    // centeredSlides: true,
    // infinite:true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".news_pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    
    breakpoints: {
      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 0,
        centeredSlides:false,
      },
      950: {
        slidesPerView: 3,  //브라우저가 768보다 클 때
        spaceBetween: 0,
        centeredSlides:false,
      },
      1280: {
        slidesPerView: 4,  //브라우저가 1278보다 클 때
        spaceBetween: 20,
        centeredSlides:false,
      },
    },
  });
  
  //chart
  const ctx = document.getElementById('myChart');
  const data = {
    labels: [
        '화재',
        '구조',
        '구급',
        '생활안전'
    ],
    datasets: [{
        data: [130, 744, 4864, 389],
        backgroundColor: [
        '#939B62',
        '#FFB26B',
        '#FF7B54',
        '#FFD56F',
        ],
        hoverOffset: 5,
      }]
  };

  new Chart(ctx,{
    type: 'doughnut',
    data: data,
    // options:{
    //     plugins:{
    //         legend:{
    //             display:false
    //         },
    //     }
    // }
  });

  // like 
  var likeSwiper = new Swiper(".like_swiper", {
    slidesPerView: 1,
    // centeredSlides: true,
    speed:700,
    spaceBetween: 1,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
  });

  // 호버시 슬라이드 멈춤
  $(".like_swiper").each(function(elem, target){
    var swp = target.swiper;
    $(this).hover(function() {
        swp.autoplay.stop();
    }, function() {
        swp.autoplay.start();
    });
  });

  // pr 
  var prSwiper = new Swiper(".pr_swiper", {
    slidesPerView: 1,
    // centeredSlides: true,
    speed:700,
    spaceBetween: 50,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction"
    // },
    breakpoints: {
      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        slidesPerGroup: 2,
        spaceBetween: 50,
        centeredSlides:false,
      },
      1280: {
        slidesPerView: 2,  //브라우저가 1278보다 클 때
        slidesPerGroup: 2,
        spaceBetween: 50,
        centeredSlides:false,
      },
    },
  });

});