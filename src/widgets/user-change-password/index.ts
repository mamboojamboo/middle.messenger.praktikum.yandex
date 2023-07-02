import { GoToPreviousChatMain } from 'features';
import { UserAvatar } from 'entities';
import {
  TopPanel, Input, Button, Block, handleSubmit,
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
    this.children.oldPassword = new Input({
      label: 'Old password',
      type: 'password',
      name: 'oldPassword',
      placeholder: null,
      required: true,
    });
    this.children.newPassword = new Input({
      label: 'New password',
      type: 'password',
      name: 'newPassword',
      placeholder: null,
      required: true,
    });
    this.children.repeatPassword = new Input({
      label: 'Repeat new password',
      type: 'password',
      name: 'repeatPassword',
      placeholder: null,
      required: true,
    });
    this.children.submitButton = new Button({
      label: INTL.SUBMIT_BUTTON.LABEL,
      attr: {
        class: styles['user-change-password__save-button'],
        type: INTL.SUBMIT_BUTTON.TYPE,
      },
      events: {
        click: (event: MouseEvent) => handleSubmit(event, INTL.SUBMIT_BUTTON.HANDLESUBMIT_TITLE),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
