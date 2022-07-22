// ---- Toggles navigation options on and off ----

window.addEventListener('scroll', autoNavUpdate);
window.addEventListener('load', autoNavUpdate);

function autoNavUpdate() {
  const about = document.querySelector('#about').getBoundingClientRect();
  const skills = document.querySelector('#skills').getBoundingClientRect();
  const portfolio = document.querySelector('#portfolio').getBoundingClientRect();

  if (isInside(about)) {
    activateNavigationItem('about');
    disableNavigationItems(['skills', 'portfolio']);
  }

  if (isInside(skills)) {
    activateNavigationItem('skills');
    disableNavigationItems(['about', 'portfolio']);
  }

  if (isInside(portfolio)) {
    activateNavigationItem('portfolio');
    disableNavigationItems(['about', 'skills']);
  }
}

function isInside(section) {
  return section.top < window.innerHeight && section.bottom >= 0;
}

function activateNavigationItem(active) {
  $(`#${active}-item`).addClass('active');
}

function disableNavigationItems(disabledItems) {
  disabledItems.forEach((item) => {
    $(`#${item}-item`).removeClass('active');
  });
}
