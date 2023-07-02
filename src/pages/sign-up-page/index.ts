import {
  Input, Button, RouteButton, Form, Block, handleSubmit,
} from 'shared';
import { INTL } from './constants';
import template from './container/SignUp.hbs';
import * as styles from './styles/styles.module.css';

export class SignUpPage extends Block {
  constructor() {
    super('div', { attr: { class: styles.signup } });
  }

  render() {
    this.children.Form = new Form({
      title: INTL.TITLE,
      children: [
        new Input({
          label: INTL.EMAIL.LABLE,
          type: INTL.EMAIL.TYPE,
          name: INTL.EMAIL.NAME,
          placeholder: INTL.EMAIL.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.LOGIN.LABLE,
          type: INTL.LOGIN.TYPE,
          name: INTL.LOGIN.NAME,
          placeholder: INTL.LOGIN.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.FIRST_NAME.LABLE,
          type: INTL.FIRST_NAME.TYPE,
          name: INTL.FIRST_NAME.NAME,
          placeholder: INTL.FIRST_NAME.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.SECOND_NAME.LABLE,
          type: INTL.SECOND_NAME.TYPE,
          name: INTL.SECOND_NAME.NAME,
          placeholder: INTL.SECOND_NAME.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.PHONE_NUMBER.LABLE,
          type: INTL.PHONE_NUMBER.TYPE,
          name: INTL.PHONE_NUMBER.NAME,
          placeholder: INTL.PHONE_NUMBER.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.PASSWORD.LABLE,
          type: INTL.PASSWORD.TYPE,
          name: INTL.PASSWORD.NAME,
          placeholder: INTL.PASSWORD.PLACEHOLDER,
          required: true,
        }),
        new Input({
          label: INTL.REPEAT_PASSWORD.LABLE,
          type: INTL.REPEAT_PASSWORD.TYPE,
          name: INTL.REPEAT_PASSWORD.NAME,
          placeholder: INTL.REPEAT_PASSWORD.PLACEHOLDER,
          required: true,
        }),
      ],
      SubmitButton: new Button({
        label: INTL.SUBMIT_BUTTON.LABEL,
        attr: {
          class: styles.signup__submit,
          type: INTL.SUBMIT_BUTTON.TYPE,
        },
        events: {
          click: (event: MouseEvent) => handleSubmit(event, INTL.SUBMIT_BUTTON.HANDLESUBMIT_TITLE),
        },
      }),
      RouteButton: new RouteButton({
        label: INTL.ROUTE_BUTTON.LABEL,
        attr: {
          class: styles.signup__signin,
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
