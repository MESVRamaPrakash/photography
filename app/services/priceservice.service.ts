import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price} from '../models/price';


@Injectable({
  providedIn: 'root'
})
export class PriceserviceService {
  baseurl="../assets/price.json";
  constructor(private http:HttpClient) { }

  ngOnInit():void{}

  fun():Observable<Price[]>{
    return this.http.get<Price[]>(`${this.baseurl}`);  
  }
}
