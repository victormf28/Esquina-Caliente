import axios from 'axios';

export class Http {
  private axios: any;

  constructor() {
    this.axios = axios;
  }

  public get(url: string, params?: object): Promise<any> {
    return params ?
      axios.get(url, params).then(({ data }) => data) :
      axios.get(url).then(({ data }) => data);
  }

  public post(url: string, data: any): Promise<any> {
    return axios.post(url, data);
  }
}
