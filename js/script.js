'use strict'
'use strict';

// ПРОКРУТКА , РАЗМЕРЫ , КООРДИНАТЫ

  // Размеры окна браузера  
  // clientWidth clientHeight


//  ширина и высота окна 
 const mainElement = document.documentElement;
 const mainElementWidth = mainElement.clientWidth;
 const mainElementHeight = mainElement.clientHeight;

//  console.log(mainElementWidth);
//  console.log(mainElementHeight);

 //------------

 // Ширина и высота окна вместе с полосами пркрутки 

 const windowWidth = window.innerWidth;
 const windowHeght = window.innerHeight;
//  console.log(windowWidth);
//  console.log(windowHeght);

 // включая прокрученную часть 

 let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth,  document.documentElement.clientWidth
 )

 let scrollHeight = Math.max(
  document.body.scrollHeight , document.documentElement.scrollHeight ,
  document.body.offsetHeight , document.documentElement.offsetHeight ,
  document.body.clientHeight , document.documentElement.clientHeight
)


// console.log(scrollWidth);
// console.log(scrollHeight);


// Получаем кол-во прокрученных пикселей 
let   windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

// console.log(windowScrollTop);
// console.log(windowScrollLeft);

// Управление прокруткой страницы 

// Метод scrollBy  (x, y ) - прокручивает страницу относительно текущего положения 

function setScrollBy () {
  window.scrollBy(0, 50);
   windowScrollTop = window.pageYOffset;
  console.log(windowScrollTop);
};

const scrollByButton = document.querySelector("#scroll-by__button");
scrollByButton.addEventListener('click', setScrollBy);


// Метод scrollTo(pageX, pageY) прокручивает страницу на абсолютные координаты 
// иоже самое , что и window.scroll()

function setScrollTo() {
   window.scrollTo(0, 50);
     windowScrollTop = window.pageYOffset;
     console.log(windowScrollTop);
};

const scrollToButton = document.querySelector("#scroll-to__button");
scrollToButton.addEventListener("click", setScrollTo );

function setScrollToOptions () {
  window.scrollTo({
    top:500,
    left: 0,
    behavior: "smooth"
  });
}

const scrollToOptionsButton = document.querySelector('#scroll-to-options__button');
scrollToOptionsButton.addEventListener('click', setScrollToOptions);

// Опции не работают в safari

//  elem.scrollIntoView (top) - прокручивает  страницуб чтобы элемент оказался вверху
// если top = true(по умолчанию) , то страница будет прокручена , чтобы elem появился в вверхней части окна 
// если top = false , то страница будет прокручена, чтобы elem появился ввнизу , нижний край элемента будет совмещен с нижним краем экрана


function setScrollIntoView(top) {
    const lessson = document.querySelector("#lesson");
    lessson.scrollIntoView(top);
};

const scrollIntoViewTrueButton = document.querySelector('#scrollIntoView-true')
scrollIntoViewTrueButton.addEventListener('click', setScrollIntoView)

function setScrollIntoViewFalse(top) {
  const lessson = document.querySelector("#lesson");
  lessson.scrollIntoView(false);
};

const scrollIntoViewFalseButton = document.querySelector('#scrollIntoView-false');
scrollIntoViewFalseButton.addEventListener('click', setScrollIntoViewFalse);


function setScrollIntoViewOptions(top) {
  const lessson = document.querySelector("#lesson");
  lessson.scrollIntoView({
     block: "center", // start end nearest
     inline: "nearest",
     behavior:"smooth"
  });
};

// Опции не работают в safari

const scrollIntoViewOptionsButton = document.querySelector('#scrollIntoView-options');
scrollIntoViewOptionsButton.addEventListener('click', setScrollIntoViewOptions);

// Запретить прокрутку окна бразуера  (doucment.body.style.overflow = "hidden")  или    добавляем  класс нужному объекту с overflow : hidden


// Метрики элементов на страницы 

const block = document.querySelector('.text-block')

// Позиция объекта
//  Св-ва offsetParent, offsetLeft и offsetTop

// Получаем родельский элемент отностилеьно которого позиционирован наш объект 
const elOffsetParent = block.offsetParent;
/** Это будет близжайший предок предок , который удовлетворяет следующим условиям
 * 1. Является css позиционированным (position: absolute , relative, fixed , sticky)
 * 2. тег <td>, <th>, <table>
 * 3. или <body>
 */

// console.log(elOffsetParent);

// Получаем  позицию элемента относительно предка

const elOffsetLeft = block.offsetLeft;
const elOffsetTop = block.offsetTop;

// console.log(elOffsetLeft);
// console.log(elOffsetTop);

// Общие размеры объекта 
// offsetWidth и OffsetHeight

// Получаем размеры объекта 

const elOffsetWidth = block.offsetWidth;
const elOffsetHeight = block.offsetHeight;

// console.log(elOffsetWidth);
// console.log(elOffsetHeight);

// Отступы внцтреней части элемента от внешний 

const elClientTop = block.clientTop;
const elClientLeft = block.clientLeft;

// console.log(elClientTop);
// console.log(elClientLeft);

// clientWidth и clientHeight - размеры объекта без рамок и полосы прокрутки 

const elClientWidth = block.clientWidth;
const elClientHeight = block.clientHeight;

// console.log(elClientWidth);
// console.log(elClientHeight);

// scrollWidth , scrollHeight  - размеры объекта включающие в себя прокрученную часть 

const elScrollHeight = block.scrollHeight;

// console.log(elScrollHeight);


// Размеры прокрученной области scrollLeft scrollTop

// let  elScrollTop = block.scrollTop;
// console.log(elScrollTop);
// block.scrollTop = 150;
// elScrollTop = block.scrollTop;
// console.log(elScrollTop);


// Координаты 

/**Больщенство методов js  работают в одной и двух указанных ниже систем коордмнат
 * 1 Относительно окна браузера( как position : fixed) clientX , clientY
 * 2 Относительно документа (как  postion: absolute) pageX pageY
 */

// Координаты относительно окна браузера getBoundingClientRect

const getItemCoords = block.getBoundingClientRect();

// console.log(getItemCoords);

// Получаем конкретную координату (т.к метод возвращает нам объект , мы можем обратится к нужному св-ву этого объекта)

const getItemLeftCoords = block.getBoundingClientRect().left;
const getItemTopCoords = block.getBoundingClientRect().top;

// console.log(getItemLeftCoords);

// Получаем конкретную координату относительно окна документа

const getItemTopDocumentCoords = getItemTopCoords + window.pageYOffset;

// console.log(getItemTopCoords);
// console.log(getItemTopDocumentCoords);

// Получение объекта по координатм 
// document.elementFromPoint(x, y)

const elem = document.elementFromPoint(100,200 ); // получает объект по координатом относительно окна браузера

// console.log(elem);
