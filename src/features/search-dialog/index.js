import template from  './container/SearchDialog.hbs';
import styles from './styles/styles.module.css';


export const SearchDialog = () => {
	return template({
		styles,
		placeholder: 'Find a space monkey'
	});
};
