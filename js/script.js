'use strict';

// СОБЫТИЯ

 // Использование DOM-объекта

 const button = document.querySelector('#button');

//  button.onclick = function () {
//    console.log('CLICK');
//  };

//  const showConsole =   () => {
//     console.log('CLICK!!!');
//  }

//  button.onclick = showConsole;

 /** Главный недостаток описанных выше способов - это невозможность повесить несколько обработчиков на одно и тоже событие */


 // Метод addEventListener и  removeEventListener
 //  addEventListener(event, handler[, optinos])

// button.addEventListener('click', e => {
//    console.log('CLICK!!!');
//    console.log('CLACK!!!');
// });

// Опции EventListener

  const optinos = {
    'capture': false, //фаза на которой должен срабоать обработчик
    'once': false, // если true , тогда обработчик будет автоматически удален после выполнения 
    'passive': false  // если true , то указывает что обработчик никогда не вызовет preventDefault() 
  };

  // Объект события

  // function showConsole (event) {
  //      console.log(event.type);// Тип собтия
  //      console.log(event.target); // объект на котором сработал обработчик (могут быть дочерние элементы объекта)
  //      console.log(event.currentTarget); // объект к которому назначем обработчик
  //      // положение курсора по оси x y 
  //      console.log(event.clientX);
  //      console.log(event.clientY);
  //     //  все детали объекта 
  //       console.log(event);
  // }


  // button.addEventListener('click', showConsole);


 /**
  *  Всплытие - это когда на элменте происходит событие, обработчки сначала срабатывают на нем а потом на его родителя , родителя его родителя и так далеее по цепочке
  */
  const firstBlock = document.querySelector('.first-block');
  const secondBlock = document.querySelector('.second-block');
  const thirdBlock = document.querySelector('.third-block');


  firstBlock.addEventListener('click', e => {
    console.log('First Block');
    // console.log(event.target);
  });

  secondBlock.addEventListener('click', e => {
    console.log('Second Block');
  }, {'capture': true}/**можно отловить момент погружения  */);

  thirdBlock.addEventListener('click', e => {
    console.log('Third Block');
    // event.stopPropagation(); //событие сработает только на нужном объекте и всплытие дальше не происходит
  });


// Делегирование событий
 /**Впслытие и перехвать позволяет реализовать один из самых важный приемом разработки делегирование */

//  const buttons = document.querySelectorAll(".button");
 const buttonsBlock = document.querySelector('.buttons');

 const consoleLog = () =>{
    console.log('Yep!');
 }

 buttonsBlock.addEventListener('click' , e => {
    if(e.target.closest('.button')) {
       consoleLog();
    }
 })

 const menuBody = document.querySelector('.menu');



 const menu = e => {
   if(e.target.closest('.menu__button')) {
    menuBody.classList.toggle('_active');
   }

   if(!e.target.closest('.menu')) {
     menuBody.classList.remove('_active');
   }
 }

 document.addEventListener('click', menu);

// Дейсвтия браузера по умолчанию 

const link = document.querySelector('#link');

link.addEventListener('click', function (e) {
   console.log('Yeepppi');
   event.preventDefault(); // отменяет действия браузера по переходе по ссылки 
});

// Основы событий

// Типы событий мыши 

// Простые события 
 /**
  *  mousedown / mouseup - кнопка мыши нажата / отпущена над элементом
  *  mouseover / mouseout - курсор мыши появляется над элементом и уходит с него 
  *  mousemove - каждое движение на элементом гарантирует  это событие
  *  contextmenu - вызывается при попытки   открытия контекстного меню , как правило , нажатием правой кнопки мыши (может вызываться и специально клавишей клавиатуры)
  */

 // Комплексные события 

 /**
  * click - вызывается при  mousedown , а затем mouseup над одним и тем же элементом 
  * dbclick - вызывается двойным кликом на элементе
  
  */

 /**
  * event.wich = 1 - нажата основная кнопка мыши (обычно левая)
  * event.wich = 2 - нажата средняя кнопка мыши (колесо)
  * event.wich = 3 - нажата не основная кнопка мыши (обычно правая)
  */

 const blockForMouse  = document.querySelector("#block-for-mouse");

//  blockForMouse.addEventListener('mousemove', function(event) {
//     blockForMouse.innerHTML = `clientX - ${event.clientX}  <br> clientY - ${event.clientY}`;
//  });

//  blockForMouse.addEventListener('mouseover' , e => {
//     blockForMouse.textContent =`Курсор над элементом`;
//     blockForMouse.style.backgroundColor = 'green';
//  });

//  blockForMouse.addEventListener('mouseout' , e => {
//   blockForMouse.textContent =`Курсор вне элемента`;
//   blockForMouse.style.backgroundColor = 'aqua'
// });

// У  событий  mouseover и mouseout  есть св-во relatedTarger . Когда мвшь переходит  с одного элемента на другой , то один будет target , а другой relatedTarger
/**
 * mouseover = relatedTarget -> targer;
 * mouseout = target -> relatedTarger
 */

