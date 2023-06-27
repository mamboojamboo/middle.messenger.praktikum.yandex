import template from './container/UserAvatar.hbs';
import styles from './styles/styles.module.css';

type TUserAvatarProps = {
    url: string;
    name: string;
}

export const UserAvatar = ({ url, name }: TUserAvatarProps) => template({ styles, url, name });
