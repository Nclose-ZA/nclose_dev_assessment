import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpclient : HttpClient) {}
  baseUrl = environment.baseUrl; 

  //calling the public ip api
  getIP() {
    return this.httpclient.get<any>(this.baseUrl)
    .pipe(map((res: any) => {
        return res;
     }));
  }
}
