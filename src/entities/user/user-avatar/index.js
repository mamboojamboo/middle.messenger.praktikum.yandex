import template from './container/UserAvatar.hbs';
import styles from './styles/styles.module.css';


export const UserAvatar = ({url, name}) => {
    return template({styles, url, name});
};
