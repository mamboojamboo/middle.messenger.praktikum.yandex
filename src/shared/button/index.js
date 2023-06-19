import template from './container/Button.hbs';


export const Button = ({className, type, label}) => {
	return template({className, type, label})
};
