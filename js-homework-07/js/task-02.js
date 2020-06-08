const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const createIngredient = ingredient => {
   const ingredientRef = document.createElement('li');
   ingredientRef.classList.add('item');
   ingredientRef.textContent = ingredient;
   return ingredientRef;
};

const ingredientName = ingredients.map(ingredient => createIngredient(ingredient));

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.classList.add('items');
ingredientsRef.append(...ingredientName);
console.log(ingredientsRef);
