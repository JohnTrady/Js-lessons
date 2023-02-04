'use strict'


// ОБЪЕКТЫ

// let userInfo = new Object(); // синтаксис 'конструткор объекта'
// let userInfo ={}; //  синтаксис 'литерал объекта'

// Свойсвта объекта (Ключ + значение)
let someInfo  = "likes Objects";
let user = {
/*ключ*/name: /*значение*/'Jonh',
        age:30,
        'likes JS': true, // ключ из двух и более значений берется в "";
        [someInfo]: true, // объявление ключа через переменную 
};

 // Тип данных Symbol

 let id = Symbol("id");
 let userInf = {
  name:'Jonh',
  age:30,
  [id]: "Некое значение", 
 }
 // Основное применение символов 
 /**
  * 1 Скрытие свойсвта объектов (символьные св-ва не появятся в for.. in)
  * 2 Использование системных символов (Symbol.iterator, toPrimitive и т.д)
  */

 // Свойства из переменной 

 function makeUserInfo (name, age) {
   return {
      name: name,
      age: age,
   };
 };

 let someUser = makeUserInfo("John", 30); // { name: 'John', age: 30 }
 
 // Удаление свойства  delete.object.property

  // Копирование объектов 
  /**
   * При копировании объектв в другую переменную сфм объект не дублируется ,  а копируется только ссылка на него (при измение с-ва в копии поменяется и в оригинале)
   */

  // Копирование объекта (Oblect.assign)
  //  Object.assign(куда(объект), что(св-во #1),что(св-во #2),что(св-во #3),что(св-во #4))

let someObject = {
     name: "John",
      age: 30,
};

let copy = Object.assign({},someObject);

someObject.age = 18;

console.log(someObject); // { name: 'John', age: 30 } // св-вo оригинала не поменялась 
console.log(copy); // { name: 'John', age: 30 }


// Прлверка существования свойства 
 /**
  * Опциональная цепочка (?) (user?.adress?.street)
  */

//  Оператор in

let object = {
  name: "John",
  age: 30,
}
if("name" in object) {
    console.log("true"); // true
};

// Цикл for in 

 let anyObject = {
  name: "John",
  age: 30,
  [id]: "Некое значение",
  'likes JS': true,
 };

 for  (let key in anyObject) {
    console.log(key); // ключ св-ва
    console.log(anyObject[key]); // названия св-ва
 }

  // Функция конструктор - функция которая позволяет сохдовать множество объектов 
  /**
   * 1 Имя функции должно начинаться с большой буквы 
   * 2 Функция - конструктор  должна вызываться при помощи оператора new
   */

  function UserInfo(name) {
     // tihs ={}; Создается пустой объект 
     this.name = name;
     this.age = 30;

     // return this
  };

  console.log(new UserInfo('John'));
  console.log(new UserInfo('Maria'));

 





