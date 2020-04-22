const countryName = prompt('Введите имя страны доставки');
let inputName = countryName.toUpperCase();

let price = 0;

switch (inputName) {
   case 'КИТАЙ':
      price = 100;
      break;

   case 'ЧИЛИ':
      price = 250;
      break;

   case 'АВСТРАЛИЯ':
      price = 170;
      break;

   case 'ИНДИЯ':
      price = 80;
      break;
      
   case 'ЯМАЙКА':
      price = 120;
      break;

   default:
      price = 0;
      console.log('В вашей стране доставка не доступна');
}
console.log(`Доставка в ${inputName} будет стоить ${price} кредитов`);
