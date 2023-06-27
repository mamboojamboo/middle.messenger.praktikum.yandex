import { SendMessage } from 'features';
import { TopPanel } from 'shared';
import { ControlPanel } from './ui';
import template from './container/ChatDialog.hbs';
import styles from './styles/styles.module.css';
import { mockData } from './model';

export const ChatDialog = () => template({
  styles,
  TopPanel: TopPanel({
    title: mockData.title,
    subTitle: mockData.subTitle,
    buttons: ControlPanel,
  }),
  SendMessage,
});
