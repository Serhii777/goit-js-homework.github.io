const message = '';
const wordToForbidSl = 'sale';
const wordToForbidSp = 'spam';
let returnMessage = false;

const checkForSpam = function (message) {
   const arrays = message
      .toLowerCase()
      .replace(/[^\w\s]|_/g, '')
      .split(' ');
   console.log(arrays);

   for (const word of arrays) {
      if (wordToForbidSl === word || wordToForbidSp == word) {
         returnMessage = true;
         break;
      }
      console.log(word);
   }
   return returnMessage;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
