window.addEventListener('click', (e) => {

  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.parentElement.querySelector('.accordian-content').classList.toggle('display');
  }

});