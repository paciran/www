function throttle(xx, delay) {
  var last = undefined;
  var timer = undefined;

  return function () {
    var now = +new Date();

    if (last && now < last + delay) {
      clearTimeout(timer);

      timer = setTimeout(function () {
        last = now;
        xx();
      }, delay);
    } else {
      last = now;
      xx();
    }
  };
}

function onScroll() {
  if (window.pageYOffset) {
    $$html.classList.add('is-active');
  } else {
    $$html.classList.remove('is-active');
  }
}

var $$html = document.querySelector('.sticky');

window.addEventListener('scroll', throttle(onScroll,25));
