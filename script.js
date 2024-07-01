const currentTimeUTC = document.getElementById('currentTimeUTC');
const currentDay = document.getElementById('currentDay');

function updateTime() {
  const now = new Date();
  currentTimeUTC.textContent = now.toLocaleString('en-US', { timeZone: 'UTC' });
  currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}

updateTime();
setInterval(updateTime, 1000);
