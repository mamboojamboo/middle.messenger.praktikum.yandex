import {
    AddUserToChatButton,
    DeleteUserButton,
    DeleteChatButton,
    GoToPreviousChatMain
} from 'features';

import template from './container/ControlPanel.hbs';
import styles from './styles/styles.module.css';


export const ControlPanel = () => {
    const buttons = [AddUserToChatButton, DeleteUserButton, DeleteChatButton, GoToPreviousChatMain];

    return template({styles, buttons});
};
