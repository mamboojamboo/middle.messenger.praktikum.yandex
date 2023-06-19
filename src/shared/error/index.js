import template from './containter/ErrorContainer.hbs';
import * as styles from './styles/styles.module.css';


export const ErrorContainer = ({code, description, buttonLabel} = {}) => {
	return template({
		styles,
		code,
		description,
		buttonLabel
	});
};
