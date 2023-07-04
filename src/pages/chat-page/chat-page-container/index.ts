import { ChatSide } from 'widgets';
import { Block } from 'shared';
import template from './container/ChatPage.hbs';
import styles from './styles/styles.module.css';

type TChatPageProps = {
  page?: Block,
  attr?: { class?: string }
}

export class ChatPage extends Block<TChatPageProps> {
  constructor(props: TChatPageProps) {
    super('section', { ...props, attr: { class: styles.chat__page } });
  }

  render() {
    this.children.side = new ChatSide();
    return this.compile(template, { styles });
  }
}
