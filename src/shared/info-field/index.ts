import template from './container/InfoField.hbs';
import styles from './styles/styles.module.css';

type TInfoFieldProps = {
  title: string;
  name: string;
  value: string;
  isEdit: boolean;
}

export const InfoField = ({
  title, name, value, isEdit,
}: TInfoFieldProps) => template({
  styles, title, name, value, isEdit,
});
