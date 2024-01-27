//TODO Первое задание
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

const numberOfTags = {};

for (let i = 0; i < tags.length; i++) {
    const thatTag = tags[i];
    numberOfTags[thatTag] = (numberOfTags[thatTag] || 0) + 1;
}
const tagCountsArray = Object.entries(numberOfTags);

tagCountsArray.sort((a, b) => b[1] - a[1]);

console.log("Результат:");
for (const [tag, count] of tagCountsArray) {
    console.log(tag + ": " + count + " шт.");
}


//TODO Второе задание
const surname = prompt('Введите фамилию: ');
const name = prompt('Введите имя: ');
const patronymic = prompt('Введите отчество: ');

function shortName(surname, name, patronymic) {
    const nameInitial = name.charAt(0).toUpperCase() + ".";
    const patronymicInitial = patronymic.charAt(0).toUpperCase() + ".";
    const shortForm = surname + " " + nameInitial + patronymicInitial;
    return shortForm;
}

const fullName = shortName(surname, name, patronymic);
console.log(fullName);


//TODO Третье задание
function filterBooks(...books) {
    const booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    const otherBooks = books.filter(book => !book.toLowerCase().includes('у'));

    console.log("Книги с буквой 'у':");
    console.log(booksWithU);
    console.log("Остальные книги:");
    console.log(otherBooks);
}
filterBooks("Путешествие", "Ужин", "Маленький принц", "Удивительное", "Белый порход", "Мастер и Маргарита", "Три товарища", "Утонченный мертвец");


//TODO Четвертое задание
const users = [
    { name: "Alex", birthDate: "1990-05-15" },
    { name: "Hermione", birthDate: "1990-04-15" },
    { name: "Harry", birthDate: "1989-07-23" },
    { name: "Ron", birthDate: "1988-08-24" },
    { name: "Emma", birthDate: "1983-09-25" }
];

users.forEach(function(user) {
    console.log(`Пользователь ${user.name} родился/родилась ${user.birthDate}`);
});