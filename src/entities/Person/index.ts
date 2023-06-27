import template from './container/Person.hbs';
import styles from './styles/styles.module.css';
import { Avatar, FullName, Profession } from './ui';

type TPersonProps = {
  url: string;
  firstName: string;
  secondName: string;
  profession: string
}

export const Person = ({
  url, firstName, secondName, profession,
}: TPersonProps) => template({
  styles,
  Avatar: Avatar({ url, firstName, secondName }),
  FullName: FullName({ firstName, secondName }),
  Profession: Profession({ profession }),
});
