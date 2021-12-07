const toggle = document.querySelector('.toggler');
const body = document.querySelector('body');
toggle.addEventListener('change', (e) => {
  let val = e.target.value;
  if (val == '0') {
    body.classList.add('dark');
  }
  if (val == '100') {
    body.classList.remove('dark');
  }
});
