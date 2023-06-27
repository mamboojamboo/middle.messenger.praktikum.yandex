import template from './container/TopPanel.hbs';
import styles from './styles/styles.module.css';

type TTopPanelProps = {
  title: string;
  subTitle?: string;
  buttons: () => string;
}

export const TopPanel = ({ title, subTitle, buttons }: TTopPanelProps) => template({
  styles, title, subTitle, buttons,
});
