import {
  Block, Button, Input, handleSubmit,
} from 'shared';
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
    this.children.input = new Input({
      label: INTL.MESSAGE.LABLE,
      type: INTL.MESSAGE.TYPE,
      name: INTL.MESSAGE.NAME,
      placeholder: INTL.MESSAGE.PLACEHOLDER,
      pattern: INTL.MESSAGE.PATTERN,
      title: INTL.MESSAGE.TITLE,
      required: true,
    });
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
