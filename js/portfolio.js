// ---- Show and hide projects ----

const allProjectsButton = document.querySelector('#all');
const apiProjectsButton = document.querySelector('#api');
const frontendProjectsButton = document.querySelector('#frontend');
let activeButton = allProjectsButton;

allProjectsButton.addEventListener('click', () => {
  underline(allProjectsButton);
  show('api-project');
  show('frontend-project');
});

apiProjectsButton.addEventListener('click', () => {
  underline(apiProjectsButton);
  show('api-project');
  hide('frontend-project');
});

frontendProjectsButton.addEventListener('click', () => {
  underline(frontendProjectsButton);
  hide('api-project');
  show('frontend-project');
});

function underline(button) {
  activeButton.style.textDecoration = 'none';
  activeButton = button;
  activeButton.style.textDecoration = 'underline';
}

function show(type) {
  const projects = document.querySelectorAll(`.${type}`);
  projects.forEach((project) => {
    project.style.display = 'flex';
    animate(project);
  });
}

function hide(type) {
  const projects = document.querySelectorAll(`.${type}`);
  projects.forEach((project) => (project.style.display = 'none'));
}

function animate(project) {
  project.classList.add('hide');
  setTimeout(function () {
    project.classList.remove('hide');
  }, 100);
}

underline(allProjectsButton);
