const credits = 23580;
const pricePerDroid = 3000;
let countDroid = prompt('Какае количество дроидов Вы хотите купить?');
let totalPrice = 0;

if (countDroid === null) {
   alert('Отменено пользователем!');
   console.log('Отменено пользователем!');
} else {
   countDroid = Number(countDroid);
   totalPrice = pricePerDroid * countDroid;
   console.log(totalPrice);

   if (totalPrice <= credits) {
      alert(`Вы купили ${countDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
      console.log(`Вы купили ${countDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
   } else {
      alert('Недостаточно средств на счету!');
      console.log('Недостаточно средств на счету!');
   }
}
