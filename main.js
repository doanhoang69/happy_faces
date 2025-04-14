const mobile_btn = document.querySelector(".mobile_btn");
const sidebar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".nav-link_mobile");
const close_btn = document.querySelector(".close_btn");
const currentMonth = document.querySelector(".currentMonth");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const form = document.querySelector(".form-register");
const fullNameInput = document.getElementById("fullname");
const phoneNumberInput = document.getElementById("phoneNumber");
const errorMessageFullname = document.querySelector(".error-message_fullname");
const errorMessagePhoneNumber = document.querySelector(
  ".error-message_phoneNumber"
);
const scrollToTopBtn = document.querySelector(".scroll-to-top");

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

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !mobile_btn.contains(e.target)) {
    sidebar.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar_scroll", window.scrollY > 0);

  if (window.scrollY > 600) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  if (!fullNameInput.value.trim()) {
    errorMessageFullname.textContent = "(Vui lòng nhập họ và tên)";
    fullNameInput.classList.add("error");
    fullNameInput.focus();
    hasError = true;
  }

  if (!phoneNumberInput.value.trim()) {
    errorMessagePhoneNumber.textContent = "(Vui lòng nhập số điện thoại)";
    phoneNumberInput.classList.add("error");
    if (!hasError) phoneNumberInput.focus();
    hasError = true;
  }

  if (hasError) {
    const formElement = document.getElementById("form");
    const isMobile = window.innerWidth < 576;
    const offset = isMobile ? 80 : 120;

    const formPosition =
      formElement.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: formPosition,
      behavior: "smooth",
    });
  }
});

fullNameInput.addEventListener("input", () => {
  fullNameInput.classList.remove("error");
  errorMessageFullname.textContent = "";
});

phoneNumberInput.addEventListener("input", () => {
  phoneNumberInput.classList.remove("error");
  errorMessagePhoneNumber.textContent = "";
});

document.querySelectorAll('a.call-btn[href="#form"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const isMobile = window.innerWidth < 576;
    const offset = isMobile ? 80 : 120;

    const formPosition =
      form.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: formPosition,
      behavior: "smooth",
    });
  });
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
