import { Observable } from 'rxjs';
import { IApi } from './../models/api.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //inserisco l'Observable nel serivizo dl componente dove mettterò sub e unsub
  getActivity(): Observable<IApi> {
    return this.http.get<IApi>('https://www.boredapi.com/api/activity/');
  }
}
