import {
  Input, Button, RouteButton, Form, Block, handleSubmit,
} from 'shared';
import { INTL } from './constants';
import template from './container/SignIn.hbs';
import styles from './styles/styles.module.css';

export class SignInPage extends Block {
  constructor() {
    super('div', { attr: { class: styles.signin } });
  }

  render() {
    this.children.Form = new Form({
      title: INTL.TITLE,
      children: [
        new Input({
          label: INTL.LOGIN.LABLE,
          type: INTL.LOGIN.TYPE,
          name: INTL.LOGIN.NAME,
          placeholder: INTL.LOGIN.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.PASSWORD.LABLE,
          type: INTL.PASSWORD.TYPE,
          name: INTL.PASSWORD.NAME,
          placeholder: INTL.PASSWORD.PLACEHOLDER,
          required: true,
        }),
      ],
      SubmitButton: new Button({
        label: INTL.SUBMIT_BUTTON.LABEL,
        attr: {
          class: styles.signin__submit,
          type: INTL.SUBMIT_BUTTON.TYPE,
        },
        events: {
          click: (event: MouseEvent) => handleSubmit(event, INTL.SUBMIT_BUTTON.HANDLESUBMIT_TITLE),
        },
      }),
      RouteButton: new RouteButton({
        label: INTL.ROUTE_BUTTON.LABEL,
        attr: {
          class: styles.signin__signup,
          type: INTL.ROUTE_BUTTON.TYPE,
          'data-route': INTL.ROUTE_BUTTON.ROUTE,
        },
        events: {
          click: (event) => console.log(event),
        },
      }),
    });

    return this.compile(template, this.props);
  }
}
