import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IipAddress } from '../models/ipModel';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
// TO DO Implement an abstract service that other services will extend
export abstract class DataService  {

    constructor(private http: HttpClient) { }
    public getIP(url: string): Observable<IipAddress>{
        return this.http.get<IipAddress>(url);
   };


}
