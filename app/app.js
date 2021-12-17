setInterval(showClock,1000);
function showClock(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    if(hour>12){
        hour-=12;
        am_pm="PM";
    }
    if(hour==0){
        hour = 12;
        am_pm = "AM";
    }
    hour = hour < 10 ? "0"+ hour : hour;
    min = min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+ sec : sec;
    let currentTime = hour + " : "+min+" : "+sec+" "+am_pm;
    document.getElementById('clock').innerText = currentTime;
    // Date and Day
    let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName=months[time.getMonth()];
    let date = time.getDate();
    let year = time.getFullYear();
    let week = time.getDay();
    let nameOfDay;
    switch(week){
        case 0: 
        nameOfDay = 'Sunday';
        break;
    case 1:
        nameOfDay = 'Monday';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        break;
    case 4:
        nameOfDay = 'Thursday';
        break;
    case 5:
        nameOfDay = 'Friday';
        break;
    case 6:
        nameOfDay = 'Saturday';
        break;
    }
    let monthDateDay = nameOfDay+" "+monthName+" "+date+" "+year;
    document.getElementById('date').innerText=monthDateDay;
}
showClock();