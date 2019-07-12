document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    let target = event.target;

    while (target !== this) {
      const visibleElemClass = target.classList[0];
      if (visibleElemClass === 'history__transaction') {
        target.childNodes[1].classList.toggle('e-accordion__more');
        return;
      }
      target = target.parentNode;
    }
  });
});
