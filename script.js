function goToWish() {
  window.location.href = "wish.html";
}
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes}`;
  document.getElementById("timeText").innerText =
    `Right now, it’s ${timeString}, and I hope you’re smiling.`;
}

updateTime();
setInterval(updateTime, 60000);

let count = 3;
const countSpan = document.getElementById("count");
const flames = document.querySelectorAll(".flame");
const cutBtn = document.getElementById("cutBtn");
const instruction = document.getElementById("instruction");
const slice = document.getElementById("slice");

// Countdown timer
const timer = setInterval(() => {
  count--;
  countSpan.textContent = count;

  if (count === 0) {
    clearInterval(timer);

    // Blow out candles
    flames.forEach(flame => flame.classList.add("off"));

    instruction.textContent = "Yay! Candles blown 🎉";
    
    // Show cut button after small delay
    setTimeout(() => {
      cutBtn.classList.remove("hidden");
    }, 1000);
  }
}, 1000);

// Cut cake function
function cutCake() {
  slice.classList.add("show");
  cutBtn.textContent = "Enjoy the Cake 💖";
}
