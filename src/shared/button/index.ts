import template from './container/Button.hbs';

type TButtonProps = {
    className: string;
    type: string;
    label: string;
}

export const Button = ({
  className, type, label,
}: TButtonProps) => template({ className, type, label });
