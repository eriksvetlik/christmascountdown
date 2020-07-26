function time() {
  const christmasDay = new Date(new Date().getFullYear(), 11, 25);
  const presentDay = new Date();

  if (presentDay.getMonth() == 11 && presentDay.getDate() > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
  }

  var seconds = Math.floor((christmasDay - presentDay) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  var hours = hours - days * 24;
  var minutes = minutes - days * 24 * 60 - hours * 60;
  var seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setTimeout(() => {
  loader.remove();
}, 1000);

setInterval(time, 1000);
