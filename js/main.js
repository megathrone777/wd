const initHeader = () => {
  const menu = document.querySelector("[data-menu]");
  const menuButton = document.querySelector("[data-menu-toggle]");

  if (menu && menuButton) {
    menuButton.addEventListener("click", () => {
      if (menu.classList.contains("header__menu--opened")) {
        menu.classList.remove("header__menu--opened");
        menuButton.classList.remove("header__toggle--collapsed");
        return;
      }
      menu.classList.add("header__menu--opened");
      menuButton.classList.add("header__toggle--collapsed");
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
        if (entries[0].isIntersecting) {
          progressBarElements.forEach((item) => {
            const percentage = item.getAttribute("data-progress");

            item.style.width = `${percentage}%`;
          });
        }
      },
      {
        rootMargin: "-400px",
        threshold: 0.000001,
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
