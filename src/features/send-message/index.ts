import { Block, Button, handleSubmit } from 'shared';
import { AttachFilesToMessage } from '../attach-files-to-message';
import { INTL } from './constants';
import template from './container/SendMessage.hbs';
import styles from './styles/styles.module.css';

export class SendMessage extends Block {
  constructor() {
    super('form', { attr: { class: styles['send-message'] } });
  }

  // eslint-disable-next-line class-methods-use-this

  init() {
    this.children.attachFilesToMessage = new AttachFilesToMessage();
    this.children.submitButton = new Button({
      label: INTL.SUBMIT_BUTTON.LABEL,
      attr: {
        class: styles['send-message__submit'],
        type: INTL.SUBMIT_BUTTON.TYPE,
      },
      events: {
        click: (event: MouseEvent) => handleSubmit(event, INTL.SUBMIT_BUTTON.HANDLESUBMIT_TITLE),
      },
    });
  }

  render() {
    return this.compile(template, { styles });
  }
}
