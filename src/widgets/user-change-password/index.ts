import { GoToPreviousChatMain } from 'features';
import { UserAvatar } from 'entities';
import { TopPanel, Input } from 'shared';
import template from './container/UserChangePassword.hbs';
import styles from './styles/styles.module.css';
import { INTL } from './constants';
import { mockData } from './model';

export const UserChangePassword = () => template({
  styles,
  TopPanel: TopPanel({
    title: INTL.title,
    buttons: GoToPreviousChatMain,
  }),
  UserAvatar: UserAvatar({
    url: mockData.url,
    name: mockData.name,
  }),
  oldPassword: Input({
    label: 'Old password',
    type: 'password',
    name: 'oldPassword',
    placeholder: null,
    required: true,
  }),
  newPassword: Input({
    label: 'New password',
    type: 'password',
    name: 'newPassword',
    placeholder: null,
    required: true,
  }),
  repeatPassword: Input({
    label: 'Repeat new password',
    type: 'password',
    name: 'repeatPassword',
    placeholder: null,
    required: true,
  }),
});
