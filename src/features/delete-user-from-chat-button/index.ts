import { Block } from 'shared';
import template from './container/DeleteUserButton.hbs';
import styles from './styles/styles.module.css';

export class DeleteUserButton extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, { styles });
  }
}
