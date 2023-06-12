
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { IipAddress } from 'src/app/models/ipModel';

@Injectable({
    providedIn: 'root'
})
    //TO DO extend the DataService
export class TaskService  {
   
    constructor(private http: HttpClient) {
       
    }
    getIP():Observable<IipAddress> {
        return this.http.get<IipAddress>(environment.apiEndpoint)
}
    
}
