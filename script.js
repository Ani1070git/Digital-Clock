let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dateElem = document.getElementById("date");
let toggleModeButton = document.getElementById("toggle-mode");

// Function to update time
function updateTime() {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElem.innerHTML = currentTime.toLocaleDateString("en-US", options);
}

// Dark/Light Mode Toggle
toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize clock
updateTime();
