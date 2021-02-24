const aboutBtn = document.querySelector(".about");
var mainContent = document.querySelector("#main-content");
const awardBtn = document.querySelector(".awards");
const MenuItemsCat = document.querySelector("#navMenuButton");
const homeBtn = document.querySelector("#navHomeButton");
//     about Btn Setup
aboutBtn.addEventListener("click", function () {
  // creating xhr for about snippets
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "snippets/about.html", true);
  xhr.onload = function () {
    if ((this.status = 200)) {
      mainContent.innerHTML = this.responseText;
    }
  };
  xhr.send();
  // removing class from menuItems
  MenuItemsCat.classList.remove("active");
});

//     awards Btn Setup
awardBtn.addEventListener("click", function () {
  // creating xhr for about snippets
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "snippets/award.html", true);
  xhr.onload = function () {
    if ((this.status = 200)) {
      mainContent.innerHTML = this.responseText;
    }
  };
  xhr.send();
  // removing class from menuItems
  MenuItemsCat.classList.remove("active");
});

// fixing navbar
jQuery("body").bind("click", function (e) {
  if (jQuery(e.target).closest(".navbar").length == 0) {
    // click happened outside of .navbar, so hide
    var opened = jQuery(".navbar-collapse").hasClass("collapse in");
    if (opened === true) {
      jQuery(".navbar-collapse").collapse("hide");
    }
  }
});
