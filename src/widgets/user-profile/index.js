import { GoToPreviousChatMain } from 'features';
import { UserAvatar, UserInfo } from 'entities';
import { TopPanel } from 'shared';

import template from './container/UserProfile.hbs';
import styles from './styles/styles.module.css';
import { INTL } from './constants';
import { mockData } from './model'


export const UserProfile = () => {
    return template({
        styles,
        TopPanel: TopPanel({
            title: INTL.title,
            buttons: GoToPreviousChatMain
        }),
        UserAvatar: UserAvatar({
            url: mockData.url,
            name: mockData.name
        }),
        UserInfo: UserInfo({
            email: mockData.email,
            login: mockData.login,
            firstName: mockData.firstName,
            lastName: mockData.lastName,
            nickName: mockData.nickName,
            phone: mockData.phone,
            avatar: mockData.avatar
        })
    });
};
