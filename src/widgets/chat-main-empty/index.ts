import { Block } from 'shared';
import { INTL } from './constants';
import template from './container/ChatMainEmpty.hbs';
import styles from './styles/styles.module.css';

export class ChatMainEmpty extends Block {
  constructor() {
    super('section', { attr: { class: styles['chat__main--empty'] } });
  }

  render() {
    return this.compile(template, { emptyLabel: INTL.EMPTY_LABEL });
  }
}
