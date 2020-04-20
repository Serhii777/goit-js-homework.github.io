const countryName = prompt('Введите имя страны доставки');
let inputName = countryName.toUpperCase();

let price = 0;

switch (inputName) {
   case 'КИТАЙ':
      price = 100;
      console.log(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      alert(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      break;
   case 'ЧИЛИ':
      price = 250;
      console.log(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      alert(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      break;
   case 'АВСТРАЛИЯ':
      price = 170;
      console.log(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      alert(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      break;
   case 'ИНДИЯ':
      price = 80;
      console.log(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      alert(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      break;
   case 'ЯМАЙКА':
      price = 120;
      console.log(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      alert(`Доставка в ${inputName} будет стоить ${price} кредитов`);
      break;

   default:
      price = 0;
      console.log('В вашей стране доставка не доступна');
      alert('В вашей стране доставка не доступна');
}
