'use strict'


// DOM

// Window

const windowWidth = window.innerWidth; // получаем ширину всего окна браузера

// BOM - brawser object model

// Браузер

console.log(navigator.userAgent); // информация о браузере
console.log(navigator.platform); // информация об операционной системе
console.log(location.href); // получение текущего url
// location.href = "https://www.youtube.com/"; // меняем url

// Alert 
  //  alert("Hello!");

// Confirm
// const confirmResult = confirm("Do you like JS?");
// console.log(confirmResult);

// Prompt 
// const promtResult = prompt("Who are you?");
// console.log(promtResult);

// Навигация по документу 

/**
 *  Самые верние элементы дерева доступны как свойства объекта document
 */

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

const firstChildNode = bodyElement.firstChild; // получение первого элемента документа
console.log(firstChildNode);
const lastChildNode = bodyElement.lastChild; // получение последнего элемента документа 
console.log(lastChildNode);
const childNodes  = bodyElement.childNodes; //получаем коллекцию всех детей документа включая текстовые узлы
console.log(childNodes);
console.log(bodyElement.hasChildNodes()); // проверка наличия дочерних элементов 

// cchildNodes - не массив , а коллекция - особо перебираемый объект - псевдо массив 

/** Отличия коллекций от массивов 
 *  1. Для перебора коллекции мы можем использовать цикл for .. of 
 *  2. Методы массовов не будут работать Ю потому что это не массив
 * */ 

//   Перебор коллекций 

 for (let node of childNodes) {
  console.log(node);// покужет все узлы из коллекции
 }
  // Получение соседних и родительских узлов 
 const prevSiblingNode = bodyElement.previousSibling;
 console.log(prevSiblingNode);
 const nextSiblingNode = bodyElement.nextSibling;
 console.log(nextSiblingNode);
 const  parentNode = bodyElement.parentNode;
 console.log(parentNode);

 // Получаем коллекцию всех дочернмх элементов
 const bodyChildren = bodyElement.children;

 const bodyFirstEl = bodyElement.firstElementChild;
 const bodyLastEl = bodyElement.lastElementChild;
 
 
 

 const prevSiblingEl = bodyElement.previousElementSibling;
 console.log( prevSiblingEl);
 const nextSiblingEl = bodyElement.nextElementSibling;
 console.log( nextSiblingEl);
 const parentEl = bodyElement.parentElement;
 console.log(parentEl);

 // Поиск произвольных элеменнтов 

const elemsOne = document.querySelectorAll(".list"); // поиск по классу

const elemsTwo = document.querySelectorAll("li"); // поиск по тегу

const elemsThree = document.querySelectorAll("li.list-item"); //  смешанный селектор тег и класс

const elemsFour = document.querySelectorAll(".list>li"); // поиск по тегу первого уровня вложености


const elemsFive = document.querySelector('#id'); // поиск по id
const elemsSIx = document.querySelectorAll('[data-item]') // поиск по атрибуту
const elemsSeven = document.querySelectorAll('[data-item="85"]');

// Поиск произвольного элемента
/**
 *  Возврашает первый элемент , соответсвующий данному CSS селектору
 */

const lessonList = document.querySelectorAll('.list');

// Получение элемента по id
document.getElementById('id');
// Получение элементов по тегу 
document.getElementsByTagName('*') // передав * вместо тега , можно получить всех потомков
document.getElementsByClassName('list'); // поиск по классам
document.getElementsByName('list');  // поиск по тегу name
// getElementsBy - возврщает "живую коллекцию"

// closest - ищет ближайшего предкаб который соответствует CSS селектору. Сам элемент тоже включается в поиск

const el = document.querySelector('.sub-list');
const parentList = el.closest('.list');
console.log(parentList);

// Проверка Mathces - проверяет имеет ли CSS селектор и взвращает булево выражение

const elems = document.querySelectorAll('.list-item');

 for(let el of elems) {
  if(el.matches('.list-item_1')) {
    console.log('Yes');
  } else {
    console.log("No");
  }
 }

 // Изменения документа 

 // Содержимое элемента innerHTML

 const textEl = document.querySelector('.text');
 // Получаем содержимое объекта 
 const textElContent = textEl.innerHTML;
 // Изменяем сожеримое контента
 textEl.innerHTML = 'Hello World!';
 textEl.innerHTML = `<p>${textElContent}</p><h2 style="color:red; font-size:32px">Hello World!</h2>`;

 // Cодержимое элемента целликом outerHTML - получаем как содержимое жлемента так и сам элемент

 // textContent - получаем  и зменяем содержимое элемента без тегов
 
 // data - содержимое текстового узла/коментария
 const getComment = textEl.nextSibling;
 console.log(getComment);
 console.log(getComment.data);
 getComment.data = 'Hello';
 console.log(getComment.data);

 // Cоздание элементов и узлов

 const newEl = document.createElement('div');
 console.log(newEl);
 newEl.innerHTML = `I am <span style="color:aqua; font-size:24px">Jonh Snow</span>`;
 console.log(newEl);

//  textEl.before(newEl); // создаем элемент перед объектом 
//  textEl.after(newEl);  // создаем элемент после объекта
//  textEl.prepend(newEl); // внутрь и в начало объекта
// textEl.append(newEl);  // внутрь и в конец  объекта

// insertAdjacentHTML/Text/Element

//  textEl.insertAdjacentHTML('afterend', `<p style="color:#000">I am here</p>`);

 /**
  * "beforebegin" - вставить html непосредственно перед textEl
  * "afterbegin" -  всатвить  в начало textEL
  *  "beforeend" - вставить в конец textEl
  *  "afterend" - вставить непосредственно  после  textEl
  */


 // Перенос элемента

  // cloneNode - клонирование узлов

  // const  cloneTextEl = textEl.cloneNode(); // клонирование без дочерних элементов
  const  cloneTextEl = textEl.cloneNode(true); // глубокое клонирование
  const   ItemLi = document.querySelector('.list-item');
  ItemLi.append(cloneTextEl);

  // ItemLi.remove(); // Удаляем объект


  // Cтили и классы
     //  св-ва className classList

    const elClassNames = ItemLi.className; // получение имен классов элемента
 
    el.classList.add('.active') // Добавить класс
    el.classList.remove('.active') // Удалить класс
    el.classList.toggle('.active') // добавляет если есть и , а если нет удалить
    el.classList.contains('.active') // Проверка на наличие класса true/false

    // element.style

    textEl.style.color = 'blue';
    textEl.style.color = ''; // Сброс стиля

    // style.cssText 

    textEl.style.cssText = `
       background-color: rgb(0, 0, 0, 0.5);
       color: violet;
       border-radius: 25px;
    `; // он перезаписывает все старые  стили елемента

   // Вычисленные стили getComputedStyle(element,[pseudo]);

     const elStyle = getComputedStyle(textEl);
     console.log(elStyle.color);
    //  const elStyle = getComputedStyle(textEl, "::before"); - стиль псевдоэлемента

    //получаем число из стиелй элмента const padding = parseInt(el.padding)

    // console.dir(уд) - показываетв кносоли все доступные свойства тега элемента
     

  const list = document.querySelector('.list');

  list.hasAttribute('name');// проверка атрибута
  list.getAttribute('name'); // получение атрибута
  list.setAttribute('name', 'value'); // устанавливаем значение атрибута
  list.removeAttribute('name');// удаляем атрибут


  
  





 

