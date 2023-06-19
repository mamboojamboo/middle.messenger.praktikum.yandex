import template from './container/RouteButton.hbs';


export const RouteButton = ({className, type, label, route}) => {
	return template({className, type, label, route})
};
