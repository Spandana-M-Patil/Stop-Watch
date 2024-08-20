let format = document.getElementById("displayTime");
let [hour, minute, second] = [0, 0, 0];
let timer = null;

let start = document.getElementById("start");
const image1 = "images/start.png";
const image2 = "images/pause.webp";

function count() {
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }
  if (minute == 60) {
    hour++;
    minute = 0;
  }
  const s = second < 10 ? `0${second}` : second;
  const m = minute < 10 ? `0${minute}` : minute;
  const h = hour < 10 ? `0${hour}` : hour;

  format.innerHTML = `${h}:${m}:${s}`;
}

function start_count() {
  if (timer != null) {
    clearInterval(timer);
  }
  if (start.src.includes(image1)) {
    start.src = image2;
    timer = setInterval(count, 1000);
  } else {
    start.src = image1;
    clearInterval(timer);
  }
}

function pause_count() {
  clearInterval(timer);
  if (start.src.includes(image2)) {
    start.src = image1;
  }
}

function restart_count() {
  clearInterval(timer);
  [hour, minute, second] = [0, 0, 0];
  format.innerHTML = "00:00:00";
  if (start.src.includes(image2)) {
    start.src = image1;
  }
}
