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
      title: 'email', name: 'email', value: email, isEdit,
    });
    this.children.login = new InfoField({
      title: 'login', name: 'login', value: login, isEdit,
    });
    this.children.firstName = new InfoField({
      title: 'firstName',
      name: 'first_name',
      value: firstName,
      isEdit,
    });
    this.children.lastName = new InfoField({
      title: 'lastName',
      name: 'second_name',
      value: lastName,
      isEdit,
    });
    this.children.nickName = new InfoField({
      title: 'nickName',
      name: 'display_name',
      value: nickName,
      isEdit,
    });
    this.children.phone = new InfoField({
      title: 'phone', name: 'phone', value: phone, isEdit,
    });
    this.children.avatar = new InfoField({
      title: 'avatar',
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
