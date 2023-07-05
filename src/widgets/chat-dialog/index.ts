import { SendMessage } from 'features';
import { TopPanel, Block } from 'shared';
import { ControlPanel } from './ui';
import template from './container/ChatDialog.hbs';
import styles from './styles/styles.module.css';
import { mockData } from './model';

export class ChatDialog extends Block {
  constructor() {
    super('section', { attr: { class: styles.container } });
  }

  init() {
    this.children.topPanel = new TopPanel({
      title: mockData.title,
      subTitle: mockData.subTitle,
      buttons: new ControlPanel(),
    });
    this.children.sendMessage = new SendMessage();
  }

  render() {
    return this.compile(template, { styles });
  }
}
