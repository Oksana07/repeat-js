// Напиши скрипт вибору вартості готолю по кількості зірок\
//  1- 20$; 2 - 30$; 3- 50$; 4-70$; 5 - 120$

// const stars = 5;
// let price;

// if(stars===1){
//     price=20;
// } else if ( stars===2){
//     price=30;
// }else if ( stars===3){
//     price=50;
// }else if ( stars===4){
//     price=70;
// }else if ( stars===5){
//     price=120;
// } else {
//     console.log('такої кількості зірок нема');
// }

// switch(stars){
//     case 1:
//         price=20;
//         break;
//     case 2:
//         price=30;
//         break;
//     case 3:
//          price=50;
//          break;
//     case 4:
//         parent=70;
//         break;
//     case 5:
//          price=120;
//          break;

//          default:
//              console.log('Такої кількості зірок нема');

// }

// console.log(price);

// Напиши скрипт вибору вартості готолю по кількості зірок\
//  1,2- 20$; 3,4 - 30$; 5 - 120$

// const stars = 6;
// let price;

// if(stars===1 || stars===2){
//     price=20;
// } else if ( stars===3 || stars=== 4){
//     price=30;
// }else if ( stars===5){
//     price=120;
// } else {
//     console.log('такої кількості зірок нема');
// }

// console.log(price);

// щоб обєднати кейси
// switch(stars){
//     case 1:
//     case 2:
//         price=20;
//         break;
//     case 3:
//     case 4:
//         price=50;
//         break;
   
//     case 5:
//          price=120;
//          break;

//          default:
//              console.log('Такої кількості зірок нема');

// }

// console.log(price);

// Задача
// Напиши скрипт вибору опції доставки товару
// Опція зберігається в змінній option: 1 - самовивіз, 2 - курєр, 3 - почта
// В перемінну message записати повідомлення в залежності від опції
//  - Ви можете забрати товар завтра з 12 години у нас в офісі
//  - Курєр доставить замовлення завтра з 9 - 18 години 
//  - Вам передзвонить менджер

// const option = 5;
// let message = '';

// switch(option){
//     case 1:
//         message = 'Ви можете забрати товар завтра з 12 години у нас в офісі';
//         break;
    
//     case 2:
//         message = 'Курєр доставить замовлення завтра з 9 - 18 години';
//         break;
//     default:
//         message = 'Вам передзвонить менджер';
// }

//  console.log(message);