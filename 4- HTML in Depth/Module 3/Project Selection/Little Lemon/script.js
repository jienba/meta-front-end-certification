  document.addEventListener("DOMContentLoaded", function () {
    const goTopBtn = document.getElementById("goTopBtn");
    const promotion = document.querySelector(".promotion");
  
    window.addEventListener("scroll", () => {
      // Show or hide the button based on scroll position
      if (window.scrollY > promotion.offsetHeight) {
        goTopBtn.classList.add("show");
      } else {
        goTopBtn.classList.remove("show");
      }
    });
  
    // Smooth scroll to top when the button is clicked
    goTopBtn.addEventListener("click", () => {
      let scrollDuration = 500; // Duration in ms
      let start = window.scrollY;
      let startTime = null;
  
      const easeOutQuad = (time, startValue, change, duration) => {
        time /= duration;
        return -change * time * (time - 2) + startValue;
      };
  
      const scrollToTop = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeOutQuad(timeElapsed, start, -start, scrollDuration);
  
        window.scrollTo(0, run);
  
        if (timeElapsed < scrollDuration) {
          requestAnimationFrame(scrollToTop);
        } else {
          window.scrollTo(0, 0); // Ensure it's at the top
        }
      };
  
      requestAnimationFrame(scrollToTop);
    });
  });
  