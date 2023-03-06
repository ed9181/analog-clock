function setTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");

  const hourDeg = (hour * 30) + (minute / 2);
  const minuteDeg = (minute * 6);
  const secondDeg = (second * 6);

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(setTime, 1000);

// // Function to get the current time in a specific time zone
// function getTimeInTimezone(timezoneOffset) {
//   const now = new Date();
//   const utcOffset = now.getTimezoneOffset() * 60000;
//   const localTime = now.getTime();
//   const timezoneTime = localTime + utcOffset + timezoneOffset;
//   return new Date(timezoneTime);
// }