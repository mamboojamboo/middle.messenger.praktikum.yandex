import template from './container/Input.hbs';
import styles from './styles/styles.module.css';

type TInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string | null;
  required: boolean;
}

export const Input = ({
  label, type, name, placeholder, required,
}: TInputProps) => template({
  styles, label, type, name, placeholder, required,
});
