(function () {
  const placeholderImages = () => {
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
    document.querySelectorAll(".text-media picture[style*='--placeholder']").forEach((el) => {
      el.classList.add("text-media__image-placeholder");
    });
  };

  if (document.readyState !== "loading") {
    placeholderImages();
  } else {
    document.addEventListener("DOMContentLoaded", placeholderImages);
  }
})();
