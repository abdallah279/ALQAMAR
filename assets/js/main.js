// loader js
$(window).on("load", function () {
  $(".loader").delay(300).fadeOut(1000);
});

// Header Fixed
let header = document.querySelector(".page-navbar");
header.classList.toggle("scroll", window.scrollY > 20);

window.addEventListener("scroll", function () {
  header.classList.toggle("scroll", window.scrollY > 20);
});

// Active Link
$(".page-navbar .links .link").each(function () {
  $(this).removeClass("active");
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

// Show And Hide Search Navbar
$(".search-ic").on("click", function () {
  $(".main-search").toggleClass("active");
  $(".overlay-m").fadeIn(600);
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".side-user-open").on("click", function () {
  $(".sidebar").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".close").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

$(".overlay-m").on("click", function () {
  $(".links").removeClass("active");
  $(".sidebar").removeClass("active");
  $(".main-search").removeClass("active");
  $(this).fadeOut(500);
});

// dropDown stopPropagation
$(".dropdown-menu").click(function (e) {
  e.stopPropagation();
});

// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll(".pass-icon");

if (iconsPassSet) {
  iconsPassSet.forEach((ic) => {
    ic.addEventListener("click", function () {
      let input = ic.parentElement.querySelector("input");
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon) {
  if (input.type == "password") {
    input.setAttribute("type", "text");
    // icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else {
    input.setAttribute("type", "password");
    // icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }

  icon.classList.toggle("show");
}

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

// Heart
$(document).on("click", ".heart", function () {
  if ($(this).find("i").hasClass("fa-regular")) {
    $(this).find("i").addClass("fa-solid c-yellow");
    $(this).find("i").removeClass("fa-regular");
  } else {
    $(this).find("i").removeClass("fa-solid c-yellow");
    $(this).find("i").addClass("fa-regular");
  }
});

// $('[data-pass]').on('click', function(){
// let item = $(this).attr('data-pass')
// sessionStorage.setItem("activeTab", JSON.stringify(item));
// })

let allCopy = document.querySelectorAll(".circle");

if (allCopy) {
  allCopy.forEach((el) => {
    el.addEventListener("click", function () {
      let code = el.closest(".copy-item").querySelector(".copy-num");
      CopyToClipboard(code);
    });
  });
}

function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(id);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

// Input Number
$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// Show And Hide NavBar collapse
$(document).ready(function () {
  $(".coll-open").click(function (e) {
    e.preventDefault();
    if ($(this).parent(".nav-collapse").hasClass("active")) {
      $(this).next(".collapse-content").slideUp();
      $(this).parent(".nav-collapse").removeClass("active");
    } else {
      $(".nav-collapse").removeClass("active");
      $(".collapse-content").slideUp();
      $(this).parent(".nav-collapse").addClass("active");
      $(this).next(".collapse-content").slideDown();
    }
  });
});

new WOW().init();
$('.num').countUp();

/******************* All Sliders *******************/

$(document).ready(function () {
  /************ home Slider ***********/
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    rtl: isRtl,
    dots: true,
    nav: false,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    animateOut: "fadeOut",
    smartSpeed: 1500,
  });

  /************ services Slider ***********/
  const owl = $(".services-slider");

  owl.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owl.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });

  owl.owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-hand-point-right"></i>`,
      `<i class="fa-solid fa-hand-point-left"></i>`,
    ],
    responsive: {
      1200: {
        items: 4,
      },
      991: {
        items: 3,
      },
      560: {
        items: 2,
        nav: false,
      },
    },
  });

  /************ Clients Carousel ***********/
  $(".clients-slider").owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    margin: 35,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2800,
    autoplaySpeed: 2800,
    autoplayHoverPause: true,
    responsive: {
      1200: {
        items: 7,
      },
      1000: {
        items: 6,
      },
      800: {
        items: 4,
      },
      400: {
        items: 3,
      },
    },
  });
});
