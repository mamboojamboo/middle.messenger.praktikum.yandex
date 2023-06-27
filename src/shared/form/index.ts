import template from './container/Form.hbs';
import styles from './styles/styles.module.css';

type TFormProps = {
  title: string;
  children: string[];
  SubmitButton: string;
  RouteButton: string;
}

export const Form = ({
  title, children, SubmitButton, RouteButton,
}: TFormProps) => template({
  styles,
  title,
  children,
  SubmitButton,
  RouteButton,
});
