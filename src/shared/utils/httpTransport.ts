const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: Record<string, unknown>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((
    result,
    key,
    index,
  ) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

type TOptionsHTTPTransport = {
    method: string;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    timeout?: number;
};

type TReqHTTPTransport = (url: string, options: TOptionsHTTPTransport) => Promise<unknown>

export class HTTPTransport {
  get: TReqHTTPTransport = (
    url,
    options,
  ) => this.request(url, { ...options, method: METHODS.GET });

  put: TReqHTTPTransport = (
    url,
    options,
  ) => this.request(url, { ...options, method: METHODS.PUT });

  post: TReqHTTPTransport = (
    url,
    options,
  ) => this.request(url, { ...options, method: METHODS.POST });

  delete: TReqHTTPTransport = (
    url,
    options,
  ) => this.request(url, { ...options, method: METHODS.DELETE });

  // eslint-disable-next-line class-methods-use-this
  request: TReqHTTPTransport = (url, options) => {
    const {
      method, data = {}, headers = {}, timeout = 5000,
    } = options;

    let getUrl: string | null = null;

    if (method === METHODS.GET && data) {
      getUrl = url + queryStringify(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, getUrl || url);
      xhr.timeout = timeout;

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(url);
      }
    });
  };
}
