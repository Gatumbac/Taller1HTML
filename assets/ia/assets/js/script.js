const button = document.getElementById('toggle-bg');
let toggled = false;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = toggled ? '#f4f1ee' : '#e2d6ce';
  toggled = !toggled;
});
