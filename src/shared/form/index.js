import template from './container/Form.hbs';
import styles from './styles/styles.module.css';


export const Form = ({title, children, SubmitButton, RouteButton} = {}) => {
	return template({
		styles,
		title,
		children,
		SubmitButton,
		RouteButton
	});
};
