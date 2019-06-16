function dayNow() {
var greeting;
var day = new Date();
var now = day.toDateString();
var time = new Date().getHours();
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
if (time < 12 || now == true)  {
  greeting = "Good morning";
} else if (time < 20 || now == true) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
if (time > 20 || now == true){
    greeting = 'Closed!';}
if (time > 08 && day == "Sunday"){
  greeting = 'Closed!';
}
check();
function check(){
if (time>09 && time<20){
document.getElementById("status_four").innerHTML = greeting + " today is " + day + " and we are still open! ";}
else{
  document.getElementById("status_four").innerHTML = greeting + " today is " + day + " and we are closed! ";}
  if (time > 08 && day == "Sunday"){
    document.getElementById("status_four").innerHTML = greeting + " today is " + day + " and we are closed! ";
  }
}
}