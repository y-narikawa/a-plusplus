const mainvisualTextSwiper = new Swiper('.mainvisual__slide-text', {
  // Optional parameters
  loop: true,

  // スマホの操作無効
  allowTouchMove: false,

  // Effect
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})

const swiper = new Swiper('.mainvisual__bg-slider', {
  // Optional parameters
  loop: true,

  // Effect
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  // Auto Play
  autoplay: true,

  thumbs: {
    //サムネイルのスライダーを指定
    swiper: mainvisualTextSwiper
  },
});

let swiperCreate = true
let recommendSwiper

window.addEventListener('load', () => {
  const mq = window.matchMedia('(max-width: 768px)').matches
  if (mq) {
    swiperCreate = false
  } else {
    createSwiper()
  }
})

window.addEventListener('resize', () => {
  const mq = window.matchMedia('(max-width: 768px)').matches

  if (mq && swiperCreate) {
    recommendSwiper.destroy(false, true)
    swiperCreate = false
  } else if (!mq && !swiperCreate) {
    createSwiper()
    swiperCreate = true
  }
})

const createSwiper = () => {
  recommendSwiper = new Swiper('.recommend__slide', {
    // Optional parameters
    loop: false,
  
    slidesPerView: 'auto',
    spaceBetween: 16,
  
    mousewheel: {
      invert: false,
    },
  });
}