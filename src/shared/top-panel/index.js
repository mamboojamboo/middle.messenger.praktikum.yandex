import template from './container/TopPanel.hbs';
import styles from './styles/styles.module.css';


export const TopPanel = ({title, subTitle, buttons}) => {
    return template({styles, title, subTitle, buttons});
};
