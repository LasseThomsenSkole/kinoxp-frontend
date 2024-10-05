console.log("jeg er i movie-list")
const titel = document.querySelector(".titel");
console.log("titel");

//DATE currently american
const day = new Date();
const date = new Date();
const futureDay = new Date();
const futureDate = new Date();

//DAY ONE
export function getDayOne() {
    const weekDay = { weekday: 'long' };
    const dates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayString = day.toLocaleDateString(undefined, weekDay);
    const dateString = date.toLocaleDateString(undefined, dates);

    return {
        currentDay: dayString, currentDate:
        dateString
    };
}

const dayOne = getDayOne();
console.log("Day 1:", dayOne.currentDay);
console.log("Date:", dayOne.currentDate);

//DAY TWO
function getDayTwo() {

    futureDay.setDate(day.getDate() + 1)
    futureDate.setDate(date.getDate() + 1);


    const futureweekDay = { weekday: 'long' };
    const futuredates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const futuredayString = futureDay.toLocaleDateString(undefined, futureweekDay);
    const futuredateString = futureDate.toLocaleDateString(undefined, futuredates);

    return {
        dayTwoString: futuredayString, dateTwoString:
        futuredateString
    };
}

const dayTwo = getDayTwo();
console.log("Day 2:", dayTwo.dayTwoString);
console.log("Date:", dayTwo.dateTwoString);

//DAY THREE
function getDayThree() {

    futureDay.setDate(day.getDate() + 2)
    futureDate.setDate(date.getDate() + 2);


    const weekDay = { weekday: 'long' };
    const dates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayString = futureDay.toLocaleDateString(undefined, weekDay);
    const dateString = futureDate.toLocaleDateString(undefined, dates);

    return {
        dayThree: dayString, dateThree:
        dateString
    };
}

const dayThree = getDayThree();
console.log("Day 3:", dayThree.dayThree);
console.log("Date:", dayThree.dateThree);

//DAY FOUR
function getDayFour() {

    futureDay.setDate(day.getDate() + 3)
    futureDate.setDate(date.getDate() + 3);


    const weekDay = { weekday: 'long' };
    const dates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayString = futureDay.toLocaleDateString(undefined, weekDay);
    const dateString = futureDate.toLocaleDateString(undefined, dates);

    return {
        dayFour: dayString, dateFour:
        dateString
    };
}

const dayFour = getDayFour();
console.log("Day 4:", dayFour.dayFour);
console.log("Date:", dayFour.dateFour);

//DAY FIVE
function getDayFive() {

    futureDay.setDate(day.getDate() + 4)
    futureDate.setDate(date.getDate() + 4);


    const weekDay = { weekday: 'long' };
    const dates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayString = futureDay.toLocaleDateString(undefined, weekDay);
    const dateString = futureDate.toLocaleDateString(undefined, dates);

    return {
        dayFive: dayString, dateFive:
        dateString
    };
}

const dayFive = getDayFive();
console.log("Day 5:", dayFive.dayFive);
console.log("Date:", dayFive.dateFive);

//DAY SIX
function getDaySix() {

    futureDay.setDate(day.getDate() + 5)
    futureDate.setDate(date.getDate() + 5);


    const weekDay = { weekday: 'long' };
    const dates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayString = futureDay.toLocaleDateString(undefined, weekDay);
    const dateString = futureDate.toLocaleDateString(undefined, dates);

    return {
        daySix: dayString, dateSix:
        dateString
    };
}

const daySix = getDaySix();
console.log("Day 6:", daySix.daySix);
console.log("Date:", daySix.dateSix);

//DAY SEVEN
function getDaySeven() {

    futureDay.setDate(day.getDate() + 6)
    futureDate.setDate(date.getDate() + 6);


    const weekDay = { weekday: 'long' };
    const dates = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dayString = futureDay.toLocaleDateString(undefined, weekDay);
    const dateString = futureDate.toLocaleDateString(undefined, dates);

    return {
        daySeven: dayString, dateSeven:
        dateString
    };
}

const daySeven = getDaySeven();
console.log("Day 7:", daySeven.daySeven);
console.log("Date:", daySeven.dateSeven);