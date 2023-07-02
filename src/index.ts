import { AppContainer } from 'app';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  if (root) {
    const appContainer = new AppContainer();

    root.append(appContainer.getContent());
    appContainer.dispatchComponentDidMount();
  }
});

//

// function addAppEventListeners() {
//   // AUTH TESTING
//   if (!root) {
//     return;
//   }

//   const form = document.querySelector('form');
//   if (form) {
//     form.addEventListener('submit', (event) => {
//       const formTarget = event.target;
//       if (!(formTarget instanceof HTMLFormElement)) {
//         return;
//       }
//       const login = formTarget.querySelector('input[name="login"]') as HTMLInputElement;
//       const password = formTarget.querySelector('input[name="password"]') as HTMLInputElement;

//       if (login.value === 'Tyler' && password.value === 'Derden') {
//         AppRouter.setCurrentRout('CHAT');
//         root.innerHTML = AppContainer();
//         addAppEventListeners();
//         form.reset();
//       }
//     });
//   }

//   // APP ROUTE TESTING
//   const buttons = document.querySelectorAll('[data-route]');
//   if (buttons.length) {
//     buttons.forEach((button) => {
//       button.addEventListener('click', (event) => {
//         if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.route) {
//           return;
//         }
//         AppRouter.setCurrentRout(event.target.dataset.route);
//         root.innerHTML = AppContainer();
//         addAppEventListeners();
//       });
//     });
//   }

//   // APP 500 ROUTE TESTING
//   const serverErrorButton = document.querySelector('#server-error');
//   if (serverErrorButton) {
//     serverErrorButton.addEventListener('click', (event) => {
//       if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.server) {
//         return;
//       }
//       AppRouter.setCurrentRout(event.target.dataset.server);
//       root.innerHTML = AppContainer();
//       addAppEventListeners();
//     });
//   }

//   // GO TO PREVIOUS MAIN ROUTE TESTING
//   const goToPreviousAppButton = document.querySelector('#return');
//   if (goToPreviousAppButton) {
//     goToPreviousAppButton.addEventListener('click', () => {
//       AppRouter.setPreviousRout();
//       if (window.location.href !== `${window.location.origin}/`) {
//         window.history.back();
//       }
//       root.innerHTML = AppContainer();
//       addAppEventListeners();
//     });
//   }

//   // DIALOG ROUTE TESTING
//   const dialogButtons = document.querySelectorAll('[data-dialog]');
//   if (dialogButtons) {
//     dialogButtons.forEach((button) => {
//       button.addEventListener('click', (event) => {
//         const target = event.currentTarget;
//         if (!(target instanceof HTMLDivElement) || !target.dataset.dialog) {
//           return;
//         }
//         ChatMainRouter.setCurrentRout(target.dataset.dialog);
//         root.innerHTML = AppContainer();
//         addAppEventListeners();
//       });
//     });
//   }

//   // PROFILE ROUTE TESTING
//   const editButton = document.querySelector('#profile');
//   if (editButton) {
//     editButton.addEventListener('click', (event) => {
//       if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.main) {
//         return;
//       }
//       ChatMainRouter.setCurrentRout(event?.target?.dataset.main);
//       root.innerHTML = AppContainer();
//       addAppEventListeners();
//     });
//   }

//   // GO TO PREVIOUS MAIN ROUTE TESTING
//   const goToPreviousMainButton = document.querySelector(
//     '#go-to-previous-chat-main',
//   );
//   if (goToPreviousMainButton) {
//     goToPreviousMainButton.addEventListener('click', () => {
//       ChatMainRouter.setPreviousRout();
//       root.innerHTML = AppContainer();
//       addAppEventListeners();
//     });
//   }

//   // CHANGE DATA ROUTE TESTING
//   const changeDataButton = document.querySelector('#change-data');
//   if (changeDataButton) {
//     changeDataButton.addEventListener('click', (event) => {
//       if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.main) {
//         return;
//       }
//       ChatMainRouter.setCurrentRout(event.target.dataset.main);
//       root.innerHTML = AppContainer();
//       addAppEventListeners();
//     });
//   }

//   // CHANGE PASSWORD ROUTE TESTING
//   const changePasswordButton = document.querySelector('#change-password');
//   if (changePasswordButton) {
//     changePasswordButton.addEventListener('click', (event) => {
//       if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.main) {
//         return;
//       }
//       ChatMainRouter.setCurrentRout(event.target.dataset.main);
//       root.innerHTML = AppContainer();
//       addAppEventListeners();
//     });
//   }
// }

// if (root) {
//   root.innerHTML = AppContainer();
//   addAppEventListeners();
// }
