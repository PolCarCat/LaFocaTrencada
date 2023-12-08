const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

let days=hrs=min=sec=ms=0,startTimer, updateTimer;


SetDate();

function SetDate(){

  updateTimer=setInterval(()=>{
    updateDisplay();
  },1000);

}

function updateDisplay(){

  var date = new Date();
  var d = date.split(" ");

  var day = d[1];

  var time = d[4].split(":");
  var hour = time[0];
  var minute = time[1];
  var second = time[2];


  //Formated Display
  pdays= day;
  phrs= hour;
  pmin= minute;
  psec=second;

  //Output
  document.querySelector('.days').innerText=pdays;
  document.querySelector('.hrs').innerText=phrs;
  document.querySelector('.min').innerText=pmin;
  document.querySelector('.sec').innerText=psec;

}


