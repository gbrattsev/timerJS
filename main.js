'use strict';

window.addEventListener('DOMContentLoaded', function() {

  let deadline = '2020-02-29';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / 1000 / 60 / 60),
        days = Math.floor(t / 1000 / 60 / 60 / 24),
        dayTitle = document.querySelector('.day-title');

    switch (days) {
      case 1 || 21 || 31:
        dayTitle.textContent = 'день';
        break;
      case 2 || 3 || 4 || 22 || 23 || 24 || 32 || 33 || 34:
        dayTitle.textContent = 'дня';
        break;
      default:
        dayTitle.textContent = 'дней';
    }
    
    if (t <= 0) {
      return {
        'total' : 0,
        'days' : 0,
        'hours' : 0,
        'minutes' : 0,
        'seconds' : 0,
      }
    } else {
      return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds,
      }
    }
  }

  function addZero(num) {
    if (num <= 9) {
      return '0' + num;
    } else return num;
  }

  function setClock(id, endtime) {
    let timer = document.querySelector(id),
        days = document.querySelector('.days'),        
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    

    function updateClock() {
      let t = getTimeRemaining(endtime);

      days.textContent = t.days;
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }


  setClock('#timer', deadline);

});