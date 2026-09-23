const countdown = document.querySelector('#countdown');
const screen = document.querySelector('#demo-payment');
let secondsLeft = 5 * 60;

function updateCountdown() {
  const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
  const seconds = (secondsLeft % 60).toString().padStart(2, '0');
  countdown.textContent = `${minutes}:${seconds}`;
}

const timer = window.setInterval(() => {
  secondsLeft -= 1;
  updateCountdown();

  if (secondsLeft <= 0) {
    window.clearInterval(timer);
    screen.classList.add('expired');
    screen.innerHTML = '<p class="demo-badge">DEMO EXPIRED</p><h1>Session closed</h1><p class="instruction">This demo payment screen has expired. Return to the form to start again.</p>';
    window.close();
  }
}, 1000);

updateCountdown();
