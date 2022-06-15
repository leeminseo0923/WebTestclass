const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()%12).padStart(2, "0");
    const meridium = date.getHours()/12 >= 1 ? "PM" : "AM";
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerHTML=`${hours}:${minutes}:${seconds}<span> ${meridium}</span>`;
}

getClock();
setInterval(getClock, 1000);