document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var menuIcon = document.querySelector(".menu-icon");

  // Toggle the menu when the menu icon is clicked
  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");

    // Change the menu icon to a close icon when the menu is open
    if (menu.classList.contains("show")) {
      menuIcon.innerHTML = "&#10006;"; // Unicode character for 'X'
    } else {
      menuIcon.innerHTML =
        '<div class="bar"></div>' +
        '<div class="bar"></div>' +
        '<div class="bar"></div>';
    }
  });

  // Close the menu when a menu item is clicked
  var menuItems = document.querySelectorAll(".menu a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menu.classList.remove("show");
      menuIcon.innerHTML =
        '<div class="bar"></div>' +
        '<div class="bar"></div>' +
        '<div class="bar"></div>';
    });
  });
});
