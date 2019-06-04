//main
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//onload check date
function checkDate(){
  document.getElementById('date').innerHTML = Date();
}
//check to see if open/close
function status() {
  var da = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  //check if its sunday or saturday
  if (day == 0 || day == 6) {
    document.getElementById('open').innerHTML = "Currently closed on Saturday - Sunday.";
  } else if (hour >= 9 && hour <= 23) {
    document.getElementById('open').innerHTML = "Currently opened on Monday - Friday.";
  } else {
    console.log('Today is not a weekend and hour is between 12 - 23')
  }
}
status();
