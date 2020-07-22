function getTodayId() {
  var today = new Date();

  var year = "" + today.getFullYear();
  var month = "" + (today.getMonth() + 1);
  var day = "" + today.getDate();

  month = month.length === 2 ? month : "0" + month;
  day = day.length === 2 ? day : "0" + day;

  var todayId = year + "-" + month + "-" + day + "-game";
  return todayId;
}

function scrollToDate() {

  const todayId = getTodayId()
  var todayItem = document.getElementById(todayId);
  todayItem.scrollIntoView();
}

document.getElementById("today-anchor").setAttribute("href", "#" + getTodayId())