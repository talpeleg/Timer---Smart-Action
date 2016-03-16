function runTimer(duration, displayDays, displayHours, displayMinutes, displaySeconds) {
    var start = Date.now(),
        diff,
        days,
        hours,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // runTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
      	days = (diff / 60 / 60 / 24) | 0;
        hours = (diff / 60 / 60 % 24)  | 0;
      	minutes = (diff / 60 % 60) | 0;
        seconds = (diff % 60) | 0;

        if(hours <=0 && minutes <=0 && seconds <=0){
          displayDays.textContent="00";
          displayHours.textContent="00";
          displayMinutes.textContent="00";
          displaySeconds.textContent="00";
		  var dyWrapper = document.querySelector('.dy-wrapper-timer');
          if(dyWrapper && ${should hide on 0}){
			 dyWrapper.style.display ='none'; 
		 }
         clearInterval(timeInterval);
        }

      	days = days < 10 ? "0" + days : days;
      	hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayDays.textContent=days;
        displayHours.textContent=hours;
        displayMinutes.textContent=minutes;
        displaySeconds.textContent=seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    }
    // we don't want to wait a full second before the timer starts
    timer();
    var timeInterval = setInterval(timer, 1000);
}


function initTimer(){
  var expiryDate = new Date(${Exp Year UTC}, ${Exp Month UTC}, ${Exp Day UTC}, ${Exp Hour UTC}, 0, 0, 0);
  
  expiryDate = expiryDate.getTime();
  var now = Date.now();
  
  var Seconds_from_expiryDate_to_now = (expiryDate - now) / 1000;
  
  var timeZoneOffsetInSeconds = new Date();
  timeZoneOffsetInSeconds = timeZoneOffsetInSeconds.getTimezoneOffset()*60;
  
  var displayDays = document.querySelector('#dy-days');
  var displayHours = document.querySelector('#dy-hours');
  var displayMinutes = document.querySelector('#dy-minutes');
  var displaySeconds = document.querySelector('#dy-seconds');
  
  if(Seconds_from_expiryDate_to_now > 0){
    runTimer(Seconds_from_expiryDate_to_now - timeZoneOffsetInSeconds, displayDays, displayHours, displayMinutes, displaySeconds);
  } else {
    displayDays.textContent="00";
    displayHours.textContent="00";
    displayMinutes.textContent="00";
    displaySeconds.textContent="00";
   	var dyWrapper = document.querySelector('.dy-wrapper-timer');
    if(dyWrapper && ${should hide on 0}){
		dyWrapper.style.display ='none'; 
	}
 }
  
}


function initClicks(){
 var xButton = document.querySelector('.dy-x');
 var dyWrapper = document.querySelector('.dy-wrapper-timer');
  if(xButton && dyWrapper){
    xButton.addEventListener("click", function(){
     	dyWrapper.style.display ='none'; 
    });
  }
  
  var linkURL = "${Link URL}";
  if(linkURL && linkURL.length > 2){
    var dyBottomText = document.querySelector('.dy-bottom-text-timer');
    if(dyBottomText){
     	style = document.createElement("STYLE");
      	style.innerHTML = ".dy-bottom-text-timer:hover{cursor:pointer;}";
        dyBottomText.appendChild(style);
    	dyBottomText.addEventListener("click", function(){
     		location.href = linkURL;
    	});
    }
  }
}

initClicks();
initTimer();