//slider - animates over 100vh height
const element = document.querySelector('.animate-slider');
element.classList.add('animate__animated', 'animate__slideOutUp');

element.addEventListener('animationend', () => {
    var elem = document.getElementById("intro-slider");
    elem.remove();
});

// Er word een functie aangemaakt waarbij er een variable X word gedeclareerd. Hierbij word er verwezen naar het ID in de HTML my top nav en word een een if statement aangemaakt die aangeeft met verschillende operators: "Als x gelijk aan is topnav dan is X resonsive. Anders wordt X topnav."

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//klok

var today = new Date();

function klok() {
  var today = new Date();
  var seconds = today.getSeconds();
  var hour = today.getHours();

  if (hour >= 9 && hour <= 21) {
    document.getElementById('main').classList.remove('nacht');
    document.getElementById('main').classList.add('dag');
  } else {
    document.getElementById('main').classList.remove('dag');
    document.getElementById('main').classList.add('nacht');
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.getElementById('clock').innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + seconds;
}

klok();
setInterval(klok, 1000);