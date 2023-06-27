import template from './container/Avatar.hbs';
import styles from './styles/styles.module.css';

type TAvatarProps = {
  url: string;
  firstName: string;
  secondName: string;
}

export const Avatar = ({ url, firstName, secondName }: TAvatarProps) => template({
  styles,
  url,
  alt: `This is personal avatar of ${firstName} ${secondName}`,
});
