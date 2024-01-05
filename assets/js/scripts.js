
  const toggleMenuElement = document.getElementById("toggle-menu");
  const menuListElement = document.getElementById("menu__list");
  
    toggleMenuElement.addEventListener("click", () => {
        menuListElement.classList.toggle("menu__list--show");
      });

