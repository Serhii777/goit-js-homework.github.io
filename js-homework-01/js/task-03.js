const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');

if (message === null) {
   message = 'Отменено пользователем!';
   console.log(message);
} else {
   if (message === ADMIN_PASSWORD) {
      message = 'Добро пожаловать!';
      console.log(message);
   } else {
      message = 'Доступ запрещен, неверный пароль!';
      console.log(message);
   }
}
alert(message);
