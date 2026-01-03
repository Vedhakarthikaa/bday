function goToWish() {
  window.location.href = "wish.html";
}
document.addEventListener("click", () => {
  const music = document.getElementById("birthdayMusic");
  if (music && music.paused) {
    music.play();
  }
}, { once: true });


/* ---------------- TIME TEXT (INDEX PAGE) ---------------- */

function updateTime() {
  const timeEl = document.getElementById("timeText");
  if (!timeEl) return; // ⛔ not on this page

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  timeEl.innerText = `Right now, it’s ${hours}:${minutes}, and I hope you’re smiling.`;
}

updateTime();
setInterval(updateTime, 60000);

/* ---------------- CAKE COUNTDOWN ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("count");
  const cutBtn = document.getElementById("cutBtn");
  const flames = document.querySelectorAll(".flame");

  // ⛔ Exit if not cake page
  if (!countEl || !cutBtn || flames.length === 0) return;

  let count = 3;
  countEl.textContent = count;

  const timer = setInterval(() => {
    count--;

    if (count > 0) {
      countEl.textContent = count;
    } else {
      clearInterval(timer);

      // Blow out candles
      flames.forEach(flame => flame.classList.add("off"));

      document.getElementById("instruction").innerText =
        "Yay! Candles blown 🎉";

      cutBtn.classList.remove("hidden");
    }
  }, 1000);
});

/* ---------------- CUT CAKE ---------------- */

function cutCake() {
  const slice = document.getElementById("slice");
  slice.classList.add("show"); // 🔥 enables animation

 setTimeout(() => {
    window.location.href = "bye.html";
  }, 2000);
}

