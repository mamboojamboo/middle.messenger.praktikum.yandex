import { Block } from '../utils';
import template from './container/TopPanel.hbs';
import styles from './styles/styles.module.css';

type TTopPanelProps = {
  title: string;
  subTitle?: string;
  buttons: Block;
  attr?: {
    class?: string
  }
}

export class TopPanel extends Block<TTopPanelProps> {
  constructor(props: TTopPanelProps) {
    super('section', { ...props, attr: { class: styles.container } });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
