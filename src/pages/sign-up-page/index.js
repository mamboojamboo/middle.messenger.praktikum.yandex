import { Input, Button, RouteButton, Form } from 'shared';

import { INTL } from './constants';
import template from './container/SignUp.hbs';
import * as styles from './styles/styles.module.css';


export const SignUpPage = () => {
	return template({
		styles,
		Form: 
			Form({
				title: INTL.TITLE,
				children: [
					Input({
						label: INTL.EMAIL.LABLE,
						type: INTL.EMAIL.TYPE,
						name: INTL.EMAIL.NAME,
						placeholder: INTL.EMAIL.PLACEHOLDER,
						required: true
					}),
					Input({
						label: INTL.LOGIN.LABLE,
						type: INTL.LOGIN.TYPE,
						name: INTL.LOGIN.NAME,
						placeholder: INTL.LOGIN.PLACEHOLDER,
						required: true
					}),
					Input({
						label: INTL.FIRST_NAME.LABLE,
						type: INTL.FIRST_NAME.TYPE,
						name: INTL.FIRST_NAME.NAME,
						placeholder: INTL.FIRST_NAME.PLACEHOLDER,
						required: true
					}),
					Input({
						label: INTL.SECOND_NAME.LABLE,
						type: INTL.SECOND_NAME.TYPE,
						name: INTL.SECOND_NAME.NAME,
						placeholder: INTL.SECOND_NAME.PLACEHOLDER,
						required: true
					}),
					Input({
						label: INTL.PHONE_NUMBER.LABLE,
						type: INTL.PHONE_NUMBER.TYPE,
						name: INTL.PHONE_NUMBER.NAME,
						placeholder: INTL.PHONE_NUMBER.PLACEHOLDER,
						required: true
					}),
					Input({
						label: INTL.PASSWORD.LABLE,
						type: INTL.PASSWORD.TYPE,
						name: INTL.PASSWORD.NAME,
						placeholder: INTL.PASSWORD.PLACEHOLDER,
						required: true
					}),
					Input({
						label: INTL.REPEAT_PASSWORD.LABLE,
						type: INTL.REPEAT_PASSWORD.TYPE,
						name: INTL.REPEAT_PASSWORD.NAME,
						placeholder: INTL.REPEAT_PASSWORD.PLACEHOLDER,
						required: true
					}),
				],
				SubmitButton: Button({
					className: styles.signup__submit,
					type: INTL.SUBMIT_BUTTON.TYPE,
					label: INTL.SUBMIT_BUTTON.LABEL
				}),
				RouteButton: RouteButton({
					className: styles.signup__signin,
					type: INTL.ROUTE_BUTTON.TYPE,
					label: INTL.ROUTE_BUTTON.LABEL,
					route: INTL.ROUTE_BUTTON.ROUTE
				})
			})
	});
};
