'use strict'

// Строки 

let strOne = 'Hello, World!';// Одинарные кавычки
let strTwo = "Hello, World!";  // Двойные кавычки
let strThree = `Hello, World!`; // Обратные кавычки

let someText = `Hello, World! 
Hello, World!
Hello, World!`; // Многострочная строка с помощью обратных кавычек
console.log(someText);

// Спецсимволы

/**
 * Внутри строк мжно исполтзовать ряд спецсимволов. Все  спец символы начинаюся с помощью обратного слеша, \ - символ кранирования 
 */

// перевод строки - \n

let textOne = 'Hello,\nWorld!';
console.log(textOne);

// Табуляция (отступ)  \t

let textTwo = 'Hello,\tWorld!';
console.log(textTwo);

// Обратный слэш \\ - нужен , если встроки уже есть обратный слэшь

// \' \" - Кавычки

let string = 'Hello, \'World\'';
console.log(string);

// Иконки , символы UTF-16 \uКОД, UTF-32  \u{КОД}

let someString = 'Hello, World! \u00A9 \u{1F60D}';
console.log(someString);

// Длина строки св-во length

let txt = 'Hello'; 
let firstSymbol = txt[0]; // H
let lastSymbol = txt[txt.length - 1];// o
console.log(txt.length); // 5

// Изменение регистра 

let text =  'Hello';
console.log(text.toLocaleLowerCase()); // hello
console.log(text.toLocaleUpperCase()); // HELLO

// Поиск подстроки

// Метод str.indexOf (substr, pos)

/**
 * Он ищет подстроку в строке , начиная с указанной позиции , и возвращает позицию это подстроки. При отсутствии подстроки возвращает -1
 */

let anytxt = "Hello!";

console.log(anytxt.indexOf('llo')); // 2 подстрока ничинается со втрого индекса
console.log(anytxt.indexOf('llo' ,3)); // -1

/**
 *  Метод includes(substr, pos) - взвращает буллевое выражение , есть ли подстрока
 * startWith(substr) - ишет подстроку в начале строки 
 * endWith(substr) - ищет подстроку в конце строки 
 *  */

// Метод slice(strat [, end]) - возвращает часть строки от start до end (не включая end)

let someTxt = "Hello!"
console.log(someTxt.slice(1,2));// e
console.log(someTxt.slice(-2,-1)); // o
console.log(someTxt.slice(1)); // ello!








