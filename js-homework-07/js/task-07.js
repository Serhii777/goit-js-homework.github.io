const inputSizeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

inputSizeRef.addEventListener('input', textSize);

function textSize(event) {
   spanTextRef.style.fontSize = event.currentTarget.value + 'px';
}
