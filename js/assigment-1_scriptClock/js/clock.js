function showTime(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let dayOfWeek = now.getDay();

    switch(dayOfWeek){
        case 0:
            dayOfWeek = "Pazar"
            break;
          case 1:
            dayOfWeek = "Pazartesi"
            break;
          case 2:
            dayOfWeek = "Salı"
            break;
          case 3:
            dayOfWeek = "Çarşamba"
            break;
          case 4:
            dayOfWeek = "Perşembe"
            break;
          case 5:
            dayOfWeek = "Cuma"
            break;
          case 6:
            dayOfWeek = "Cumartesi"
            break;
          default:
            console.log("Invalid day");
        }

    const timeString = `${hours}:${minutes}:${seconds}  ${dayOfWeek}`;
    document.querySelector('#myClock').textContent=timeString;
}

let userName = prompt("İsmin nedir ?");

let bannerName = document.getElementById('myName');

bannerName.innerHTML=userName;

setInterval(showTime, 1000);
showTime();
