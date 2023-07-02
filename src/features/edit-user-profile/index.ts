import { Block } from 'shared';
import template from './container/EditUserProfile.hbs';
import styles from './styles/styles.module.css';

export class EditUserProfile extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, { styles });
  }
}
