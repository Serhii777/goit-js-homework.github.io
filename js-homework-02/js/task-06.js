// let input = '';
const numbers = [];
// let number = 0;
let total = 0;
let message = 'Общая сумма чисел равна: ';
let incorrectInput = 'Было введено не число, попробуйте еще раз';
let errorMessage = 'Отменено полльзователем';

// while (input !== null) {
while (true) {
   let input = prompt('Введите число', 0);
   input = Number(input);
   numbers.push(input);
   
   if (input === null) {
      for (let i = 0; i < numbers.length; i += 1) {
         total += numbers[i];
         console.log(number);
         console.log(total);
      }
      console.log(`${message}${total}`);
      break;
   }
   //    }
   //    console.log(`${message}${total}`);
}
console.log(errorMessage);

// console.log(sumNumbers(input));
