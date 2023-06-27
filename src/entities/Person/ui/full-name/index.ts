import template from './container/FullName.hbs';
import styles from './styles/styles.module.css';

type TFullNameProps = {
  firstName: string;
  secondName: string;
}

export const FullName = ({ firstName, secondName }: TFullNameProps) => template({
  styles,
  firstName,
  secondName,
});
