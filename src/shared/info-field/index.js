import template from './container/InfoField.hbs';
import styles from './styles/styles.module.css';


export const InfoField = ({title, name, value, isEdit}) => {
    return template({styles, title, name, value, isEdit});
};
