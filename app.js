// swiper 
var swiper = new Swipper(".mySwiper", 
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPreView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPreView: 2,
            spaceBetween:20,
        },
        768:{
            slidesPreView: 3,
            spaceBetween:40,
        },
        1024:{
            slidesPreView:3,
            spaceBetween:50,
        }
   }
})

