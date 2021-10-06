let timeEl = document.querySelectorAll(".time__item"),
main = document.querySelector('.main'),
icons = document.querySelectorAll('.icon');

for (const icon of icons) {
    icon.addEventListener('click', ()=>{
        main.classList.toggle('dark')
    })
}

setInterval(() => {
  let times = new Date(),
    hour = times.getHours(),
    min = times.getMinutes(),
    sec = times.getSeconds();

    let d;
    d = hour < 12? "AM" : "PM";
    hour = hour > 12? hour - 12 : hour;
    hour = hour === 0 ? hour = 12 : hour;

    hour = hour < 10 ? '0' + hour: hour;
    min = min < 10 ? '0' + min: min;
    sec = sec < 10 ? '0' + sec: sec;

  document.querySelector(".num-hour").innerText = hour;
  document.querySelector(".num-min").innerText = min;
  document.querySelector(".num-sec").innerText = sec;
  document.querySelector(".AM-PM").innerText = d;
}, 1000);
