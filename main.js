const bar = document.getElementById("bar");
const menu = document.getElementById("menu-children");

bar.addEventListener("click", () => {
  menu.classList.toggle("active");
  //   console.log(1234);
});

window.addEventListener("scroll", () => {
  menu.classList.remove("active");
});
