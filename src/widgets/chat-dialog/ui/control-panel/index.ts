import {
  AddUserToChatButton,
  DeleteUserButton,
  DeleteChatButton,
  GoToPreviousChatMain,
} from 'features';
import { Block } from 'shared';
import template from './container/ControlPanel.hbs';
import styles from './styles/styles.module.css';

const buttons = [
  new AddUserToChatButton(),
  new DeleteUserButton(),
  new DeleteChatButton(),
  new GoToPreviousChatMain(),
];

export class ControlPanel extends Block {
  constructor() {
    super('div', { attr: { class: styles['control-panel'] } });
  }

  init() {
    this.children.buttons = buttons;
  }

  render() {
    return this.compile(template, { styles });
  }
}
