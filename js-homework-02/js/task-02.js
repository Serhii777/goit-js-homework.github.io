const message = '';
const reply = 'Гравировка всех слов в строке будет стоить:';
const currency = 'кредитов';
let pricePerWord = 0;
let total = 0;

const calculateEngravingPrice = function (message, pricePerWord) {
   message = message.split(' ');

   for (let i = 0; i < message.length; i += 1) {
      total = (i + 1) * pricePerWord;
   }

   return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(`${reply} ${total} ${currency}`);
