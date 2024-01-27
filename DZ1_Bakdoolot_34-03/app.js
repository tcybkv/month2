var monthInput = prompt("Введите месяц рождения: ");
var dayInput = parseInt(prompt("Введите день рождения: "));

if (["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"].includes(monthInput.toLowerCase())) {
    if (dayInput > 0 && ((monthInput.toLowerCase() === "февраль" && dayInput <= 28) || (dayInput <= 31))) {
        var sign;

        if ((monthInput.toLowerCase() === "март" && dayInput >= 21 && dayInput <= 31) || (monthInput.toLowerCase() === "апрель" && dayInput >= 1 && dayInput <= 20)) {
            sign = "Овен";
        } else if ((monthInput.toLowerCase() === "апрель" && dayInput >= 21 && dayInput <= 30) || (monthInput.toLowerCase() === "май" && dayInput >= 1 && dayInput <= 20)) {
            sign = "Телец";
        } else if ((monthInput.toLowerCase() === "май" && dayInput >= 21 && dayInput <= 31) || (monthInput.toLowerCase() === "июнь" && dayInput >= 1 && dayInput <= 21)) {
            sign = "Близнецы";
        } else if ((monthInput.toLowerCase() === "июнь" && dayInput >= 22 && dayInput <= 30) || (monthInput.toLowerCase() === "июль" && dayInput >= 1 && dayInput <= 22)) {
            sign = "Рак";
        } else if ((monthInput.toLowerCase() === "июль" && dayInput >= 23 && dayInput <= 31) || (monthInput.toLowerCase() === "август" && dayInput >= 1 && dayInput <= 22)) {
            sign = "Лев";
        } else if ((monthInput.toLowerCase() === "август" && dayInput >= 23 && dayInput <= 31) || (monthInput.toLowerCase() === "сентябрь" && dayInput >= 1 && dayInput <= 22)) {
            sign = "Дева";
        } else if ((monthInput.toLowerCase() === "сентябрь" && dayInput >= 23 && dayInput <= 30) || (monthInput.toLowerCase() === "октябрь" && dayInput >= 1 && dayInput <= 22)) {
            sign = "Весы";
        } else if ((monthInput.toLowerCase() === "октябрь" && dayInput >= 23 && dayInput <= 31) || (monthInput.toLowerCase() === "ноябрь" && dayInput >= 1 && dayInput <= 21)) {
            sign = "Скорпион";
        } else if ((monthInput.toLowerCase() === "ноябрь" && dayInput >= 22 && dayInput <= 30) || (monthInput.toLowerCase() === "декабрь" && dayInput >= 1 && dayInput <= 21)) {
            sign = "Стрелец";
        } else if ((monthInput.toLowerCase() === "декабрь" && dayInput >= 22 && dayInput <= 31) || (monthInput.toLowerCase() === "январь" && dayInput >= 1 && dayInput <= 19)) {
            sign = "Козерог";
        } else if ((monthInput.toLowerCase() === "январь" && dayInput >= 20 && dayInput <= 31) || (monthInput.toLowerCase() === "февраль" && dayInput >= 1 && dayInput <= 18)) {
            sign = "Водолей";
        } else if ((monthInput.toLowerCase() === "февраль" && dayInput >= 19 && dayInput <= 28) || (monthInput.toLowerCase() === "март" && dayInput >= 1 && dayInput <= 20)) {
            sign = "Рыбы";
        } else {
            sign = "Некорректные данные";
        }

        alert(`Ваш знак зодиака: ${sign}`);
    } else {
        alert("Ошибка ввода: некорректный день.");
    }
} else {
    alert("Ошибка ввода: некорректный месяц.");
}