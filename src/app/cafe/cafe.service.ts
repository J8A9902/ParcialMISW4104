import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cafe } from './cafe';
@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private url: string = environment.baseUrl + '202212_MISW4104_Grupo3.json';

  constructor(private http: HttpClient) { }
  getCafes(): Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.url)
  }
}
