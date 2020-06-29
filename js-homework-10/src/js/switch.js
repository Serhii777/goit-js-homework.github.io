const switchRef = document.querySelector('.js-switch-input');
// console.log(switchRef);

switchRef.addEventListener('input', event => {
  console.log(event.target);
  
  if (event.target.checked) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
});

