(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });
})(jQuery);

function toggleActiveClass(event) {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Remove active class from all links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  event.target.classList.add("active");
}

// Attach the function to each navigation link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", toggleActiveClass);
});

function toggleActiveClassOnScroll() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);

    if (section) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 50 && rect.bottom >= 50) {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", toggleActiveClassOnScroll);

$("#myForm").on("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  formData.append("service_id", "service_9l6783p");
  formData.append("template_id", "template_s1gjo6r");
  formData.append("user_id", "8bZboEOuueSeP8zbE");

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
    type: "POST",
    data: formData,
    contentType: false, // auto-detection
    processData: false, // no need to parse formData to string
  })
    .done(function () {
      alert("Votre email a était envoyer!");
      $("#myForm")[0].reset();
    })
    .fail(function (error) {
      alert("Oops... " + JSON.stringify(error));
    });
});
