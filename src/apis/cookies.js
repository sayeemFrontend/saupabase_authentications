const keyValues = document.cookie?.split('; ');

class Cookie {
  constructor() {
    this.cookies = () =>
      keyValues.reduce((cum, it) => {
        const [k, v] = it.split('=');
        return { [k]: v, ...cum };
      }, {});
  }

  getCooke = (key) => {
    return this.cookies[key];
  };
  setCooke = (key, value, expires) => {
    const exp = new Date(expires * 1000);
    document.cookie = `${key}=${value}; expires=${exp}`;
    return { key: value };
  };

  removeCooke(keys = ['token', 'refresh_token']) {
    keys.forEach((key) => {
      this.setCooke(key, '', 0);
    });
  }
  clear() {
    this.removeCooke(Object.keys(this.cookies));
    return this.cookies;
  }
}
export const cookeStorage = new Cookie();
