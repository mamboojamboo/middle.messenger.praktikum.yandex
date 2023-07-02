import { NotFoundPage } from '../../not-found-page';
import { ChatSide } from 'widgets';
import { ChatMainRouter } from '../chat-main-router';
import template from './container/ChatPage.hbs';
import styles from './styles/styles.module.css';
import { Block } from 'shared';

export class ChatPage extends Block {
  constructor() {
    super('section', { attr: { class: styles.chat__page } });
  }

  init() {
    this.children.side = new ChatSide();
    this.children.main = ChatMainRouter.getCurrentPage() || new NotFoundPage();
  }

  render() {
    return this.compile(template, { styles });
  }
}
