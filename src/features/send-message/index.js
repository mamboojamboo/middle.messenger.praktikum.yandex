import {AttachFilesToMessage} from 'features';

import template from './container/SendMessage.hbs';
import styles from './styles/styles.module.css';


export const SendMessage = () => {
    return template({
        styles,
        AttachFilesToMessage
    });
};
