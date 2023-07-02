import { Block } from 'shared';
import template from './container/AddUserToChatButton.hbs';
import styles from './styles/styles.module.css';

export class AddUserToChatButton extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, { styles });
  }
}
