function openLetter() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");
  const sound = document.getElementById("paperSound");

  envelope.classList.add("open");
  sound.play();

  setTimeout(() => {
    envelope.style.display = "none";
    letter.classList.remove("hidden");
  }, 900);
}
