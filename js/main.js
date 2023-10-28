setInterval(() => {
    const dateLive = new Date();
    const hourLive = dateLive.getHours();
    const minuteLive = dateLive.getMinutes();
    const secondeLive = dateLive.getSeconds();
    const weekDayLive = dateLive.getDay();
    let dayLive = dateLive.getDate();
    let monthLive = dateLive.getMonth() + 1;
    let yearLive = dateLive.getFullYear();

    let FullDayMonthYearLive = dayLive + "/" + monthLive + "/" + yearLive;
    // console.log(FullDayMonthYearLive);

    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let seconde = document.querySelector(".seconde");

    hour.textContent = String(hourLive).padStart(2, "0");
    minute.textContent = String(minuteLive).padStart(2, "0");
    seconde.textContent = String(secondeLive).padStart(2, "0");

    switch (weekDayLive) {
        case 1:
            day = ("Monday")
            break;
        case 2:
            day = ("Tuesday")
            break;
        case 3:
            day = ("Wednesday")
            break;
        case 4:
            day = ("Thursday")
            break;
        case 5:
            day = ("Friday");
            break;
        case 6:
            day = ("Saturday ")
            break;
        case 7:
            day = ("Sunday ")
            break;
    }

    let weekDay = document.querySelector(".weeks-day");
    weekDay.textContent = day;


    let FullDayMonthYear = document.querySelector(".date-month-year");
    FullDayMonthYear.textContent = FullDayMonthYearLive

}, 1000);

// POINTER TOGGLE**************
const onePoints = document.querySelector(".one-points");

function onetogglePoints() {
    onePoints.classList.toggle("white");
    onePoints.classList.toggle("black")
}
setInterval(onetogglePoints, 1000);

const twoPoints = document.querySelector(".two-points");

function twotogglePoints() {
    twoPoints.classList.toggle("white");
    twoPoints.classList.toggle("black")
}
setInterval(twotogglePoints, 1000);