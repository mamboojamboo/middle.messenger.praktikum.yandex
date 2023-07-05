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
      events: {
        submit: (event) => handleSubmit(event, INTL.SUBMIT_BUTTON.HANDLESUBMIT_TITLE),
      },
      children: [
        new Input({
          label: INTL.EMAIL.LABLE,
          type: INTL.EMAIL.TYPE,
          name: INTL.EMAIL.NAME,
          placeholder: INTL.EMAIL.PLACEHOLDER,
          pattern: INTL.EMAIL.PATTERN,
          title: INTL.EMAIL.TITLE,
          required: true,
        }),
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
          label: INTL.FIRST_NAME.LABLE,
          type: INTL.FIRST_NAME.TYPE,
          name: INTL.FIRST_NAME.NAME,
          placeholder: INTL.FIRST_NAME.PLACEHOLDER,
          pattern: INTL.FIRST_NAME.PATTERN,
          title: INTL.FIRST_NAME.TITLE,
          required: true,
        }),
        new Input({
          label: INTL.SECOND_NAME.LABLE,
          type: INTL.SECOND_NAME.TYPE,
          name: INTL.SECOND_NAME.NAME,
          placeholder: INTL.SECOND_NAME.PLACEHOLDER,
          pattern: INTL.SECOND_NAME.PATTERN,
          title: INTL.SECOND_NAME.TITLE,
          required: true,
        }),
        new Input({
          label: INTL.PHONE_NUMBER.LABLE,
          type: INTL.PHONE_NUMBER.TYPE,
          name: INTL.PHONE_NUMBER.NAME,
          placeholder: INTL.PHONE_NUMBER.PLACEHOLDER,
          pattern: INTL.PHONE_NUMBER.PATTERN,
          title: INTL.PHONE_NUMBER.TITLE,
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
          class: styles.signup__submit,
          type: INTL.SUBMIT_BUTTON.TYPE,
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
