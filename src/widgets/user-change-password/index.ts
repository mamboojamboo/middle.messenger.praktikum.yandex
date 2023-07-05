import { GoToPreviousChatMain } from 'features';
import { UserAvatar } from 'entities';
import {
  TopPanel, Input, Button, Block, handleSubmit, Form,
} from 'shared';
import template from './container/UserChangePassword.hbs';
import styles from './styles/styles.module.css';
import { INTL } from './constants';
import { mockData } from './model';

export class UserChangePassword extends Block {
  constructor() {
    super('section', { attr: { class: styles['user-change-password'] } });
  }

  init() {
    this.children.topPanel = new TopPanel({
      title: INTL.title,
      buttons: new GoToPreviousChatMain(),
    });
    this.children.userAvatar = new UserAvatar({
      url: mockData.url,
      name: mockData.name,
    });
    this.children.form = new Form({
      title: '',
      events: {
        submit: (event) => handleSubmit(event, INTL.SUBMIT_BUTTON.HANDLESUBMIT_TITLE),
      },
      children: [
        new Input({
          label: INTL.OLD_PASSWORD.LABLE,
          type: INTL.OLD_PASSWORD.TYPE,
          name: INTL.OLD_PASSWORD.NAME,
          placeholder: INTL.OLD_PASSWORD.PLACEHOLDER,
          pattern: INTL.OLD_PASSWORD.PATTERN,
          title: INTL.OLD_PASSWORD.TITLE,
          required: true,
        }),
        new Input({
          label: INTL.NEW_PASSWORD.LABLE,
          type: INTL.NEW_PASSWORD.TYPE,
          name: INTL.NEW_PASSWORD.NAME,
          placeholder: INTL.NEW_PASSWORD.PLACEHOLDER,
          pattern: INTL.NEW_PASSWORD.PATTERN,
          title: INTL.NEW_PASSWORD.TITLE,
          required: true,
        }),
        new Input({
          label: INTL.REPEAT_PASSWORD.LABLE,
          type: INTL.REPEAT_PASSWORD.TYPE,
          name: INTL.REPEAT_PASSWORD.NAME,
          placeholder: INTL.REPEAT_PASSWORD.PLACEHOLDER,
          pattern: INTL.REPEAT_PASSWORD.PATTERN,
          title: INTL.REPEAT_PASSWORD.TITLE,
          required: true,
        }),
      ],
      SubmitButton: new Button({
        label: INTL.SUBMIT_BUTTON.LABEL,
        attr: {
          class: styles['user-change-password__save-button'],
          type: INTL.SUBMIT_BUTTON.TYPE,
        },
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
