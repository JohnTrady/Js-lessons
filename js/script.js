'use strict'
// Операторы 


// Теримины "унарный", "бинарный", "операнд"

/**
 * Операнд - это то к чему применяется оператор (аргумент)
 */

// Примеры
let userAge = 30 - 6; // Числа 30 и 6 - это операнды
// либо 


/**
 * Бинарными называются операторы которые применяются к двум операндам.
 * В нашем примере вычитание (-)б=, эо бинарный операнд
 */


/**
 * Унарными считается оператор , который применен только к одному операнду
 */
let  userCash = -800;
let x;
x = 5 + 8; // Сложение 
x = 8 - 5; // Вычитание 
x = 2 * 8; // Умножение 
x = 16 / 8; //  Деление 
x = 11 % 2; // Остаток от деления 
x =  5 ** 2; // Возведение в степень

// Специальные возможности операторов 

// Сложение строк 
let resultOne = "John" + " Trady"; // "John Trady"

/*
  *  Если в сложении есть хотя бы один операнд строка , то все выражения будет строкой
*/

let resultTwo = "Terminator " + 2; // Terminator 2(string)
  
let resultThree = "2" + 2; // 22(string)

// Работа других операндов 
let exp1 = "30" - 5; // 25 (number);
let exp2 = 10 * "5"; // 50 (number)
let exp3 = "Terminator" * 2; // NaN


//  Унарный оператор сложения +

let users = '25';
let admins = '30';
console.log(users + admins) // "2530" (str)
console.log(+users + +admins) // 55 (number)
// более длиная запись
console.log(Number(users)+ Number(admins)) // 55 (number)

// Приоритет операторов 

// Разный приоритет 
let result1 = 2 - 1 * 5; // -3
// Скобки 
let  result2 = (2 - 1) * 5;// 5

// Операторы присваивания
let a = 1 + 2;
let b = 2;
let res = 8 - (a = b + 3); // 3
// Присваивание по цепочки
let res1; 
let res2; 
let res3; 
 res1 =  res2 = res3 = 1 + 2;
console.log(res1);
console.log(res2);
console.log(res3);

// S horcut
let num = 5;
num += 1 + 2 // (num = num + (1 + 2)) = 8
// Инкремент/декремент
let addUser = 2;

addUser++; // 3
addUser-- // 1
// postfix
let year = 2020;
let newYear = year++;
console.log(newYear) // 2020
// prefix
let age = 2020;
let newAge = ++age;
console.log(newAge) // 2021
// У икремента/дикремента приорете будет выше чем  у большинства других арифмитическиъ операций
let counter = 0;
let newCounter = 2 * ++counter;  // 2 * (0 + 1) = 2

// Операторы сравнения  
/**
 * Больше: a > b
 * Меньше: a < b
 * Больше или ровно: a >= b
 * Меньше или ровно: a <= b
 * Равно: a == b
 * Не равно: a != b
 * Строгое равно: a === b
 * Строгое не равно: a !== b
 * 
 */
// Операторы сравнения возращают логический тип данных true/false

// Сравнение строк 
//Алфавитный порядок
console.log('Z' > 'A'); // true
//кло-во символов 
console.log('Slider' > 'Slide'); // true 
console.log('A' > 'a'); // false (в JS маленькие буквы больше чем большие)

// сравнение разных типов данных 
 // Преобразование в число
console.log('58' > 10); // true
console.log('007' == 7); // true
// логическое значения
console.log(true == 1); // true
console.log(false == 0); // true

let itemA = 0;
let itemB = 1;
console.log(Boolean(itemA)); // false (0 = false)
console.log(Boolean(itemB)); // true (str не пуста)
console.log(Boolean(itemA == itemB)); // true ("0" преобразуется в число  0 = 0 )

// Строгое сравнение (сравниваются типы данных)
console.log(0 === false);  // false
console.log('007' === 7); // false
console.log( '58' !== 58); // true

// Сравнение null и undefined
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Логические операторы 

// оператор ИЛИ ||

 // первый true  это 1 
 console.log(1 || 0); // 1
 // первый true это true
 console.log(1 || 0); //  true
 // первый true это 58 
 console.log(null || 1); // 58
 // первый тру  это string 
 console.log(null || "string" || 0) // "string"
 // true нет совсем , вернет посленее значение 
 console.log(undefined || ''|| null || 0); // 0


 // Оператор И  &&

 //  0 - false
 console.log('string' && 0 && 0 && 3); // 0
 // null  - false
 console.log(1 && 2 && null && 3); // null
 // все true (вернет последний true)
 console.log('string' && 1 && 2 && 3); // 3

 // Оператор НЕ !
 console.log(!true); // false

// Оператор объединения с null ??
let name;
console.log(name ?? 'no name'); // name - undefined вернет второй аргумент "no name"
