let total = 0;

while (true) {
   let input = prompt('Введите число');

   if (input === null) {
      console.log(`Вы ввели cancel. Итерация прекращается.`);
      break;
   }

   input = Number(input);
   const isNotANumber = Number.isNaN(input);

   if (isNotANumber) {
      console.log('Было введено не число, попробуйте еще раз');
      alert('Было введено не число, попробуйте еще раз');
      continue;
   }

   total += input;
   console.log(`Общая сумма чисел равна ${total}`);
}
console.log(`Cумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
