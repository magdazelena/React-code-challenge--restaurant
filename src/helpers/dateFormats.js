const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const getMonthName = (month) => {
  return months[month];
}
export const getWeekday = (day) => {
  return days[day];
}
export const getFullMinutes = (minutes) => {
  if (minutes < 10) {
    return '0' + minutes;
  } else {
    return minutes;
  }
}
export const getMaxVisitHour = (hour, minutes) => {
  if (hour + 2 >= 23) {
    return "23:00"
  } else {
    return (hour + 2) + ":" + getFullMinutes(minutes);
  }
}