import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topics } from './models/price';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicetService {
  baseurl1="../assets/topics.json"
  constructor(private http:HttpClient) {}
  ngOnInit():void{}
  top():Observable<Topics[]>{
    return this.http.get<Topics[]>(`${this.baseurl1}`);
  }
}
