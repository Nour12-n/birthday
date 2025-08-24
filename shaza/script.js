let count = 3;
const countdown = document.getElementById('countdown');
const flames = document.querySelectorAll('.flame');

function updateCountdown() {
  countdown.textContent = count > 0 ? count : "Candles Off!";
}

updateCountdown();

const timer = setInterval(() => {
  count--;
  updateCountdown();
  if (count === 0) {
    flames.forEach(f => f.classList.add('off'));
    clearInterval(timer);
  }
}, 1000);