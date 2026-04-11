// nav.js – Fullscreen burger menu logic

const burger = document.getElementById("burger");
const overlay = document.getElementById("menuOverlay");

if (burger && overlay) {

  const openMenu = () => {
    burger.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden"; // prevent background scroll
    burger.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    burger.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    burger.setAttribute("aria-expanded", "false");
  };

  // Toggle menu on burger click
  burger.addEventListener("click", () => {
    if (overlay.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking any link
  overlay.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeMenu();
    }
  });
}

document.querySelectorAll(".moods button").forEach(btn => {
  btn.addEventListener("click", () => {
    localStorage.setItem("mood", btn.textContent);
  });
});