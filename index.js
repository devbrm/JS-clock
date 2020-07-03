


function updateTime() {
  let secHand = document.querySelector(".sec");
  let minHand = document.querySelector(".min");
  let hourHand = document.querySelector(".hour");
  
  setInterval( () => {
    
  let now = new Date();
  let sec = now.getSeconds();
  let secDeg = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  let min = now.getMinutes();
  let minDeg = ((min / 60) * 360) + ((sec/60)*6) + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  let hour = now.getHours();
  let hourDeg = ((hour / 12) * 360) + ((min/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  }, 1000 );

}

updateTime();