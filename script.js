let interval;
let outputHours = document.getElementById("hours");
let outputSeconds = document.getElementById("seconds");
let outputTens = document.getElementById("tens");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let seconds=0;
let tens=0;

startButton.addEventListener("click" , () => {
    clearInterval(interval); 
    interval = setInterval(startTimer, 10);})

stopButton.addEventListener("click" , () => {
    clearInterval(interval); })

resetButton.addEventListener("click" , () => {
    clearInterval(interval);
    tens=0
    seconds=0 
    outputTens.innerHTML="00";
    outputSeconds.innerHTML="00";
    outputHours.innerHTML="00";
    
})


function startTimer(){
    tens++
    if (tens<=9){
      outputTens.innerHTML='0'+tens
    }
    if (tens>9){
      outputTens.innerHTML=tens
    }


      if (seconds<=9){
      outputSeconds.innerHTML='0'+seconds
    }
    if (seconds>9){
      outputSeconds.innerHTML=seconds
    }
    if (tens>99){
      outputTens.innerHTML='00'
      tens=0
      seconds++
    }


    if (hours<=9){
        outputHours.innerHTML='0'+hours
      }
      if (seconds>9){
        outputHours.innerHTML=hours
      }
      if (seconds>99){
        outputSeconds.innerHTML='00'
        tens=0
        seconds=0
        hours++
      }
  }
