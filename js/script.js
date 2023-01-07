'use strict';

//    ФУНКЦИИ

// Объявление функции  (Function Declaration)

function имя (параметры) {
  // тело (код) функции
}

// Запуск функции
 //  функция вывода сообщения 
//  function showMessage() {
//    console.log('Mesaage');
//  };
//  showMessage();

 // Параметры (аргументы)

//  function calcSum (munOne, numTwo) {
//     return numOne + numTwo;
//  }

//  calcSum(1, 2);

 // Функции колбэки

//  function calcSum (numOne, numTwo, more, less) {
//     let numSum = numOne + numTwo;

//     if (numSum > 3) {
//       more();

//     }     else {
//       less();
//     }

//     function showMoreMessage() {
//       console.log(('Больше чем  3'))
//     }

//     function showLessMessage() {
//       console.log(('Меньше чем  3'))
//     }
//  }

//   calcSum (1, 2, showMoreMessage, showLessMessage);

// Возрват результата 

//  function calcSum (munOne, numTwo) {
//     return numOne + numTwo;
//  }

// Рекурсия - когда функция вызывает саму себя 

 function calcSum(numOne, numTwo) {
   if ( numTwo === 1) {
     return numOne;
   } else {
    return numOne * calcSum(numOne, numTwo - 1);
   }
 }

 console.log(calcSum(2, 3));

// Стрелочная функция (arrow  function)

// let имяПеременой = (параметр, ...параметр) => выражение 

let getMessage = (text, name) => `${text} ${name}!`;

console.log(getMessage('Hello', 'John'));

// Планирование setTimeout и setInterval

/**
 * Чтобы реализоыать планирование сущесвует два метода:
 * 1. setTimeout - позволяет вызвать функцию один раз через определный отрезок времени 
 * 2. setInterval - позволяет вызывать фунцуии регулярно через определенный отрезок времени 
 */


//  setTimeout (фукнция, задержка ,параметр, ...параметр)
//  setInterval (фукнция, задержка ,параметр, ...параметр)

function showMessage  (text, name) {
  console.log(`${text}, ${name}!`);
  setTimeout(showMessage, 500, text, name);
}
setTimeout(showMessage, 500, 'Hello', 'John'); //такой подход даст более точную задержку 

// clearInterval, clearTimeout - прекращают работу setTimeout, setInterval