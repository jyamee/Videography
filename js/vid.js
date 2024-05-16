document.getElementById("showForm").addEventListener("click", function () {
  document.getElementById("contactForm").style.display = "block";
});

document.getElementById("toggleAudio").addEventListener("click", function () {
  const video = document.getElementById("bgVideo");
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});
