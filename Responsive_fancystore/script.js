function openlightbox(img) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay_img").src=img;
  }
  function removelightbox() {
    document.getElementById("overlay").style.display = "none";
  }