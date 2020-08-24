

function formatDateToday(){
var todayDate = new Date();
var day = todayDate.getDate();
var month = todayDate.getMonth() + 1;
var year = todayDate.getFullYear();

return day + "/" + month + "/" + year;
}
console.log(formatDateToday());

// OK