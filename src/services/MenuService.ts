import { Http } from './Http';

export class MenuService extends Http {

  private URL_API: string = '';

  constructor() {
    super();
    this.URL_API = `http://localhost:3000`;
  }

  public getMenu(): Promise<any> {
    return this.get(`${this.URL_API}/menu`);
  }
}
