'use strict'


//  МАССИВЫ 

// Создание массива

// let arr = new Array(); // Используется редко 
let arr = [];

// Значения миссива 
let arrOne = [
    'Jonh',
    'Bob',  // Висячия заяпятая 
    'Tessa'
];
arrOne ['Jonh','Bob', 'Tessa'];

// Различные типы  значений в массиве
let arrTwo = [
    'Jonh',
    {
        name: 'John',
        age: 29
    },
    true,
    function () {
        console.log("Hello World!");
    }
];

// Многомерные массивы 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

];

//  Методы массивов 

/**
 *   Варианты применения массивов 
 *   Очередь поддерживает два вида операций 
 *   1. добалвения элемента в конец очереди 
 *   2. удаления элмента в начале , так что  второй элемент становится первым
 *    
 *    Другой вариант применения массива это структура данных называемая стек 
 *    стэк поддкрживает два вида операций
 *    1. добавления элемента в конец
 *    2. удаления последнего  элемента 
 */

 // Метод push - добаляет элемент в конец массива 

 let array = ['Jonh','Bob', 'Tessa'];
 array.push('Billy');
 console.log(array); // ['Jonh','Bob', 'Tessa', 'Billy']

 // Метод shift - удаляет элемент в начале , сдвигая очередь

 array.shift();  // ['Bob', 'Tessa', 'Billy']

 //  Метод pop() - удаляет последний элемент

  arr.pop();  // ['Bob', 'Tessa']

  // Метод unshift - добавляет элемент в начале массива сдвигая очередь

   array.unshift('Hector'); // ['Hector', Bob', 'Tessa']
  

// Удаление/добавление/изменение конкретных элементов

 // Метод splice. Позволяет удалять б добавлять и заменять элменты 

 // Удаление элемента 

   let arrayOne = ['Jonh','Bob', 'Tessa', 'Billy'];
   // Начиная с первого индекса (Bob), удаляем один элемент 
   arrayOne.splice(1,1); // ['Jonh', 'Tessa', 'Billy']
   console.log(arrayOne);
   
   // Удаляем элемент и возвращаем его в переменую 

   let arrayTwo = ['Jonh','Bob', 'Tessa', 'Billy'];
   let removed = arrayTwo.splice(1,1); // Bob

   // Заменяем элементы 
     let arrayThree =  ['Jonh','Bob', 'Tessa', 'Billy'];
     // Начиная с нулевого индекса  (John), заменяем один элемент
     arrayThree.splice(0, 1, 'Brain') // ['Brain','Bob', 'Tessa', 'Billy']

     //  Добавляем элемент 
     let arrayFour =  ['Jonh','Bob', 'Tessa', 'Billy'];
     // Начиная с первого индекса (перед Bob) добаляем один элемент без удаления другого 
     arrayFour.splice(1,0, 'Brain'); // [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy' ]
    

    // Метод slice - создает новый массив , в который копирует часть либо весь массив  arr.slice([start], [end]) не включая end

    // Копируем часть массива 

    let anyArray  = [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy' ];
   // Копируем часть массива
     // начиная с первого индекса (Brain) до второго  (Bob) - не включая Bob
    let copyOne =  anyArray.slice(1,2); // Brain
    
    let copyTwo = anyArray.slice(-3,-1); // [ 'Bob', 'Tessa' ]
   
    // Копируем весь массив
    let copyThree = anyArray.slice(); //  [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy' ] 
   

    // Метод  concat  - создает новый массив вкоторый копирует данные из других масивов

    let Arr = [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy' ];
    let newArr = [ 'Harry','James', 'Henry' ];
    let Copy = Arr.concat('Kurt'); // [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy', 'Kurt' ]
     let newCopy = Arr.concat(newArr);
   
     // Поиск в массиве

      // Методы indexOf/LastIndexOf и includes

      let names = [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy', 'Kurt' ];

      // indexOf(item, from ) - ищет нужный item ,  начиная с индекса from и возвращает индекс , на котором был найден элемент , в противном случае  -1
      
      console.log(names.indexOf('Kurt')); // 5
      console.log(names.indexOf('Bob'));  // 2
      console.log(names.indexOf('Brain'));  // 1

       // lastIndexOf - тоже самое , но справо на лево

      console.log(names.lastIndexOf('Kurt')); // 5
      console.log(names.lastIndexOf('Bob'));  // 2
      console.log(names.lastIndexOf('Brain'));  // 1

      // includes(item, from) - ищет item начиная с from , и возврашает булевое выражение

      console.log(names.includes('Kurt')); // true
      console.log(names.includes('Bob'));  // true
      console.log(names.includes('Светлана'));  // false

      // Методы find и findIndex
      // поиск в массиве объектов с определенным условием 
      
      // find
      let objects = [
        {name: 'John', age:29},
        {name: 'Kurt', age:18},
        {name: 'Lisa', age:'Non of your buisness'}
        
      ];

    //   let resultOne = objects.find(function(item, index, array){
    //      return item.age === 18;
    //   });
     
      ;

      let resultOne = objects.find(item => item.age === 18); // { name: 'Kurt', age: 18 }
    

      // findIndex 

      let resultTwo = objects.findIndex(item => item.age === 18); // 1
     
      // filter - ищет все элементы , на которых функция вернет true


      let info =[
        {name: 'John', age:29},
        {name: 'Kurt', age:18},
        {name: 'Lisa', age:'Non of your buisness'}
        
      ];

      let result = info.filter(person => person.age >= 18); // [ { name: 'John', age: 29 }, { name: 'Kurt', age: 18 } ]

      // Сортировка массивов 
      
      // Метод sort(fn)

      // сортировка слов 

       let words = ['Moscow', 'Cow', 'Baby'];
       console.log(words.sort()); // [ 'Baby', 'Cow', 'Moscow' ] - алфавитный порядок

       //соритровка чисел 
       
       let numbers = [8, 22, 1];

       // функция сортировки 

    //    function compareNumbers(a,b) {
    //      if (a > b ) return 1;
    //      if(a === b) return 0;
    //      if( a < b) return -1 ;


    //    }

    console.log(numbers.sort((a,b) => a - b)); // [ 1, 8, 22 ]
    console.log(numbers.sort((a,b) => b - a));  // [ 22, 8, 1 ]

  // Преобразование массивов 
     
     // Метод map- вызывает функцию для каждого элемента массива и возвращает массив  результатов выполнения этой функции 



     let listOfNames =  [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy' ];

     let res = listOfNames.map(item => item[0]); // [ 'J', 'B', 'B', 'T', 'B' ]
     

     // Проверка Array.isArray()

     let obj = {}; // typeof object 
     let ar = [];  // typeof object 

     const isArray = (ar = []) =>{
     if(Array.isArray(ar)) {
        return true;
     } else return false
    };
    console.log( isArray());
    
    // Метод  перебора forEach
    
    let people = [ 'Jonh', 'Brain', 'Bob', 'Tessa', 'Billy' ];

    people.forEach((item, index , array)=> {
         console.log(`${item} находится на ${index} позиции в  ${array}`);
    });

    // Метод reduce 

    let  arrOfNumbers = [1,2,3,4,5,6,7,8,9,10];

    let reduceValueOne = arrOfNumbers.reduce(function(previusValue, item , index, array){
         return item + previusValue;
    }, 0);
    console.log(reduceValueOne);

    /**
     * Если не указать не указать начальное значение , то оно будет равно первому элементу массива б а работа начнется со второго  элемента
     */

    // Метод reduceRight - аналогичный методу reduce, только работает в справа налево

   

