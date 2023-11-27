document.addEventListener("DOMContentLoaded", function() {
    // Force a reflow by getting the masonry-item elements' offsetHeight
    document.querySelectorAll('.masonry-item').forEach(function(item) {
      item.offsetHeight;
    });
  });
