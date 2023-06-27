import template from './containter/ErrorContainer.hbs';
import * as styles from './styles/styles.module.css';

type TErrorContainerProps = {
  code: string;
  description: string;
  buttonLabel: string;
}

export const ErrorContainer = ({
  code, description, buttonLabel,
}: TErrorContainerProps) => template({
  styles,
  code,
  description,
  buttonLabel,
});
