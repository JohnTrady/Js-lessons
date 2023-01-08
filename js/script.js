'use strict'


// ЧИСЛА

let someNum = 458;
console.log(someNum);

let someNums = 4.58;
console.log(someNums);

let someBigNum = 1e6; // 1 * 1000000
console.log(someBigNum);

let someLittleNum = 1e-6; // 1 / 1000000
console.log(someLittleNum);

// Шестнадцатеричные, лвоичные и восьмиричные числа

// Шестнадцатеричные числа широко распространяются в JS для представления  цветов , кодировки символов  и многое другое 
console.log(0xFF); // 0xFF = 255

// двоичные чила 
console.log(0b11111111); // 255

// восмеричные числа 
console.log(0o377); // 255 


// Метод toString(base) возвращает строковые значение числа в той или иной форме (системы исчесления - base) от 2 до 36 (по умолчанию 10)
let num = 255;
console.log(num.toString(2));// 11111111
console.log(num.toString(8)); // 377
console.log(num.toString(16));// ff

// Округление 

// В JS есть метод Math , которые содержит несколько функций для округленя 

// Math.floor - округление в меньшую сторону 

let numOne =  Math.floor(5.8);
let numTwo  = Math.floor(2.2);
let numThree= Math.floor(-2.2);
 
console.log(numOne); // 5
console.log(numTwo); // 2
console.log(numThree); // -3

// Math.ceil - округление в большую сторону

numOne  =  Math.ceil(5.8);  
numTwo =  Math.ceil(2.2);   
numThree =  Math.ceil(-2.2);

console.log(numOne);    // 6
console.log(numTwo); // 3
console.log(numThree); // -2

// Math.round - округление до близжзайшего целого 
numOne  =  Math.round(5.8);
numTwo =  Math.round(2.2);
numThree =  Math.round(-2.2);

console.log(numOne);    // 6
console.log(numTwo); // 2
console.log(numThree); // -2

// Округление с пмощбью умножения и деления 

numOne = Math.round(5.845 * 10) /10 ;
console.log(numOne);  // окгругляем до десятых  5.845 * 10 => 58.45 => 58 / 10 => 5.8

// Метод toFixed(n) - округляет целое число  до n знаков после запятой (возвращает строку)
numOne = 5.845;
console.log(numOne.toFixed(1)); // '5.8'- str
console.log(Number(numOne.toFixed(1))); // 5.8 - num

// Проблема неточных вычеслений

numOne = Math.round(1.005 * 100) / 100 ;
console.log(numOne); // ожидаем  1.01 получаем 1
numTwo = 12.35;
console.log(numTwo.toFixed(1));  // ожидаем  12.4 получаем 12.3

let problem = 0.1 + 0.2 === 0.3 // false (0.300000000004)

// Решение с помощью Number.EPSILON
let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour); // 1.01

// Проверка isFinite isNan

// isNan
console.log(isNaN(25 + 'Привет')) // true 

// isFinite - преобразует аргумент в число и возращает булевое выражение , я вляется это число обычным ( не NaN , не Infinity)

console.log(isFinite('Привет')); // NaN - false
console.log(isFinite(25)); // 25 - true
console.log(isFinite(10 / 0 )); // Infinity - false

// parseInt - возвращает целое число  , parseFloat - возвращает целое число - возвращает число  с плавающей точкой 

let valueOne = parseInt('150.58px');
console.log(valueOne); // 150
console.log( typeof valueOne); // number

let valueTwo = parseFloat('150.58px');
console.log(valueTwo); // 150.58
console.log( typeof valueTwo); // number

// с помощью  prseInt мы можем читать строки с другими системами исчесления и переводить в целое число 

console.log(parseInt('0XFF', 16)); // 255 
console.log(parseInt('1111', 2)); //  15

// Math.random - взвращает псевдослуяайное число от 0 до 1( не включая 1)

console.log(Math.random())

// Math.max(a ,b , c...) / Math.min(a ,b , c...) - возвращает наибольше / наименьше число из перечисленных аргументов 

console.log(Math.max(5, 85, -49)); // 85
console.log(Math.min(5, 85, -49)); // 49

// Math.abs - возвраш=щает абсолютное значение числа (модуль)

 let value = -5;
 console.log(Math.abs(value)); // 5

 // Math.pow(n , power) - возвращает число n, возведеное в степень power

 console.log(Math.pow(2, 3)); // 8