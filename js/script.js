'use strict';

// Свойства и методы форм 

 // Колекция всех форм на странице  document.forms 

//   console.log(document.forms);
//    const mainForm  = document.forms[0];
//    console.log(mainForm)

   // Атрибут name 

   const mainForm  = document.forms.main;
   const mainFormInputText  = mainForm.text;
   const mainFormInputTextarea = mainForm.textarea;
   const mainFormInputRadioButtons = mainForm.radioButton;
   const mainFormInputCheckBox = mainForm.check;
   const mainFormInputFile = mainForm.file;
   console.log(mainForm);
   console.log(mainForm.elements); // получение всех элементов формы
   console.log(mainFormInputText); // получение конкретного элемента фромы по атрибуту name

   // Получение формы элемента
    console.log(mainFormInputText.form)

    // Работа с input и textarea 

    /**
     * Значение мы можем получить через св-во input.value(строка) или input.checked(booleen)  для чекбоксов и радиокнопок
     */

    console.log(mainFormInputText.value); // получить содежимое поля
    console.log(mainFormInputTextarea.value); // получить содержимое текстового поля

    // mainFormInputText.value = 'Hello!!!'; // присвоение значения содержимого поля

    // Получить значение поля type radio 
    console.log(mainFormInputRadioButtons[0].value);
    console.log(mainFormInputRadioButtons[1].value);
    console.log(mainFormInputRadioButtons[0].checked);
    console.log(mainFormInputRadioButtons[1].checked);
    // Получить значение поля type  checkbox
    console.log(mainFormInputCheckBox.value);
    console.log(mainFormInputCheckBox.checked);
    // Получить значение поля type file
    console.log(mainFormInputFile.value);
    // Присвоение значений type radio checkbox radio 
    mainFormInputRadioButtons[0].value = 'left';
    mainFormInputRadioButtons[1].checked = true;
    mainFormInputCheckBox.value = 'Married';
    mainFormInputCheckBox.checked = true;
    mainFormInputFile.value = ''; // можем только очистить значение, тюе передать пустую строку
    

    // Работа с select и options

    //  select.option - получение коллекции из подэлементов option
    //  select.value - значение выбраного в данный момент option
    // select.selectedIndex - номер выбраного option

    const mainFormSelect = mainForm.select;
    // получение всех option
    console.log(mainFormSelect.options);
     // Получить индекс выбраного option
    const mainFormSelectIndex = mainFormSelect.selectedIndex;
    console.log(mainFormSelectIndex);

    // получить значение выбраного option
     const mainFormSelectValue = mainFormSelect.value;
     console.log(mainFormSelectValue);
     // получить текс выбраного option 
     const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
     console.log(mainFormSelectText);

     /**
      *  Элементы option имеют св-ва 
      *  option.selected - выбрана ли опцию (booleen)
      *  option.index - номер опции в списке select
      *  option.text - содержимое опции
      */
     

     // Добавление новой  опции  option = new Option(text = текс опции, value= значение опции, defaultSelected = если true lj,fdzktn fnhb,en  selected в html, selected =  данная опция будет выбрана)


     // Пример 

     let newOption = new Option('Ten', '6', false. false);
     mainFormSelect.append(newOption);

     // Получение всех выбранных значений  option из select multiple

     let selectedOptions  =Array.from(mainFormSelect.options).filter(option => option.selected).map(option => option.value);
     console.log(selectedOptions);

     // События форм и их элементов 
    
     const mainFormInputPlaceholder = mainFormInputText.placeholder;
      
     mainFormInputText.addEventListener('focus',  function(e)  {
        mainFormInputText.placeholder = "";
     });
     mainFormInputText.addEventListener('blur', (e) => {
        mainFormInputText.placeholder = mainFormInputPlaceholder;
     });
   // события elem.focus() и elem.blur() - устанавливает и снимает фокус
     mainFormInputText.focus();

     setTimeout(()=> {
        mainFormInputText.blur();
     }, 5000);

    const container  = document.querySelector('.container');

   /**
    *  Фокусировка на любом элементе с помощью tabindex
    */


    // container.addEventListener('focus', e => {
    //     container.style.border = '2px dashed yellow';
    // });

    // container.addEventListener('blur', e => {
    //     container.style.border = '';
    // });

    /**
     * Текущий элемент в фокусе можно получить c помощью document.activeElement
     */


     mainForm.addEventListener('focus', e => {
        mainForm.style.border = '2px dashed yellow';
    } , {capture: true}); // можем добится всплывания , ьакже можем получить через события focusin focusout

    mainForm.addEventListener('blur', e => {
        mainForm.style.border = '';
    }, {cupture : true} );

    // Событие change - срабатывает по окнчании изменения элемента

    /**
     *  в текстовых input и textarea работает также как и blur ,но в select radio file и т.д сразу при изменении
     */


    // Cобытие input срабатывает  каждый раз при изменении значения 
    /**
     * В отличии от событий клавиатуры срабатывает каждый раз при изменении значения , даже если не связаны с клавиатурными действиями (вставка при помощи мыши, распознания речи при диктовки)
     */


    mainFormInputTextarea.addEventListener("input", function(e){
        console.log(`value: ${mainFormInputTextarea.value}`);
    })

    // События cut , copy , paste - события происходят при вырезании, копировании , вставки в инпуте , c помощью preventDefault() можно запрещать действия в инпуте

    // событие submit

    mainForm.addEventListener('submit', e => {
        console.log('Форма отправляется')
        //Проверяем заполнино ли поле
        if(!mainFormInputText.value) {
            e.preventDefault();
             console.log('Noooo');
        }
    });

    // Отправка формы в ручную form.submit()


    //Выводим картинку после выбора 

    mainFormInputFile.addEventListener('change', e => {
        let selectedFile = mainFormInputFile.files[0];
        //получаем url изображения
        let fileUrl = URL.createObjectURL(selectedFile);

        mainFormInputFile.parentElement.insertAdjacentHTML(
            'beforeend',` <div>
            <img title="${selectedFile.name}" src="${fileUrl}" alt="">
       </div>`
        );

    });

    








