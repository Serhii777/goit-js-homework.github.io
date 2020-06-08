const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let curentValue = 0;

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);

function decrementValue() {
   curentValue--;
   return (counterValue.textContent = curentValue);
}

function incrementValue() {
   curentValue++;
   return (counterValue.textContent = curentValue);
}
