var targetDate = new Date(2025, 10, 08, 9, 0, 0);

function updateCountdown() {
  var currentDate = new Date();
  var timeRemaining = targetDate - currentDate;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = days + ' días ' + hours + ' horas ' + minutes + ' minutos ' + seconds + 's';

  if (timeRemaining <= 100) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = '¡Tiempo terminado!';
  }
}

// Actualiza el contador cada segundo
var countdownInterval = setInterval(updateCountdown, 1000);
