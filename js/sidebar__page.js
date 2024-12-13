document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".sidebar__desc");
    const list = document.querySelector(".sidebar__list");
  
    button.addEventListener("click", function () {
      const isActive = list.classList.contains("active");
      list.classList.toggle("active", !isActive);
      button.classList.toggle("active", !isActive);
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".page__nav-desc");
    const list = document.querySelector(".page__nav-list");
  
    button.addEventListener("click", function () {
      const isActive = list.classList.contains("active");
      list.classList.toggle("active", !isActive);
      button.classList.toggle("active", !isActive);
    });
  });
  