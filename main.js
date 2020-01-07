window.addEventListener('click', (e) => {

  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.parentElement.querySelector('.accordion-content').classList.toggle('display');
  }

});