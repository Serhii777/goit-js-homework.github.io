const categoriesRef = document.querySelector('#categories');
const amount = categoriesRef.children.length;
console.log(`В списке ${amount} категории.`);

const itemsRef = document.querySelectorAll('.item');
itemsRef.forEach(item => {
   const nameCategory = item.firstElementChild.textContent;
   const amountElements = item.lastElementChild.childElementCount;
   const listElements = item.lastElementChild.textContent;
   console.log(`Категория: ${nameCategory}`);
   console.log(`Количество элементов: ${amountElements}`);
   console.log(`Наименование элементов: ${listElements}`);
});
