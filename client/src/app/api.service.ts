import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  getTeams(): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(`${this.URL}/getteams`);
  }
  assigntask(data: object): Observable<any> {
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      observer: 'response'
    };
    console.log("data==>",data);
    return this.http.post(`${this.URL}/assigntask`,data, headers);
  }
}