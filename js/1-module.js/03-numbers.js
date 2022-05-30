// Парс числа з Number.parseInt() і Number.parseFloat() 
// _______

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// _______

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

    // ______

let elementHeight = '200.4px';
// const result = Number.parseFloat(elementHeight);
// console.log(result);

    // _____
    let salery = 1300.16425;
    salery = Number(salery.toFixed(2));
    // console.log(Number(salery.toFixed(2)));
    // // відріже після крапики до 2 чисел = 1300.16 
    // // salery = Number(salery)
    // // перевести в число
    // // console.log(salery.toFixed()); відріже все що після крапки = 1300
    // console.log(salery);
    // покаже що там лежить повне число

    // Обєкт Math
    // приводить до степені
    // Exponent operator

    // const base = 2;
    // const power = 3;

    // const result = Math.pow(base, power);

    // console.log(base ** power);
// ________________________________________
        // // Задача
        // // Напиши скрипт який просить користувача ввести число 
        // // і степень, приводить число в цю степінь і 
        // // виводить результат в консоль.

        // // 1. попросити ввести число і зберегти його в перемінну
        // let base =  prompt('дай число')
        // base = Number(base);
        // console.log(base);
        // // 2. попросисти ввести степінь і зберегти і перемінну
        // let power = prompt('дай степінь');
        // power =Number(power);
        // console.log(power);
        // // 3. вивести введені дані в степінь і вивести в консоль.
        // const result = base ** power;
        // console.log(result);


        // ___________
        // Генерація псевдо випадкових чисел

        // Math.random();
        // const max = 20;
        // const min = 10;
        // console.log(Math.random()*(max - min) + min);

        // ____________
        // Math.round();
        // const max = 20;
        // const min = 10;
        // const result = Math.round(Math.random()*(max - min) + min);
        // console.log(result)


        // ________________________

        // const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
        // const max = colors.length-1;
        // const min = 0;

        // const index = Math.round(Math.random()*(max - min) + min);
        // const color=  colors[index];
        // console.log(color);

        // document.body.style.backgroundColor = color;
