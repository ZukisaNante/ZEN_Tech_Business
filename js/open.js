// verifying opening hours
function dayNow() {
    var greeting;
    var day = new Date();
    var time = new Date().getHours();
    var n = day.toDateString();
    document.getElementById("status_two").innerHTML = n;
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("status_two").innerHTML = greeting;

    if (time > 12){
        greeting = 'Closed!';
    }
    document.getElementById("status_two").innerHTML = greeting;
}
