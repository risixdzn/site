// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM loaded");

  // wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      $("body").removeClass("non-event").addClass("loaded");

      // custom GSAP code goes here
      console.log("window loaded");

      const tl = gsap.timeline();
      gsap.registerPlugin(ScrollTrigger);

      tl.from(".homesubtitle1, .hometitle1", {
        delay: 0.8,
        y: 150,
        skewY: 5,
        duration: 1,
        stagger: {
          amount: 0.4,
        },
      });
      tl.from(".homebuttonctt, .social-menu li, .homenickimg ", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: {
          amount: 0.4,
        },
      });
      tl.from("nav, .imgleesinbg", {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: {
          amount: 0.4,
        },
      });
      tl.from(".headerimg, .menu a, .hamburger", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: {
          amount: 0.4,
        },
      });

      
    },
    false
  );
  
});
gsap.from('.sobre-resumo', {
  scrollTrigger: {
    trigger: ".sobre-resumo",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
    
  },
  opacity: 0,
  lazy: false
});


