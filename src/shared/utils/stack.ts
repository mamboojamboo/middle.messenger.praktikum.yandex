export class Stack {
  #stack: string[] = [];

  push = (value: string) => {
    this.#stack.push(value);
  };

  pop = () => {
    this.#stack.pop();
  };

  getTailElement = () => this.#stack[this.#stack.length - 1];
}
