import { dark, light } from "./assets/assets";

const logo = document.querySelector(".logo");
const nav_links = document.querySelectorAll("nav > ul > li a");
const theme_btn = document.getElementById("theme");
const contact_me = document.getElementById("contact_me");
const hero_section = document.querySelector(".hero-section");
const h1_hero = hero_section.childNodes[1].querySelector("h1");
const h3_hero = hero_section.childNodes[1].childNodes[5].querySelector("h3");
const p_hero = hero_section.childNodes[1].childNodes[7];
const about_section = document.getElementById('about').children;
const services_section = document.getElementById('services').children;
const projects_section = document.getElementById('projects').children;
const get_in_touch = document.getElementById('get_in_touch').children;




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
    contactMeHeroParagraph: "#1C1E53",
    contactMeHeroHeadColor : "#2B2B2B"
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
    contactMeHeroParagraph: "#E1E1E1",
    contactMeHeroHeadColor : "#FFFFFF"

  },
};

484E53

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
  contact_me_hero.style.color = theme.contactColor;
  contact_me_hero.style.borderColor = theme.contactBorder;


  // about section

  about_section[0].style.color = theme.contactMeHeroHeadColor;
  about_section[1].children[0].classList.remove("from-brd-blue", "to-white", "from-[#4FC3F7]", "to-[#484E53]");
  about_section[1].children[0].classList.add(theme.h3From, theme.h3To);
  Array.from(about_section[2].children).forEach((child) => {
    child.style.color = theme.contactMeHeroParagraph;
  });
  about_section[3].style.color = theme.contactMeHeroParagraph;
  about_section[3].style.borderColor = theme.contactBorder;

  //services section 
services_section[0].style.color = theme.contactMeHeroHeadColor;
services_section[1].children[0].classList.remove(
  "from-brd-blue", "to-white", "from-[#4FC3F7]", "to-[#484E53]"
);
services_section[1].children[0].classList.add(theme.h3From, theme.h3To);

Array.from(services_section[2].children).forEach((child) => {
  // Reset styles first
  child.classList.remove(
    'from-grd-grey','via-grd-grey','to-grd-black',
    'mix-blend-lighten','ring-dark-grey','ring-inset',
    'border-dark-grey','border','ring-1','bg-white'
  );

  if (theme.bodyTheme === "light") {
    // Light mode card
    child.classList.add('bg-white');
  } else {
    // Dark mode card
    child.classList.add(
      'from-grd-grey','via-grd-grey','to-grd-black',
      'mix-blend-lighten','ring-dark-grey','ring-inset',
      'border-dark-grey','border','ring-1'
    );
  }

  // Update text colors inside cards
  child.children[0].children[1].style.color = theme.h1Color;
  child.children[0].children[2].style.color = theme.contactMeHeroParagraph;
});



  // projects section
  projects_section[0].style.color = theme.contactMeHeroHeadColor;
  projects_section[1].children[0].classList.remove("from-brd-blue", "to-white", "from-[#4FC3F7]", "to-[#484E53]");
  projects_section[1].children[0].classList.add(theme.h3From, theme.h3To);
  Array.from(projects_section[2].children).forEach((child) => {
    child.classList.remove('from-grd-grey','via-grd-grey','to-grd-black','mix-blend-lighten','ring-dark-grey','ring-inset','border-dark-grey','border','ring-1');

  });
  const q = projects_section[2]
  Array.from(q.children).forEach((child) => {

    child.children[1].style.color = theme.h1Color;
    child.children[2].children[0].style.color = theme.h1Color;
  })


  // contact me hero section
  get_in_touch[0].style.color = theme.contactMeHeroHeadColor;
  get_in_touch[1].children[0].classList.remove("from-brd-blue", "to-white", "from-[#4FC3F7]", "to-[#484E53]");
  get_in_touch[1].children[0].classList.add(theme.h3From, theme.h3To);


  // Array.from(get_in_touch[2].children).forEach((child) => {
  //   child.style.color = theme.contactMeHeroParagraph;
  //   child.style.borderColor = theme.contactBorder;

  // });

  get_in_touch[2].children[0].children[0].children[0].style.color = theme.bodyTheme === "dark" ? "#FFFFFF" : "#000000";
  get_in_touch[2].children[0].children[0].children[0].style.borderColor = theme.contactColor

  get_in_touch[2].children[0].children[0].children[1].style.color = theme.bodyTheme === "dark" ? "#FFFFFF" : "#000000";
  get_in_touch[2].children[0].children[0].children[1].style.borderColor = theme.contactColor

  get_in_touch[2].children[0].children[0].children[2].style.color = theme.bodyTheme === "dark" ? "#FFFFFF" : "#000000";
  get_in_touch[2].children[0].children[0].children[2].style.borderColor = theme.contactColor;


  get_in_touch[2].children[0].children[1].style.color = theme.bodyTheme === "dark" ? "#FFFFFF" : "#000000";
  get_in_touch[2].children[0].children[1].style.borderColor = theme.contactColor;


  get_in_touch[2].children[0].children[2].style.backgroundColor = theme.contactColor;
  get_in_touch[2].children[0].children[2].style.color = theme.bodyTheme === "dark" ? "#000000" : "#FFFFFF";


});
