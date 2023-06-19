import template from './container/Avatar.hbs';
import styles from './styles/styles.module.css';


export const Avatar = ({url, first_name, second_name}) => {
	return template({
		styles,
		url,
		alt: `This is personal avatar of ${first_name} ${second_name}`
	});
};
