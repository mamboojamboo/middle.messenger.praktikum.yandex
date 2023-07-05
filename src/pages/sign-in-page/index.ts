import {
  Input, Button, RouteButton, Form, Block,
} from 'shared';
import { INTL } from './constants';
import template from './container/SignIn.hbs';
import styles from './styles/styles.module.css';

export class SignInPage extends Block {
  constructor() {
    super('div', { attr: { class: styles.signin } });
  }

  init() {
    this.children.Form = new Form({
      title: INTL.TITLE,
      name: INTL.TITLE,
      children: [
        new Input({
          label: INTL.LOGIN.LABLE,
          type: INTL.LOGIN.TYPE,
          name: INTL.LOGIN.NAME,
          placeholder: INTL.LOGIN.PLACEHOLDER,
          pattern: INTL.LOGIN.PATTERN,
          title: INTL.LOGIN.TITLE,
          required: true,
        }),
        new Input({
          label: INTL.PASSWORD.LABLE,
          type: INTL.PASSWORD.TYPE,
          name: INTL.PASSWORD.NAME,
          placeholder: INTL.PASSWORD.PLACEHOLDER,
          pattern: INTL.PASSWORD.PATTERN,
          title: INTL.PASSWORD.TITLE,
          required: true,
        }),
      ],
      SubmitButton: new Button({
        label: INTL.SUBMIT_BUTTON.LABEL,
        attr: {
          class: styles.signin__submit,
          type: INTL.SUBMIT_BUTTON.TYPE,
        },
      }),
      RouteButton: new RouteButton({
        label: INTL.ROUTE_BUTTON.LABEL,
        attr: {
          class: styles.signin__signup,
          type: INTL.ROUTE_BUTTON.TYPE,
          'data-route': INTL.ROUTE_BUTTON.ROUTE,
        },
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
