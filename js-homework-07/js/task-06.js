const inputRef = document.querySelector("#validation-input");
let num = 6;

inputRef.addEventListener('blur', event => {
   if (inputRef.value.length === num) {
      inputRef.id = "validation-input-valid";
   } else {
      inputRef.id = "validation-input-invalid";
   }
});
