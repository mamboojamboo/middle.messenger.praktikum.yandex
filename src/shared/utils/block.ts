/* eslint-disable */
import { TemplateDelegate } from 'handlebars';
import { EventBus } from './bus';

export class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = crypto.randomUUID();

  protected props: P;

  public children: Record<string, Block | Block[]>;

  private eventBus: () => EventBus;

  private _element: HTMLElement | null = null;

  private _meta: { tagName: string; props: P };

  // eslint-disable-next-line default-param-last
  constructor(tagName = 'div', propsWithChildren: P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);
    this._meta = { tagName, props: props as P };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): { props: P; children: Record<string, Block> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });
    return { props: props as P, children };
  }

  _addEvents() {
    const { events = {} } = this.props as P & {
        events: Record<string, () => void>;
      };
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _init() {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((el) => {
          el.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    if (this._element) {
      return this._element;
    }
    throw new Error('Нет елемента');
  }

  private _render() {
    const fragment = this.render();

    this._removeEvents();
    if (this._element) {
        this._element!.innerHTML = '';
        this._element!.append(fragment);
        this._addEvents();
        this.addAttribute();
    }

    this._addEvents();
    this.addAttribute();
  }

  protected addAttribute() {
    const { attr = {} } = this.props as P & { attr: Record<string, string> };

    Object.entries(attr).forEach(([key, value]) => {
      this.element?.setAttribute(key, value);
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
        this._element!.removeEventListener(eventName, events[eventName]);
    });
  }

  protected compile(template: (template: TemplateDelegate<any>) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map((el) => `<div data-id="${el.id}"></div>`);
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach((el) => {
          const stub = temp.content.querySelector(`[data-id="${el.id}"]`);
          if (!stub) {
            return;
          }
          el.getContent()?.append(...Array.from(stub.childNodes));
          stub.replaceWith(el.getContent()!);
        });
      } else {
        const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      }
    });

    return temp.content;
  }

  protected render() {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

//   _makePropsProxy(props: P) {
//     const proxyProps = new Proxy<P>(props, {
//       set: (target, p: string, newValue, receiver) => {
//         const oldValue = target[p];

//         if (oldValue !== newValue) {
//           target[p as keyof P] = newValue;
//           this.eventBus().emit(Block.EVENTS.FLOW_CDU);
//         }

//         return true;
//       },
//       deleteProperty() {
//         throw new Error('Нет доступа');
//       },
//     });

//     return proxyProps;
//   }

//   _createDocumentElement(tagName: string) {
//     const element = document.createElement(tagName);
//     if (this.id) {
//       if (this.props.wrapperClassName) {
//         const classes = this.props.wrapperClassName;
//         const classesArr = classes.split(' ');

//         classesArr.forEach((className: string) => {
//           element.classList.add(className);
//         });
//       }

//       element.setAttribute('data-id', this.id);
//     }

//     return element;
//   }
