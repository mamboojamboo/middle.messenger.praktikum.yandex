import {
  InfoField, Button, Block, handleSubmit,
} from 'shared';
import { INTL } from './constants';
import template from './container/UserInfo.hbs';
import styles from './styles/styles.module.css';

type TUserInfoProps = {
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  nickName: string;
  phone: string;
  avatar: string;
  isEdit?: boolean;
  attr?: {
    class?: string;
  }
}

export class UserInfo extends Block<TUserInfoProps> {
  constructor(props: TUserInfoProps) {
    super('section', { ...props, attr: { class: styles.container } });
  }

  init() {
    const {
      email, login, firstName, lastName, nickName, phone, avatar, isEdit = false,
    } = this.props;
    this.children.email = new InfoField({
      header: 'email',
      title: 'Неверный формат email',
      pattern: '^[^\s@]+@[^\s@]+\.[^@]{2,}$',
      name: 'email',
      value: email,
      isEdit,
    });
    this.children.login = new InfoField({
      header: 'login',
      title: 'Текст должен содержать только буквы и дефисы',
      pattern: '^(?=.*[a-zA-Z])(?!.*\d{3,20}$)[a-zA-Z\d_-]{3,20}$',
      name: 'login',
      value: login,
      isEdit,
    });
    this.children.firstName = new InfoField({
      header: 'firstName',
      title: 'Первая буква заглавная, латиница/кириллица и дефис',
      pattern: '^[A-Z\u0410-\u042F\u0401][\w\u0410-\u042F\u0401\u0430-\u044F\u0451-]*$',
      name: 'first_name',
      value: firstName,
      isEdit,
    });
    this.children.lastName = new InfoField({
      header: 'lastName',
      title: 'Первая буква заглавная, латиница/кириллица и дефис',
      pattern: '^[A-Z\u0410-\u042F\u0401][\w\u0410-\u042F\u0401\u0430-\u044F\u0451-]*$',
      name: 'second_name',
      value: lastName,
      isEdit,
    });
    this.children.nickName = new InfoField({
      header: 'nickName',
      title: 'Текст должен содержать только буквы и дефисы',
      pattern: '^(?=.*[a-zA-Z])(?!.*\d{3,20}$)[a-zA-Z\d_-]{3,20}$',
      name: 'display_name',
      value: nickName,
      isEdit,
    });
    this.children.phone = new InfoField({
      header: 'phone',
      title: 'Цифры и плюс в начале, длина от 10 до 15',
      pattern: '^[+]{0,1}[0-9]{10,15}$',
      name: 'phone',
      value: phone,
      isEdit,
    });
    this.children.avatar = new InfoField({
      header: 'avatar',
      name: 'avatar',
      value: avatar,
      isEdit,
    });
    this.children.submitButton = new Button({
      label: INTL.SUBMIT_BUTTON.LABEL,
      attr: {
        class: styles['user-info__save-button'],
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
