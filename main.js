window.addEventListener('click', (e) => {
  e.target.parentElement.parentElement.querySelector('.accordian-content').classList.toggle('display');
});