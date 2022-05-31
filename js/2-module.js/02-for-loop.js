// Цикл for
// for(шніцівлізація; умова; пост вираження){
//     тіло цикла
// }



// for(let i =50; i <= 50; i =0){
//     console.log(i);
// }


// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    const totalPrice = pricePerDroid * orderedQuantity;
  if(totalPrice <= customerCredits){
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left.`;
  } else {
    message = "Insufficient funds!";
  }
    return message;
  }