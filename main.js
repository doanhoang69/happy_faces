const mobile_btn = document.querySelector(".mobile_btn");
const sidebar = document.querySelector(".sidebar");
const close_btn = document.querySelector(".close_btn");
const currentMonth = document.querySelector(".currentMonth");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const now = new Date();
currentMonth.textContent = now.getMonth() + 1;

// COUNTDOWN CLOCK
function updateCountdown() {
  const now = new Date();
  const currentDay = now.getDate();

  const year = now.getFullYear();
  const month = now.getMonth();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  const remainingDays = Math.max(0, lastDayOfMonth - currentDay);
  const hours = 23 - now.getHours();
  const minutes = 59 - now.getMinutes();
  const seconds = 59 - now.getSeconds();

  day.textContent = remainingDays.toString().padStart(2, "0");
  hour.textContent = hours.toString().padStart(2, "0");
  minute.textContent = minutes.toString().padStart(2, "0");
  second.textContent = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

mobile_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("show");
});

close_btn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !mobile_btn.contains(e.target)) {
    sidebar.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar_scroll", window.scrollY > 0);
});
