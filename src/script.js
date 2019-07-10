document.addEventListener('DOMContentLoaded', function() {
  const list = document.body.querySelector('.history');
  const listElems = list.children;
  for (let elem = 0; elem < listElems.length; elem++) {
    listElems[elem].onclick = function(action) {};
  }

  function show(element) {
    element.style.display = 'block';
  }
  function hide(element) {
    element.style.display = 'none';
  }
});
