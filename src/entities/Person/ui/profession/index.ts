import template from './container/Profession.hbs';
import styles from './styles/styles.module.css';

type TProfessionProps = {
    profession: string;
}

export const Profession = ({ profession }: TProfessionProps) => template({ styles, profession });
