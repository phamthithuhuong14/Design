const bar = document.getElementById("bar");
const menu = document.getElementById("menu-children");

bar.addEventListener("click", () => {
  menu.classList.toggle("active");
  //   console.log(1234);
});

window.addEventListener("scroll", () => {
  menu.classList.remove("active");
});

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   slidesPerView: 6, // Số ảnh hiển thị trên mỗi slide
//   spaceBetween: 10,
//   loop: true,

//   // If we need pagination

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var owl = $(".swiper-wrapper");
owl.owlCarousel({
  nav: false,
  items: 8,
  margin: 20,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});
// Go to the next item
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".customPrevBtn").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
