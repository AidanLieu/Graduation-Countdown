function clock(){
    const endDate = new Date("June 11 2025 00:00:00").getTime()
    const currentDate = new Date().getTime()
    const ms = endDate-currentDate
    var days = Math.floor(ms / (1000 * 60 * 60 * 24));
    var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((ms % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if(ms>0){
        setTimeout(clock,1000)
    }
}