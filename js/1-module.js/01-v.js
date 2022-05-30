// Обьект Math
// // Определить площадь круга с 
// радиусом 10см(ПR(2)).Math.pow(a, b) 
// - возведение в степень

// const rad = 10;
// const PI = Math.PI;
// const powRad = Math.pow(rad, 2);
// const result = PI * powRad;
// console.log('result', result)



// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area);

// Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

const phonePrice = Number(prompt('Enter phone price')); // 10
const tvPrice = +prompt('Enter tv price'); // 12
const playStationPrice = Number(prompt('Enter ps price')) // 8

const result = phonePrice + tvPrice + playStationPrice;

console.log(result); // 30