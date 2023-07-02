import { Block } from 'shared';
import template from './container/Person.hbs';
import styles from './styles/styles.module.css';
import { Avatar, FullName, Profession } from './ui';

type TPersonProps = {
  url: string;
  firstName: string;
  secondName: string;
  profession: string;
  attr?: {
    class?: string
  }
}

export class Person extends Block<TPersonProps> {
  constructor(props: TPersonProps) {
    super('section', { ...props, attr: { class: styles.person } });
  }

  init() {
    const {
      url, firstName, secondName, profession,
    } = this.props;
    this.children.avatar = new Avatar({
      url,
      alt: `This is personal avatar of ${firstName} ${secondName}`,
    });
    this.children.fullName = new FullName({ fullName: `${firstName} ${secondName}` });
    this.children.profession = new Profession({ profession });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
