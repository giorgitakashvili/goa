// 1. Write a JavaScript function to display the current date in the format "MM/DD/YYYY".
function getCurrentDate() {
    let date = new Date();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
}
console.log("Current Date:", getCurrentDate());

// 2. Create a script that shows the current time in the format "HH:MM".
function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
console.log("Current Time:", getCurrentTime());

// 3. Write a function that takes a number (1-7) as input and returns the day of the week.
function getDayOfWeek(num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1];
}
console.log("Day of the Week for 3:", getDayOfWeek(3));

// 4. Develop a function that calculates the number of days between two given dates.
function daysBetweenDates(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let timeDiff = Math.abs(d2 - d1);
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}
console.log("Days Between 01/01/2020 and 01/10/2020:", daysBetweenDates("01/01/2020", "01/10/2020"));

// 5. Create a function to format a given date object into a custom format, like "YYYY-MM-DD".
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
console.log("Formatted Date:", formatDate(new Date()));

// 6. Write a script that compares two dates and determines which one is earlier or if they are the same.
function compareDates(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    if (d1 < d2) {
        return `${date1} is earlier than ${date2}`;
    } else if (d1 > d2) {
        return `${date1} is later than ${date2}`;
    } else {
        return `${date1} and ${date2} are the same`;
    }
}
console.log(compareDates("01/01/2020", "01/10/2020"));

// 7. Write a function that takes a month (numeric format) and a year as input and returns the number of days in that month.
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log("Days in February 2020:", getDaysInMonth(2, 2020));

// 8. Create a function that displays how long ago a given date occurred in a human-readable format.
function timeAgo(date) {
    const now = new Date();
    const givenDate = new Date(date);
    const seconds = Math.floor((now - givenDate) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;

    return `${Math.floor(seconds)} seconds ago`;
}
console.log("Time ago for 01/01/2020:", timeAgo("01/01/2020"));

// 9. Develop a function that takes a birthdate as input and calculates the number of days until the next birthday.
function daysUntilNextBirthday(birthdate) {
    let now = new Date();
    let nextBirthday = new Date(now.getFullYear(), new Date(birthdate).getMonth(), new Date(birthdate).getDate());

    if (now > nextBirthday) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }

    let timeDiff = nextBirthday - now;
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}
console.log("Days until next birthday for 03/25/1990:", daysUntilNextBirthday("03/25/1990"));

// 10. Develop a function that takes a birthdate as input and calculates the age in years.
function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    let monthDifference = now.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
console.log("Age for birthdate 03/25/1990:", calculateAge("03/25/1990"));
