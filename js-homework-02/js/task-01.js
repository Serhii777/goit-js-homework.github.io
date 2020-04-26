const array = [];

const logItems = function (array) {
   for (let i = 0; i < array.length; i += 1) {
      const element = `${1 + i} - ${array[i]}`;
      console.log(element);
   }
};

logItems(array);
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// TODO: переделать фор