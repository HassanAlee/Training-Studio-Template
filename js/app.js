// javaScript for tabs
const tabsElm = document.querySelector(".tabs");
const contentElm = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".tab-btn");
tabsElm.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");

    contentElm.forEach(function (content) {
      content.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
// javaScript for tabs end
// javascript for timetable
const tableElm = document.querySelectorAll(".table");
const dayBtnElm = document.querySelectorAll(".day-btn");
dayBtnElm.forEach(function (day) {
  day.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      dayBtnElm.forEach(function (day) {
        day.classList.remove("live");
      });
      tableElm.forEach((table) => {
        table.classList.remove("live");
      });
      e.target.classList.add("live");
    }
    const element = document.getElementById(id).parentElement;
    element.classList.add("live");
  });
});
// javascript for timetable end
// JavaScript for Navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (this.scrollY > 690) {
    nav.classList.add("sticky");
    console.log("Hello World");
  } else {
    nav.classList.remove("sticky");
  }
});
