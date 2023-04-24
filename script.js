// Set the current date
const currentDate = new Date();
const formattedDate = `${currentDate.toDateString()} ${currentDate.getFullYear()}`;
// Select the element with the "current-date" ID
const currentDateElement = document.getElementById("current-date");
// Set the innerText of the currentDateElement to formattedDate
currentDateElement.innerText = formattedDate;


// Calculate the progress for the current year
const yearProgress = Math.floor(((currentDate.getMonth() * 30) + currentDate.getDate()) / 365 * 100);
document.getElementById("year-progress").style.width = `${yearProgress}%`;
document.getElementById("year-progress-text").innerText = `${yearProgress}%`;

// Calculate the progress for the current month
const monthProgress = Math.floor(currentDate.getDate() / new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() * 100);
document.getElementById("month-progress").style.width = `${monthProgress}%`;
document.getElementById("month-progress-text").innerText = `${monthProgress}%`;
