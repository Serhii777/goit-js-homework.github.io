let total = 0;

while (true) {
   let input = prompt('Введите число');
   input = Number(input);
   console.log(input);

   if (input === null) {
      console.log(`Вы ввели cancel. Итерация прекращается.`);
      break;
   }
   const isNotANumber = Number.isNaN(input);
   console.log(isNotANumber);

   if (isNotANumber) {
      console.log(isNotANumber);
      console.log('Было введено не число, попробуйте еще раз');
      continue;
   }

   total += input;
   console.log(`Общая сумма чисел равна ${total}`);
}

console.log(`Cумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
