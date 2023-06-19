import template from './container/FullName.hbs';
import styles from './styles/styles.module.css';


export const FullName = ({first_name, second_name}) => {
	return template({
		styles,
		first_name,
		second_name
	});
};
