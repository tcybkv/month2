//ПЕРВОЕ ЗАДАНИЕ
var evenNumbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28];

for (var i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] % 2 === 0) {
        console.log(evenNumbers[i]);
    }
}

//ВТОРОЕ ЗАДАНИЕ
var cinema = {
    movies: [
        {
            title: "Фильм 1",
            genre: "Драма",
            premiereDate: "2024-01-15",
            duration: 120,
            mainActors: ["Актер1", "Актер2", "Актер3"],
            ticketPrice: 200,
            dimension: "2D"
        },
        {
            title: "Фильм 2",
            genre: "Комедия",
            premiereDate: "2024-01-20",
            duration: 90,
            mainActors: ["Актер4", "Актер5", "Актер6"],
            ticketPrice: 180,
            dimension: "3D"
        },
        {
            title: "Мультфильм",
            genre: "Фэнтези",
            premiereDate: "2024-02-10",
            duration: 75,
            mainCharacters: ["Персонаж4", "Персонаж5", "Персонаж6"],
            ticketPrice: 180,
            dimension: "3D"
        },
        {
            title: "Мультфильм 2",
            genre: "Анимация",
            premiereDate: "2024-02-05",
            duration: 90,
            mainActors: ["Герой 1", "Герой 2"],
            ticketPrice: 8,
            dimension: "3D",
        },
        //TODO И так далее можно добавлять
    ],
    //TODO Дополнительные свойства кинотеатра можно добавить здесь
}
console.log(cinema)

//ТРЕТЬЕ ЗАДАНИЕ
var number = prompt("Введите цифру от 1 до 15:");

switch (parseInt(number)) {
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    case 10:
        console.log("X");
        break;
    case 11:
        console.log("XI");
        break;
    case 12:
        console.log("XII");
        break;
    case 13:
        console.log("XIII");
        break;
    case 14:
        console.log("XIV");
        break;
    case 15:
        console.log("XV");
        break;
    default:
        console.log("Некорректная цифра");
        break;
}

//СПАСИБО ВАМ ЗА УРОКИ И ЗНАНИЯ!