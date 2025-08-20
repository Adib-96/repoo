const btn_menu = document.getElementById("menu");
const navMenu = btn_menu.nextElementSibling; // the div with the ul inside
const icon = btn_menu.querySelector("img");
const download_resume = document.getElementById("download_resume");
const contact_me = document.getElementById("contact_me");
const contact_me_hero = document.getElementById("contact_me_hero");
const contact = [contact_me, contact_me_hero];
const themeButton = document.getElementById("theme");
const menuLinksMobile = navMenu.querySelectorAll("a[aria-label]");





// !Mobile
menuLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    document.body.style.overflow = ''; // restore page scroll
    icon.src = "/menus.png"; // reset icon
  });
});


//menu handler
btn_menu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent menu from closing immediately
  navMenu.classList.toggle("hidden");
  navMenu.classList.add("fixed", "inset-0", "bg-primary", "z-10", "flex", "flex-col", "items-center", "justify-center");
  document.body.style.overflow = navMenu.classList.contains("hidden") ? "auto" : "hidden";

  icon.src = navMenu.classList.contains("hidden")
    ? "/menus.png" // closed
    : "/close.png"; // open
});


document.addEventListener("click", (e) => {
  if (
    !navMenu.classList.contains("hidden") &&
    !navMenu.contains(e.target) &&
    e.target !== btn_menu &&
    !btn_menu.contains(e.target) // covers icon clicks too
  ) {
    navMenu.classList.add("hidden");
    icon.src = "/menus.png"; // reset icon
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !navMenu.classList.contains("hidden")) {
    navMenu.classList.add("hidden");
    icon.src = "/menus.png"; // reset icon
  }
});


//resume download
download_resume.addEventListener("click", (e) => {
  e.preventDefault();
  // Logic to download the resume
  const link = document.createElement("a");
  link.href = "/fullstack_resume.pdf";
  link.download = "fullstack_resume.pdf";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// assign event to both buttons
contact.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('get_in_touch').scrollIntoView({ behavior: 'smooth' });
  });
});

// add observer

const hero_section = document.querySelector('.hero');
console.log(hero_section);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

observer.observe(hero_section);
