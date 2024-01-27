//Первое задание
var arrayNumbers = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]

var arrayFunction =(number)=>{
    var counter = 0
    var sumNumbers = 0
    for(var i = 0; i < number.length; i++){
        if (number[i] > 0){
            sumNumbers += number[i]
            counter++
        }
    }
    var answer = sumNumbers/counter
    return answer
}
console.log('Средняя арифметическая положительных чисел: ' + arrayFunction(arrayNumbers).toFixed(1))

//Второе задание

var evenNumbers = (evenNum)=>{
    var sumNum = 0
    for(var i = 0; i < evenNum.length; i++){
        if(evenNum[i] % 2 === 0){
            sumNum += evenNum[i] * evenNum[i]
        }
    }
    return sumNum
}
var numbers = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(evenNumbers(numbers))

//Третье задание

var array = ['number', 'text','phone', 'apple', 'low', 'laptop']

var words =(word)=>{
    var wordFilter = word.filter(word =>{
        return word.includes('t') || word.includes('T') || word.includes('a') || word.includes('A')
    })
    return wordFilter
}
console.log(words(array))