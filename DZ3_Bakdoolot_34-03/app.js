//ПЕРВОЕ ЗАДАНИЕ
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var numberOfTags = {};

for (var i = 0; i < tags.length; i++) {
    var thatTag = tags[i];
    numberOfTags[thatTag] = (numberOfTags[thatTag] || 0) + 1;
}
console.log("Результат:");
for (var thatTag in numberOfTags) {
    console.log(thatTag + ": " + numberOfTags[thatTag] + " раза встречается");
}

//ВТОРОЕ ЗАДАНИЕ
var arrayFirst = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var arraySecond = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

var elements = [];

for (var a = 0; a < arrayFirst.length; a++) {
    var element = arrayFirst[a];
    if (arraySecond.indexOf(element) !== -1 && elements.indexOf(element) === -1) {
        elements.push(element);
    }
}
console.log("Элементы, которые есть в обоих массивах:", elements);