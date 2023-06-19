import { AppContainer, AppRouter } from 'app';
import { ChatMainRouter } from 'pages/chat-page';


const root = document.getElementById('root');

function addAppEventListeners() {
  // AUTH TESTING
  let form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      const form = event.target;
      const login = form.querySelector('input[name="login"]').value;
      const password = form.querySelector('input[name="password"]').value;
  
      if (login === 'Tyler' && password === 'Derden') {
        AppRouter.setCurrentRout('CHAT');
        root.innerHTML = AppContainer();
        addAppEventListeners();
        form.reset();
      }
    });
  }

  // APP ROUTE TESTING
  let buttons = document.querySelectorAll('[data-route]');
  if (buttons.length) {
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        AppRouter.setCurrentRout(event.target.dataset.route);
        root.innerHTML = AppContainer();
        addAppEventListeners();
      });
    });
  }

  // APP 500 ROUTE TESTING
  let serverErrorButton = document.querySelector('#server-error');
  if (serverErrorButton) {
    serverErrorButton.addEventListener('click', (event) => {
      AppRouter.setCurrentRout(event.target.dataset.server);
      root.innerHTML = AppContainer();
      addAppEventListeners();
    })
  }

  // GO TO PREVIOUS MAIN ROUTE TESTING
  let goToPreviousAppButton = document.querySelector('#return');
  if (goToPreviousAppButton) {
    goToPreviousAppButton.addEventListener('click', () => {
      AppRouter.setPreviousRout();
      if (window.location.href !== window.location.origin + '/') {
        history.back();
      }
      root.innerHTML = AppContainer();
      addAppEventListeners();
    })
  }
  

  // DIALOG ROUTE TESTING
  let dialogButtons = document.querySelectorAll('[data-dialog]');
  if (dialogButtons) {
    dialogButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        ChatMainRouter.setCurrentRout(event.currentTarget.dataset.dialog);
        root.innerHTML = AppContainer();
        addAppEventListeners();
      });
    });
  }

  // PROFILE ROUTE TESTING
  let editButton = document.querySelector('#profile');
  if (editButton) {
    editButton.addEventListener('click', (event) => {
      ChatMainRouter.setCurrentRout(event.target.dataset.main);
      root.innerHTML = AppContainer();
      addAppEventListeners();
    })
  }

  // GO TO PREVIOUS MAIN ROUTE TESTING
  let goToPreviousMainButton = document.querySelector('#go-to-previous-chat-main');
  if (goToPreviousMainButton) {
    goToPreviousMainButton.addEventListener('click', () => {
      ChatMainRouter.setPreviousRout();
      root.innerHTML = AppContainer();
      addAppEventListeners();
    })
  }

  // CHANGE DATA ROUTE TESTING
  let changeDataButton = document.querySelector('#change-data');
  if (changeDataButton) {
    changeDataButton.addEventListener('click', (event) => {
      ChatMainRouter.setCurrentRout(event.target.dataset.main);
      root.innerHTML = AppContainer();
      addAppEventListeners();
    })
  }

  // CHANGE PASSWORD ROUTE TESTING
  let changePasswordButton = document.querySelector('#change-password');
  if (changePasswordButton) {
    changePasswordButton.addEventListener('click', (event) => {
      ChatMainRouter.setCurrentRout(event.target.dataset.main);
      root.innerHTML = AppContainer();
      addAppEventListeners();
    })
  }
};

root.innerHTML = AppContainer();
addAppEventListeners();
