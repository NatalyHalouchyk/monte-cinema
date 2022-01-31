const btn = document.querySelectorAll("button");
const email = document.querySelector("input");
const form = document.querySelector("#booking-form");
const card = document.querySelector(".booking-card");
const msg = document.querySelector(".success-message");
const warning = document.querySelector(".warning");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].classList.add("pressed");

    setTimeout(() => {
      btn[i].classList.remove("pressed");
    }, 200)
  })
}

form.addEventListener("submit", (e) => {

  e.preventDefault();

  checkEmail();

  if (checkEmail()) {
    card.classList.add("hidden");
    msg.classList.add("visible");
  } else {
    warning.classList.add("visible");
    email.classList.add("red-outline");
  }

});

function checkEmail() {
  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailTest.test(email.value) || email.value.trim() === "") {
    return false;
  } else return true;

}
