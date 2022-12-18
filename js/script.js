'use strict'
        // Значения (values)
// Литералы 

25             // литерал целого числа 
25.5           // литерал дробного числа 
'JavaScript'   // литерал строки 
// []             // литерал массива 
{}             // литерал объекта 

// константы переменные 

const x = 5;  // константа 
let y = 'JS'; // переменная 

// Операторы 
//  + - = / и т.д

// Выражения 

let num = 5; // выражение присвоения 
'Learn' + 'JS'; // выражение без присвоения 

// переменные 

// верное объявление переменной 
let age;
let info123;
let $size;
let _color;

// неверное объявление переменной 
// let 123info;
// let my-age;
// let for; // зарезирвированное значение 

//  регистр lower CameCase
let lowerCamelCase;
let myAge;

// Константы 
const myName = 'John'; // нельзя изменить 

// имена констант с заранее известными значениями 
const BLOCK_SIZE = 25;
const COLOR_RED = '#F00';

// имена констант со значениями присвоенными в процессе выполнения программы
const sumSizes = 25 + 30;

// переменная var

if(true) {
        var sizeBar = 50;
}

console.log(sizeBar);  // перемення вар видна в области видимости условий циклов и т.д но не функций 

// динамическая типизация 
/*
 JS - является динамически типизированныс языком.
 То есть тип данных переменной меняется динамически в момент присвения либо смены ее значения , а не в момент объявления 

 */

 let userName; // Объявление переменной 
 console.log(typeof userName);
 userName = 'Freelance';
 console.log(typeof userName);
 userName = 58;
 console.log(typeof userName);

 // типы данных  Undefined ,Null, Boolean, Number, BigInt, String, Symbol

// undefined
 let user;  // объявляем переменную 
 console.log(typeof user); // получаем тип данных 
 console.log(user); // undefined

// Null - тип данных обозначающий ничего (пустое место)
let nothing = null;
console.log(nothing); // null

// Boolean (true, false)

let willYoyMarryMe = true;

let trueOrFalse = 58 < 2;
console.log(trueOrFalse); // false

// Number - целые чилса б числа с плавающей запятой б infinity , -infinity , NuN

// BigInt -  тип данных для работы с числами произвольной длины (больше чем 9007199254740991б -9007199254740991б)
const bigInteger = 1234567890900719925474n;
console.log(typeof bigInteger); // bigint

// string
let srt1 = "String"
console.log(typeof str1); 

let str2 = 'String';

let strId = 3;
let strInfo = `String N${strId}`;
console.log(typeof strInfo); // String N3

// Объект 

 const userInfo = {
   name: 'John',
   age: 29
 }

 console.log(userInfo); 
 console.log(typeof userInfo);


 // Symbol

 let id = Symbol('id');
 console.log(typeof id);

 // преобразование типов
 // строковые преобразования
 let a = 58;
 console.log(typeof a); // Number
 a = String(a);
 console.log(typeof a); // String


let userTrue = true;
console.log(typeof userTrue); // Boolean

userTrue = String(userTrue); // String

// численые преобразования
let userAge = '35'; 
console.log(typeof userAge); // String
userAge = Number(userAge); 
console.log(typeof userAge); // Number

let exp = '10' / '2'; // 5 число 
console.log(exp);
 exp = 10 * '5'; // 50 число
 console.log(exp);
 exp = '5' + 5;
 console.log(exp); //  55 строка

 // логическое преобразование
 let n = 0;
 n = Boolean(n);
 console.log(typeof n); // boolean
 
 
 

















