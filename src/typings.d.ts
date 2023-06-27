declare module '*.hbs' {
  import { TemplateDelegate } from 'handlebars';

  const template: TemplateDelegate;

  export default template;
}

declare module '*.module.css';

declare module '*.png' {
  const value: string;
  export = value;
}
