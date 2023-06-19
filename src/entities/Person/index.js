import template from './container/Person.hbs';
import styles from './styles/styles.module.css';

import { Avatar, FullName, Profession } from './ui';


export const Person = ({url, first_name, second_name, profession}) => {
	return template({
		styles,
		Avatar: Avatar({url, first_name, second_name}),
		FullName: FullName({first_name, second_name}),
		Profession: Profession({profession})
	});
};
