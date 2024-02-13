import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../state/demand.interface';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Demand[]>{
    return this.http.get<Demand[]>("http://localhost:8080/api/v1/tasks");
  }
}
