import { Block } from 'shared';
import template from './container/SearchDialog.hbs';
import styles from './styles/styles.module.css';

export class SearchDialog extends Block {
  constructor() {
    super('section', { attr: { class: styles.search } });
  }

  render() {
    return this.compile(template, { styles, placeholder: 'Find a space monkey' });
  }
}
