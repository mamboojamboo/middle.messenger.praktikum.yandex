import { Block } from 'shared';
import template from './container/GoToPreviousChatMain.hbs';
import styles from './styles/styles.module.css';

export class GoToPreviousChatMain extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, { styles });
  }
}
