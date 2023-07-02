import { Block } from 'shared';
import template from './container/AttachFilesToMessage.hbs';
import styles from './styles/styles.module.css';

export class AttachFilesToMessage extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, { styles });
  }
}
