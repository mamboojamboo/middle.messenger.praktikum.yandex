import template from './container/SearchDialog.hbs';
import styles from './styles/styles.module.css';

export const SearchDialog = () => template({
  styles,
  placeholder: 'Find a space monkey',
});
