import { Stack } from './stack';

export class Router {
  #history = new Stack();

  #routes: Record<string, () => string> = {};

  #currentPage: null | (() => string) = null;

  constructor(routes: Record<string, () => string>) {
    this.#routes = { ...routes };
  }

  getCurrentRout = () => this.#history.getTailElement();

  setCurrentRout = (rout: string) => {
    if (this.getCurrentRout() !== rout) {
      this.#history.push(rout);
      this.setCurrentPage(this.getCurrentRout());
    }
  };

  setPreviousRout = () => {
    this.#history.pop();
    this.setCurrentPage(this.getCurrentRout());
  };

  getCurrentPage = () => this.#currentPage;

  setCurrentPage = (rout: string) => {
    this.#currentPage = this.#routes[rout || 'NOT_FOUND'];
  };
}
