import {
  Input, Button, RouteButton, Form,
} from 'shared';
import { INTL } from './constants';
import template from './container/SignIn.hbs';
import styles from './styles/styles.module.css';

export const SignInPage = () => template({
  styles,
  Form: Form({
    title: INTL.TITLE,
    children: [
      Input({
        label: INTL.LOGIN.LABLE,
        type: INTL.LOGIN.TYPE,
        name: INTL.LOGIN.NAME,
        placeholder: INTL.LOGIN.PLACEHOLDER,
        required: true,
      }),
      Input({
        label: INTL.PASSWORD.LABLE,
        type: INTL.PASSWORD.TYPE,
        name: INTL.PASSWORD.NAME,
        placeholder: INTL.PASSWORD.PLACEHOLDER,
        required: true,
      }),
    ],
    SubmitButton: Button({
      className: styles.signin__submit,
      type: INTL.SUBMIT_BUTTON.TYPE,
      label: INTL.SUBMIT_BUTTON.LABEL,
    }),
    RouteButton: RouteButton({
      className: styles.signin__signup,
      type: INTL.ROUTE_BUTTON.TYPE,
      label: INTL.ROUTE_BUTTON.LABEL,
      route: INTL.ROUTE_BUTTON.ROUTE,
    }),
  }),
});
