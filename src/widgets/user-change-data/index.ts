import { GoToPreviousChatMain } from 'features';
import { UserAvatar, UserInfo } from 'entities';
import { TopPanel, Block } from 'shared';
import template from './container/UserChangeData.hbs';
import styles from './styles/styles.module.css';
import { INTL } from './constants';
import { mockData } from './model';

export class UserChangeData extends Block {
  constructor() {
    super('section', { attr: { class: styles.container } });
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
    this.children.userInfo = new UserInfo({
      email: mockData.email,
      login: mockData.login,
      firstName: mockData.firstName,
      lastName: mockData.lastName,
      nickName: mockData.nickName,
      phone: mockData.phone,
      avatar: mockData.avatar,
      isEdit: true,
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
