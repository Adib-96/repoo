const btn_menu = document.getElementById("menu");
const navMenu = btn_menu.nextElementSibling; // the div with the ul inside
const icon = btn_menu.querySelector("img");
const download_resume = document.getElementById("download_resume");
const contact_me = document.getElementById("contact_me");
const contact_me_hero = document.getElementById("contact_me_hero");
const contact = [contact_me, contact_me_hero];



btn_menu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent menu from closing immediately
  navMenu.classList.toggle("hidden");

  // Change icon depending on menu state
  icon.src = navMenu.classList.contains("hidden")
    ? "src/assets/menus.png" // closed
    : "src/assets/close.png"; // open
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navMenu.classList.contains("hidden") &&
    !navMenu.contains(e.target) &&
    e.target !== btn_menu &&
    !btn_menu.contains(e.target) // covers icon clicks too
  ) {
    navMenu.classList.add("hidden");
    icon.src = "src/assets/menus.png"; // reset icon
  }
});

// Close menu when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !navMenu.classList.contains("hidden")) {
    navMenu.classList.add("hidden");
    icon.src = "src/assets/menus.png"; // reset icon
  }
});



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
contact.map((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('get_in_touch').scrollIntoView({ behavior: 'smooth' });
  });
});



