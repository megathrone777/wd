const initHeader = () => {
  const menu = document.querySelector("[data-menu]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const clMenuOpened = "header__menu--opened";
  const clButtonCollapsed = "header__toggle--collapsed";

  if (menu && menuButton) {
    menuButton.addEventListener("click", () => {
      if (menu.classList.contains(clMenuOpened)) {
        menu.classList.remove(clMenuOpened);
        menuButton.classList.remove(clButtonCollapsed);
        return;
      }
      menu.classList.add(clMenuOpened);
      menuButton.classList.add(clButtonCollapsed);
    });
  }
};

const initIntro = () => {
  const contactSection = document.getElementById("contact");
  const buttonElement = document.querySelector("[data-intro-toggle]");

  if (contactSection && buttonElement) {
    buttonElement.addEventListener("click", () => {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
};

const initPreview = () => {
  const videoElement = document.querySelector("[data-video]");
  const videoPlayButton = document.querySelector("[data-video-play]");

  if (videoElement && videoPlayButton) {
    videoPlayButton.addEventListener("click", () => {
      videoPlayButton.style.display = "none";
      videoElement.play();
    });

    videoElement.addEventListener("click", ({ currentTarget }) => {
      if (!currentTarget.paused) {
        currentTarget.pause();
        currentTarget.load();
        videoPlayButton.style.display = "block";
      }
    });
  }
};

const initFooter = () => {
  const yearElement = document.querySelector("[data-year]");

  if (yearElement) {
    const currentYear = new Date().getFullYear();

    yearElement.innerHTML = currentYear;
  }
};

const initSkills = () => {
  const skillsSection = document.getElementById("skills");
  const progressBarElements = document.querySelectorAll("[data-progress]");

  if (skillsSection && progressBarElements && !!progressBarElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            progressBarElements.forEach((item) => {
              const percentage = item.getAttribute("data-progress");

              item.style.width = `${percentage}%`;
            });
          }
        });
      },
      {
        rootMargin: "-400px",
      }
    );

    observer.observe(skillsSection);
  }
};

window.onload = () => {
  initHeader();
  initIntro();
  initPreview();
  initSkills();
  initFooter();
};
