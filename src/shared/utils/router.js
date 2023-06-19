class Stack {
	#stack  = [];

	push = (value) => {
		this.#stack.push(value);
	};

	pop = () => {
		this.#stack.pop();
	};

	getTailElement = () => {
		return this.#stack[this.#stack.length - 1];
	}
};

export class Router {
	#history = new Stack();
	#routes = {};
	#currentPage = null;

	constructor(routes) {
		this.#routes = {...routes};
	};

	getCurrentRout = () => {
		return this.#history.getTailElement();
	};

	setCurrentRout = (rout) => {
		if (this.getCurrentRout() !== rout) {
			this.#history.push(rout);
			this.setCurrentPage(this.getCurrentRout());
		}
	};

	setPreviousRout = () => {
		this.#history.pop();
		this.setCurrentPage(this.getCurrentRout());
	};

	getCurrentPage = () => {
		return this.#currentPage;
	};

	setCurrentPage = (rout) => {
		this.#currentPage = this.#routes[rout || 'NOT_FOUND'];
	};
};
