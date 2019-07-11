document.addEventListener('DOMContentLoaded', function() {
  const list = document.querySelector('.history');

  list.addEventListener('click', function(action) {
    const target = action.target;
    console.log(target);
    const listVisibleElem = document.querySelector('.e-accordion__short');
    // console.log(listVisibleElem);
    if (target === listVisibleElem) {
      const listInvisibleElement = document.querySelector('.e-accordion__more');
      listInvisibleElement.style.display = 'block';
      // console.log(listInvisibleElement);
    }
  });
});
