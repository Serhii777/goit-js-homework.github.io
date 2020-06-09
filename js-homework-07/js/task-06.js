const inputRef = document.getElementById('validation-input');
let inputLimit = Number(inputRef.dataset.length);
// const limit = Number(inputRef.getAttribute('data-length'));
const typeinputLimit = typeof inputLimit;
// console.log(typeinputLimit);

inputRef.addEventListener('blur', event => {
   if (inputRef.value.length === inputLimit) {
      inputRef.classList.add('valid');
      inputRef.classList.remove('invalid');
   } else {
      inputRef.classList.add('invalid');
      inputRef.classList.remove('valid');
   }
});
