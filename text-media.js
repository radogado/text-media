(function () {
  const placeholderImages = () => {
    // Handle main images
    document.querySelectorAll(".text-media picture > img").forEach((el) => {
      if (el && el.parentNode && el.parentNode.dataset) {
        if (el.complete) {
          el.parentNode.dataset.loaded = true;
        } else {
          el.addEventListener("load", (e) => {
            if (e.target && e.target.parentNode && e.target.parentNode.dataset) {
              e.target.parentNode.dataset.loaded = true;
            }
          });
        }
      }
    });

    // Handle placeholders for both main images and source elements
    document.querySelectorAll(".text-media picture[style*='--placeholder']").forEach((el) => {
      el.classList.add("text-media__image-placeholder");
      
      // Check if there are source elements
      const sources = el.querySelectorAll('source');
      if (sources.length > 0) {
        // Add placeholder class to each source element
        sources.forEach(source => {
          const placeholderStyle = source.style.getPropertyValue('--placeholder');
          if (placeholderStyle) {
            // Only apply the placeholder if the media query matches
            const mediaQuery = source.getAttribute('media');
            if (mediaQuery && window.matchMedia(mediaQuery).matches) {
              el.style.setProperty('--placeholder', placeholderStyle);
            }
          }
        });
      }
    });

  };

  if (document.readyState !== "loading") {
    placeholderImages();
  } else {
    document.addEventListener("DOMContentLoaded", placeholderImages);
  }
})();
