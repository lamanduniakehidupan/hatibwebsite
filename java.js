
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", () => {
      const music = document.getElementById("bgm");
      music.play().catch(err => console.log("Autoplay blocked:", err));
    }, { once: true });
  });