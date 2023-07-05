export const INTL = {
  TITLE: 'Sign in',
  LOGIN: {
    LABLE: 'Login',
    TYPE: 'text',
    NAME: 'login',
    PLACEHOLDER: 'Enter login',
    PATTERN: '^(?=.*[a-zA-Z])(?!.*\d{3,20}$)[a-zA-Z\d_-]{3,20}$',
    TITLE: 'Текст должен содержать только буквы и дефисы',
  },
  PASSWORD: {
    LABLE: 'Password',
    TYPE: 'password',
    NAME: 'password',
    PLACEHOLDER: 'Enter password',
    PATTERN: '^(?=.*\d)(?=.*[A-Z]).{8,40}$',
    TITLE: 'от 8 до 40 символов, одна заглавная буква и цифра',
  },
  SUBMIT_BUTTON: {
    LABEL: 'Sign in',
    TYPE: 'submit',
    HANDLESUBMIT_TITLE: 'SignIn Form: ',
  },
  ROUTE_BUTTON: {
    LABEL: 'Sign up',
    TYPE: 'button',
    ROUTE: 'SIGN_UP',
  },
};
