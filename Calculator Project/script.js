const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.value;
    screen.value += value;
  });
});

equal.addEventListener("click", (e) => {
  if (screen.value === "") {
    screen.value = "";
  } else {
    let ans = eval(screen.value);
    screen.value = ans;
  }
});

clear.addEventListener("click", (e) => {
  screen.value = "";
});
