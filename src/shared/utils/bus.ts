type Handler<A extends unknown[] = unknown[]> = (...args: A) => void;
type MapInterface<P> = P[keyof P]

export class EventBus<
  E extends Record<string, string> = Record<string, string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Args extends Record<MapInterface<E>, unknown[]> = Record<string, any[]>
> {
  private readonly listeners: {
    [K in MapInterface<E>]?: Handler<Args[K]>[]
  } = {};

  on<Event extends MapInterface<E>>(event: Event, callback: Handler<Args[Event]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off<Event extends MapInterface<E>>(event: Event, callback: Handler<Args[Event]>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]?.filter(
      (listener) => listener !== callback,
    );
  }

  emit<Event extends MapInterface<E>>(event: Event, ...args: Args[Event]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]?.forEach((listener) => {
      listener(...args);
    });
  }
}
