'use strict'
// Условия 

// Cинтаксис 

let message = 'Hello World';
if (2 > 5) {
  //Код выполнится , если условия true
  console.log(message);
};

let first = 5;
let second = 10;
if(first === second) {
  console.log(message);
};
// Более сложнок условие (с использованием логических операторов )
if(2 + 1 === 3 && '1' == 1 || 10 > 5 && 100 === 1){
  console.log(message);
};

// Блоки ELSE и ELSE IF 
let number = 5;
if(number > 1 ) {
  console.log(message);
} else {
  console.log('Wrong Condition');
}
// ELSE IF
if(number > 50) {
  console.log('5 more than 50')
} else if ( number > 30) {
  console.log('5 more than 30')
}
else if ( number > 10) {
  console.log('5 more than 10')
}
else if ( number > 1) {
  console.log('5 more than 1')
} else {
  console.log('Wrong Condition');
};

// Условный  оператор ?

let messageStart = 'Hello';
let messageEnd; 
 messageEnd = (5 > 1) ? ' John' : ' Tracy';
 messageStart += messageEnd;
 console.log(messageStart);


 // Циклы 
 // While
 let num = 0;
 while (num < 5) {
    console.log(num);
    num++;
 };
 // Конструкция DO... WHILE
 do {
   console.log(num);
   num++;
 } while (num < 5); // при do while выполнится хотя бы одно тело цикла
 
 // FOR

 for(let num = 0/**Начало */; num < 5/**Условие */; num++/**Шаг */) {
   console.log(num);
 };

 // Деректива breake
 for (let num = 0; num < 5; num++) {
     console.log(num);
     if (num === 2) break; // прерывает цикл
 }
 // Директива continue
 for(let num = 0; num < 5; num++) {
    if (num === 2) continue; // пропускает итерацию  цикла  
    console.log(num);
 }
 //   Метки 
 firstFor: for(let num = 0; num < 2; ) { 
  for ( let size = 0; size < 3; size++) {
    if (size ==2) {
      break firstFor;
    }
    console.log(size);
  }
 }
 
 
