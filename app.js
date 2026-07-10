// Gallery image popup functionality
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  gallery.addEventListener("click", function (e) {
    const img = e.target.closest("img");
    if (!img) return;

    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = 9999;

    // Create enlarged image
    const enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt || "";
    enlargedImg.style.maxWidth = "90vw";
    enlargedImg.style.maxHeight = "90vh";
    enlargedImg.style.border = "3px solid #e6e6e6";
    enlargedImg.style.boxShadow = "0 0 40px #000";

    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);

    // Close popup when clicking outside the image
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        overlay.remove();
      }
    });
  });
});
