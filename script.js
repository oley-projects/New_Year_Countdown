const days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds'),
      countdown = document.getElementById('countdown'),
      year = document.getElementById('year'),
      loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Add values to DOMs
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? `0${h}` : h;
    minutes.innerHTML = m < 10 ? `0${h}` : m;
    seconds.innerHTML = s < 10 ? `0${h}` : s;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);