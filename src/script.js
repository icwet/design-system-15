document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    let target = event.target;
    console.log(target);

    const visibleElem = target.classList[0];
    while (target !== this) {
      if (visibleElem === 'history__transaction') {
        const hideElem = document.querySelector('.history__hide');
        if (searchParent(hideElem, visibleElem)) {
          hideElem.classList.toggle('e-accordion__more');
        }
        return;
      }
      target = target.parentNode;
    }
    function searchParent(elem, elemParent) {
      return Boolean(elem.closest(elemParent));
    }
  });
});
