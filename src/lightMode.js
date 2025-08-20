import { dark, light } from "./assets/assets";

const logo = document.querySelector(".logo");
const nav_links = document.querySelectorAll("nav > ul > li a");
const theme_btn = document.getElementById("theme");
const contact_me = document.getElementById("contact_me");
const hero_section = document.querySelector(".hero-section");
const h1_hero = hero_section.childNodes[1].querySelector("h1");
const h3_hero = hero_section.childNodes[1].childNodes[5].querySelector("h3");
const p_hero = hero_section.childNodes[1].childNodes[7];

const themes = {
  light: {
    btnImg: dark,
    logoColor: "#000000",
    navColor: "#050505",
    contactColor: "#484E53",
    contactBorder: "#484E53",
    bodyTheme: "light",
    heroBg: false,
    h1Color: "#484E53",
    h3From: "from-[#4FC3F7]",
    h3To: "to-[#484E53]",
    pColor: "#484E53",
  },
  dark: {
    btnImg: light,
    logoColor: "#ffffff",
    navColor: "#c1c1c1",
    contactColor: "#ffffff",
    contactBorder: "#4FC3F7",
    bodyTheme: "dark",
    heroBg: true,
    h1Color: "#FFFFFF",
    h3From: "from-brd-blue",
    h3To: "to-white",
    pColor: "#E1E1E1",
  },
};

theme_btn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("bg-primary");
  const theme = isDark ? themes.dark : themes.light;

  theme_btn.children[0].src = theme.btnImg;
  logo.style.color = theme.logoColor;
  nav_links.forEach((link) => (link.style.color = theme.navColor));

  contact_me.style.color = theme.contactColor;
  contact_me.style.borderColor = theme.contactBorder;

  document.body.setAttribute("data-theme", theme.bodyTheme);

  if (theme.heroBg) {
    hero_section.classList.add("bg-[url('/src/assets/bg.png')]");
  } else {
    hero_section.classList.remove("bg-[url('/src/assets/bg.png')]");
  }

  h1_hero.style.color = theme.h1Color;

  // Reset h3 classes
  h3_hero.classList.remove("from-brd-blue", "to-white", "from-[#4FC3F7]", "to-[#484E53]");
  h3_hero.classList.add(theme.h3From, theme.h3To);

  p_hero.style.color = theme.pColor;
});
