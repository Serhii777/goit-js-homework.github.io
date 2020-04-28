let input = '';
let numbers = [];
let total = 0;
let message = 'Общая сумма чисел равна: ';
let incorrectInput = 'Было введено не число, попробуйте еще раз';
let errorMessage = 'Ввод прекращен пользователем';

for (; input !== null; ) {
   input = prompt('Введите число', 0);

   if (input === null || input === '') break;
   input = Number(input);
   const isNotANumber = Number.isNaN(input);

   if (isNotANumber) {
      alert(incorrectInput);
      continue;
   }
   numbers.push(input);
   console.log(numbers);
}

for (let number of numbers) {
   total += number;
}
console.log(errorMessage);
console.log(`${message}${total}`);
