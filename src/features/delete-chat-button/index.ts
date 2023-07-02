import { Block } from 'shared';
import template from './container/DeleteChatButton.hbs';
import styles from './styles/styles.module.css';

export class DeleteChatButton extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, { styles });
  }
}
