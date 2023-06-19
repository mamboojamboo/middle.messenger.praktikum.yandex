import template from './container/Input.hbs';
import styles from './styles/styles.module.css';


export const Input = ({label, type, name, placeholder, required} = {}) => {	
	return template({styles, label, type, name, placeholder, required});
};