// События mouseenter  и  mouseleave

/**
 *  Отличия от mouseover / mouseout 
 * 1 переходы внутри элемента , на его потомки и с них не мситаются 
 * 2 события mousenter/ miuseleave не вплывают 
 */

 blockForMouse.addEventListener('mouseenter' , e => {
    blockForMouse.textContent =`Курсор над элементом`;
    blockForMouse.style.backgroundColor = 'green';
 });

 blockForMouse.addEventListener('mouseleave' , e => {
  blockForMouse.textContent =`Курсор вне элемента`;
  blockForMouse.style.backgroundColor = 'aqua'
});

// События клавиатуры 
/**
 * Основные события клавиатуры 
 * 1 keydown - происходит при нажатии клавиши 
 * 2 keyup - при отпускании клавиши 
 */


// document.addEventListener('keydown', function (e) {
//    if(e.code == 'KeyB') {
//    document.body.style.backgroundColor ='black';
   
//    }
//    console.log(`Нажата клавиша ${e.code} (${e.key})`);
//    console.log(e.repeat);
// })
// document.addEventListener('keyup', function (e) {
//   document.body.style.backgroundColor ='';
//   console.log(`Отжата клавиша ${e.code} (${e.key})`);
// })


const  txtItem = document.querySelector('.textarea-item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.text-counter span');
console.log(txtItem.value.length);


txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown",function(event){
   if(event.repeat) txtSetCounter();
});

function txtSetCounter() {
  const txtCounterResult = txtItemLimit - txtItem.value.length;
  txtCounter.innerHTML = txtCounterResult;
  console.log(txtItem.value.length);
}

document.addEventListener('keyup', e => {
   if( e.code =='Escape') {
        menuBody.classList.remove('_active');
   }
})

//  События  проккрутки (scroll)

// window.addEventListener('scroll', function (event){
//   // кол -ыо прокрученых пиксейлей scrollX / scrollY по горизонтали / вертикали 

//   console.log(`${scrollY}px`);
// })

// События загрузки страницы страницы


/**
 *  1 DOMContentLoaded - браузер полностью загрузил HTML , было построено DOM -дерево , но внешние ресурсы , как <img> и стили , могут быть еще не загруженны
 * 2 load - браузер загрузил  HTML и внешние ресурсы
 * 3 beforeunload / unload  - пользователь покидает страницу
 */

/**
 *  document.readeState - cостояние загрузки
 * 
 * Есть три возможных значения
 * "loading" - документ загружается
 *  "interactive" - документ был полностью прочитан
 *  "complete" - документ был поность прочитан и все ресурсф (такие как изображения) были тоже загруженны
 */

// DOMContentLoaded срабатывает только на документе document 

document.addEventListener("DOMContentLoaded", readyDom);

// load срабатывает на объекте window

window.addEventListener("load", readyLoad);

function readyDom (){
     const image = document.querySelector('.image');
     console.log(document.readyState);
     console.log('DOM загружен!');
     console.log(image.offsetWidth);
}

function readyLoad() {
  console.log(document.readyState);
  const image = document.querySelector('.image');
  console.log("Страница загруженна");
  console.log(image.offsetWidth);
}


// События beforeunload / unload   срабатывают на объекте window

// window.addEventListener("beforeunload" , beforeUnLoad);

// function beforeUnLoad (event) {
//   event.preventDefault();

//   event.returnValue = '';
// }

// window.addEventListener("unload", function(e) {
//    /**
//     * Отправка статистики в фоноыом режиме 
//     * navigatir.sendBeacon(url, data)
//     * https://w3c.github.iobeacon/.
//     */
// })


const searchForm = document.querySelector(".search-form");

const form = (e) => {
  if(e.target.closest(".button-search")) {
     searchForm.classList.toggle('_active');
  }

  if(!e.target.closest(".search-form")) {
    searchForm.classList.remove('_active');
  }
}

document.addEventListener('keyup', e => {
  if(e.code == 'Escape') {
    searchForm.classList.remove('_active');
  }
})

document.addEventListener("click", form);

// if(!e.target.closest('.menu')) {
//   menuBody.classList.remove('_active');
// }

const input = document.querySelector('.form-input');
const inputSymbolLimit = input.getAttribute('maxlength');
const valueCounter = document.querySelector('.value-counter span');
const cross = document.querySelector('.form-input::-webkit-search-cancel-button')

const setInputValue = () => {
  const result = inputSymbolLimit - input.value.length;
  valueCounter.textContent = result; 
  console.log(input.value.length);
  
}

input.addEventListener('search', e =>{
  valueCounter.textContent = inputSymbolLimit; 
})

input.addEventListener("keyup", setInputValue);
input.addEventListener("keydown",function(event){
   if(event.repeat) setInputValue();
});