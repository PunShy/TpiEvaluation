import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  private baseUrl = '/api/';// /TpiEvaluation
  private targetUrl;
  public webapiUrl(url: string) {
    return this.targetUrl = this.baseUrl + url;
  }

  getData() {
    return this.http.get(this.targetUrl);
  }
  getDataById(id: any) {
    return this.http.get(this.targetUrl + `/${id}`);
  }
  getDataByObj<T>(jsonParam: any) {
    return this.http.get<T>(this.targetUrl, {
      params: jsonParam,
      observe: 'response'
    });
  }

  postData(data: any) {
    return this.http.post(this.targetUrl, data);
    // .subscribe(res => {
    //   this.proData = res.json();
    // }, err => console.log(err) );
  }
  postDataFromBody(data: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.targetUrl, data, { headers });
  }

  deleteData(keyValue: string) {
    return this.http.delete(this.targetUrl + '/' + keyValue);
    // .subscribe(res => {
    //   this.proData = res.json();
    // }, err => console.log(err) );
  }
}
