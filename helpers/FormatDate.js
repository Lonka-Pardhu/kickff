export default FormatDate = (dateString) => {
  const date = new Date(dateString);

  // Array to get month abbreviation
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Extract day, month, and time
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Convert 24-hour time to 12-hour format and add AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if needed

  // Return the formatted string
  return `${day} ${month} ${formattedHours}:${formattedMinutes} ${ampm}`;
};
