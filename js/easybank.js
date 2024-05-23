let menuList = document.getElementById("menuList");
let openIcon = document.getElementById("openI");
let closeIcon = document.getElementById("closeI");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
    menuList.style.padding = "10px 0";
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
  } else {
    menuList.style.maxHeight = "0px";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    menuList.style.padding = "0";
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const navItems = document.querySelectorAll(".menu-ls");

//   navItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       navItems.forEach((navItem) => navItem.classList.remove("active"));
//       this.classList.add("active");
//     });
//   });
// });
