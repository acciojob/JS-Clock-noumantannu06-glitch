//your code here
// script.js - JavaScript code to make the clock hands rotate like a real clock
// Assumes HTML has elements with IDs: 'hour', 'minute', 'second' (the hand divs)
// Hands should have position: absolute and transform-origin set in CSS (e.g., bottom center)

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Second hand: 6 degrees per second (360/60)
  const secondDeg = 6 * seconds;
  document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`[page:2];

  // Minute hand: 6 degrees per minute + 0.1 degrees per second (for smooth motion)
  const minuteDeg = 6 * minutes + 0.1 * seconds;
  document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`[page:2];

  // Hour hand: 30 degrees per hour (360/12) + 0.5 degrees per minute + finer second adjustment
  const hourDeg = 30 * (hours % 12) + 0.5 * minutes + (0.5 / 60) * seconds;
  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`[page:2];
}

// Update immediately and then every 1000ms (1 second)
updateClock();
setInterval(updateClock, 1000);