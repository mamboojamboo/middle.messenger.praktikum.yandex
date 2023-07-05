import { Block } from './block';
import { Stack } from './stack';

export class Router<T extends Block> {
  #history = new Stack();

  #routes: Record<string, T>;

  #currentPage: T;

  #appContainer: new (props: { page: T }) => T;

  constructor(routes: Record<string, T>, appContainer: new (props: { page: T }) => T) {
    this.#routes = { ...routes };
    this.#appContainer = appContainer;
    this.#currentPage = this.#routes.NOT_FOUND;
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    console.log('App starting...');
    this.setCurrentRout('SIGN_IN');
    return true;
  }

  getCurrentRout = () => this.#history.getTailElement();

  setCurrentRout = (route: string) => {
    if (this.getCurrentRout() !== route) {
      this.#history.push(route);
      this.setCurrentPage(this.getCurrentRout());
    }
  };

  setPreviousRout = () => {
    this.#history.pop();
    this.setCurrentPage(this.getCurrentRout());
  };

  getCurrentPage = () => this.#currentPage;

  setCurrentPage = (route: string) => {
    this.#currentPage = this.#routes[route || 'NOT_FOUND'];

    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = '';

      const appContainerInstance = new this.#appContainer({ page: this.#currentPage });

      if (appContainerInstance) {
        root.append(appContainerInstance.getContent());
        appContainerInstance.dispatchComponentDidMount();

        const form = document.querySelector('form');
        if (form && form.name === 'Sign in') {
          form.addEventListener('submit', (event) => {
            const formTarget = event.target;

            if (!(formTarget instanceof HTMLFormElement)) {
              return;
            }

            const formElements = formTarget ? Array.from(formTarget.elements) : [];
            const result = formElements.reduce<Record <string, string>>((acc, cur) => {
              if (cur instanceof HTMLInputElement) {
                acc[cur.name] = cur.value;
              }
              return acc;
            }, {});

            console.log('SignIn Form', result);

            const login = formTarget.querySelector('input[name="login"]') as HTMLInputElement;
            const password = formTarget.querySelector('input[name="password"]') as HTMLInputElement;

            if (login.value === 'Tyler' && password.value === 'Derden123') {
              form.reset();
              this.setCurrentRout('CHAT');
            }
          });
        }

        // APP ROUTE TESTING
        const buttons = document.querySelectorAll('[data-route]');
        if (buttons.length) {
          buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
              if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.route) {
                return;
              }
              this.setCurrentRout(event.target.dataset.route);
            });
          });
        }

        // APP 500 ROUTE TESTING
        const serverErrorButton = document.querySelector('#server-error');
        if (serverErrorButton) {
          serverErrorButton.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.route) {
              return;
            }
            this.setCurrentRout(event.target.dataset.route);
          });
        }

        // GO TO PREVIOUS MAIN ROUTE TESTING
        const goToPreviousAppButton = document.querySelector('#return');
        if (goToPreviousAppButton) {
          goToPreviousAppButton.addEventListener('click', () => {
            this.setPreviousRout();
            if (window.location.href !== `${window.location.origin}/`) {
              window.history.back();
            }
          });
        }

        // DIALOG ROUTE TESTING
        const dialogButtons = document.querySelectorAll('[data-dialog]');
        if (dialogButtons) {
          dialogButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
              const target = event.currentTarget;
              if (!(target instanceof HTMLDivElement) || !target.dataset.dialog) {
                return;
              }
              this.setCurrentRout(target.dataset.dialog);
            });
          });
        }

        // PROFILE ROUTE TESTING
        const editButton = document.querySelector('#profile');
        if (editButton) {
          editButton.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.main) {
              return;
            }
            this.setCurrentRout(event?.target?.dataset.main);
          });
        }

        // GO TO PREVIOUS MAIN ROUTE TESTING
        const goToPreviousMainButton = document.querySelector(
          '#go-to-previous-chat-main',
        );
        if (goToPreviousMainButton) {
          goToPreviousMainButton.addEventListener('click', () => {
            this.setPreviousRout();
          });
        }

        // CHANGE DATA ROUTE TESTING
        const changeDataButton = document.querySelector('#change-data');
        if (changeDataButton) {
          changeDataButton.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.main) {
              return;
            }
            this.setCurrentRout(event.target.dataset.main);
          });
        }

        // CHANGE PASSWORD ROUTE TESTING
        const changePasswordButton = document.querySelector('#change-password');
        if (changePasswordButton) {
          changePasswordButton.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLButtonElement) || !event.target.dataset.main) {
              return;
            }
            this.setCurrentRout(event.target.dataset.main);
          });
        }
      }
    }
  };
}
