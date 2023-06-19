import template from './container/Profession.hbs';
import styles from './styles/styles.module.css';

export const Profession = ({profession}) => {
	return template({styles, profession});
};
