console.log("this Site is updating")
let visible = true;
function clock(){
    const endDate = new Date("June 11 2025 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const ms = endDate - currentDate;
    var days = Math.floor(ms / (1000 * 60 * 60 * 24));
    var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((ms % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if(ms>0){
        setTimeout(clock,1000);
    } else {
        document.getElementsByTagName("h1")[0].innerHTML = "Congratulations!";
        complete();
    }
}

function complete() {
    const color = visible ? "transparent" : "#D7C49EFF";
    document.getElementById("days").style.color = color;
    document.getElementById("hours").style.color = color;
    document.getElementById("minutes").style.color = color;
    document.getElementById("seconds").style.color = color;
    visible = !visible;
    visible ? setTimeout(complete, 500) : setTimeout(complete, 800);
    
}
