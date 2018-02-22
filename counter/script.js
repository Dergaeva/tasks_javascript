// Реализовать подсчет кликов, максимум до 3-х включительно
// обработчки должен сниматься

window.onload = function () {

  let counter = document.getElementById('counter');
  let count = 0;

  function counterClick() {
    count++;
    if (count < 4) {
      counter.innerHTML = 'Click me ' + count;
    }
    else {
      counter.removeEventListener("click", counterClick);
    }
  }

  counter.addEventListener("click", counterClick);

};
