// ---------- effects on window scroll ----------

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const lastElement = target[target.length - 1];
var allAnimated = false;

function animeScroll() {
  if (!allAnimated) {
    const windowTop = window.pageYOffset + window.innerHeight * (3 / 4);
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
        if (element === lastElement) {
          allAnimated = true;
        }
      }
    });
  }
}

animeScroll();

window.addEventListener('scroll', function () {
  animeScroll();
});
