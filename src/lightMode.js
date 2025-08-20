import { dark, light } from "./assets/assets";
const logo = document.querySelector(".logo");
const nav_links = document.querySelectorAll("nav > ul > li a");
const theme_btn = document.getElementById("theme");
const contact_me = document.getElementById("contact_me");

// #E0E8F6
theme_btn.addEventListener("click", () => {
  const bd_bg = document.body.classList.toggle("bg-primary");

  if (!bd_bg) {
    theme_btn.children[0].src = bd_bg ? light : dark;
    logo.style.color = "#000000";
    nav_links.forEach((link) => (link.style.color = "#050505"));
    contact_me.style.color = "#484E53";
    contact_me.style.borderColor = "#484E53";
  } else {
    theme_btn.children[0].src = bd_bg ? light : dark;
    logo.style.color = "#ffffff";
    nav_links.forEach((link) => (link.style.color = "#c1c1c1"));
    contact_me.style.color = "#ffffff";
    contact_me.style.borderColor = "#4FC3F7";
  }
});
